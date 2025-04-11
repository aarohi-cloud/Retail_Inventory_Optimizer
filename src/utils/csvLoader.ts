
/**
 * Utility functions for loading and parsing CSV data
 */

/**
 * Loads a CSV file and returns the parsed data
 * @param filePath Path to the CSV file in the public directory
 * @returns Promise that resolves to the parsed data
 */
export const loadCsvData = async (filePath: string): Promise<any[]> => {
  try {
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error(`Failed to load CSV file: ${response.status} ${response.statusText}`);
    }
    
    const csvText = await response.text();
    return parseCsv(csvText);
  } catch (error) {
    console.error(`Error loading CSV data from ${filePath}:`, error);
    throw error;
  }
};

/**
 * Parses CSV text into an array of objects
 * @param csvText The CSV text to parse
 * @returns Array of objects representing the CSV data
 */
export const parseCsv = (csvText: string): any[] => {
  // Split by lines and filter out empty lines
  const lines = csvText.split('\n').filter(line => line.trim() !== '');
  
  if (lines.length === 0) {
    return [];
  }
  
  // Get headers from the first line
  const headers = lines[0].split(',').map(header => header.trim());
  
  // Parse data rows
  const data = lines.slice(1).map(line => {
    const values = line.split(',').map(value => value.trim());
    const row: Record<string, string | number> = {};
    
    headers.forEach((header, index) => {
      // Try to convert to number if possible
      const value = values[index];
      const numValue = Number(value);
      
      if (!isNaN(numValue) && value !== '') {
        row[header] = numValue;
      } else {
        row[header] = value || '';
      }
    });
    
    return row;
  });
  
  return data;
};
