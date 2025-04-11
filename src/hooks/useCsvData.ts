
import { useState, useEffect } from 'react';
import { loadCsvData } from '@/utils/csvLoader';

type CsvDataState<T> = {
  data: T[];
  isLoading: boolean;
  error: Error | null;
};

/**
 * Hook for loading CSV data from the public directory
 * @param filePath Path to the CSV file in the public directory
 * @returns Object containing the parsed data, loading state, and any error
 */
export function useCsvData<T = any>(filePath: string): CsvDataState<T> {
  const [state, setState] = useState<CsvDataState<T>>({
    data: [],
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setState(prev => ({ ...prev, isLoading: true }));
        const data = await loadCsvData(filePath);
        setState({ data: data as T[], isLoading: false, error: null });
      } catch (error) {
        setState({ data: [], isLoading: false, error: error as Error });
      }
    };

    fetchData();
  }, [filePath]);

  return state;
}
