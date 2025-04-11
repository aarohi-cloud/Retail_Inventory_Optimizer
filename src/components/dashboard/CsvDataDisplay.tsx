
import { useState } from 'react';
import { useCsvData } from '@/hooks/useCsvData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export function CsvDataDisplay() {
  const [selectedFile, setSelectedFile] = useState('/data/demand_forecasting.csv');
  
  const { data, isLoading, error } = useCsvData(selectedFile);

  return (
    <Card className="col-span-5">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>CSV Data Viewer</CardTitle>
        <Select value={selectedFile} onValueChange={setSelectedFile}>
          <SelectTrigger className="w-[240px]">
            <SelectValue placeholder="Select CSV file" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="/data/demand_forecasting.csv">Demand Forecasting</SelectItem>
            <SelectItem value="/data/inventory_monitoring.csv">Inventory Monitoring</SelectItem>
            <SelectItem value="/data/pricing_optimization.csv">Pricing Optimization</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="overflow-auto max-h-[500px]">
        {isLoading && <div className="flex justify-center p-4">Loading data...</div>}
        {error && (
          <div className="p-4 bg-red-50 text-red-600 rounded">
            <p>Error loading data: {error.message}</p>
            <Button 
              variant="outline" 
              onClick={() => window.location.reload()}
              className="mt-2"
            >
              Retry
            </Button>
          </div>
        )}
        {!isLoading && !error && data.length > 0 && (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted">
                  {Object.keys(data[0]).map((header) => (
                    <th key={header} className="p-2 text-left border">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    {Object.values(row).map((cell, j) => (
                      <td key={j} className="p-2 border">{cell as React.ReactNode}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {!isLoading && !error && data.length === 0 && (
          <div className="text-center p-4">No data available</div>
        )}
      </CardContent>
    </Card>
  );
}

export default CsvDataDisplay;
