
import { useState } from 'react';
import { useCsvData } from '@/hooks/useCsvData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { FileSpreadsheet, RefreshCw } from 'lucide-react';

export function CsvDataDisplay() {
  const [selectedFile, setSelectedFile] = useState('/data/demand_forecasting.csv');
  
  const { data, isLoading, error } = useCsvData(selectedFile);

  const csvFiles = [
    { value: '/data/demand_forecasting.csv', label: 'Demand Forecasting' },
    { value: '/data/inventory_monitoring.csv', label: 'Inventory Monitoring' },
    { value: '/data/pricing_optimization.csv', label: 'Pricing Optimization' },
  ];

  const handleRefresh = () => {
    // Force re-fetch by setting the same file path
    setSelectedFile(prev => {
      const current = prev;
      setSelectedFile('');
      setTimeout(() => setSelectedFile(current), 10);
      return prev;
    });
  };

  return (
    <Card className="col-span-5">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <FileSpreadsheet className="h-5 w-5" />
          <CardTitle>CSV Data Viewer</CardTitle>
        </div>
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            size="icon"
            onClick={handleRefresh}
            disabled={isLoading}
          >
            <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
          </Button>
          <Select value={selectedFile} onValueChange={setSelectedFile}>
            <SelectTrigger className="w-[240px]">
              <SelectValue placeholder="Select CSV file" />
            </SelectTrigger>
            <SelectContent>
              {csvFiles.map(file => (
                <SelectItem key={file.value} value={file.value}>
                  {file.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="overflow-auto max-h-[500px] p-0">
        {isLoading && (
          <div className="flex justify-center items-center h-40">
            <div className="flex flex-col items-center gap-2">
              <RefreshCw className="h-8 w-8 animate-spin text-primary" />
              <p>Loading data...</p>
            </div>
          </div>
        )}
        
        {error && (
          <div className="p-6 text-center">
            <div className="bg-destructive/10 text-destructive p-4 rounded-md mb-4">
              <p className="font-medium">Error loading data</p>
              <p className="text-sm mt-1">{error.message}</p>
            </div>
            <Button 
              variant="outline" 
              onClick={handleRefresh}
            >
              Retry
            </Button>
          </div>
        )}
        
        {!isLoading && !error && data.length > 0 && (
          <div className="p-2">
            <Table>
              <TableHeader>
                <TableRow>
                  {Object.keys(data[0]).map((header) => (
                    <TableHead key={header}>{header}</TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map((row, i) => (
                  <TableRow key={i}>
                    {Object.values(row).map((cell, j) => (
                      <TableCell key={j}>{cell as React.ReactNode}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
        
        {!isLoading && !error && data.length === 0 && (
          <div className="flex justify-center items-center h-40 text-muted-foreground">
            No data available
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default CsvDataDisplay;
