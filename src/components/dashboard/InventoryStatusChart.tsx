
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ReferenceLine,
  ResponsiveContainer 
} from "recharts";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

interface InventoryData {
  productId: string;
  productName: string;
  currentStock: number;
  safetyStock: number;
  maxStock: number;
  onOrder: number;
}

interface InventoryStatusChartProps {
  data: InventoryData[];
  locations: string[];
}

export function InventoryStatusChart({ 
  data, 
  locations 
}: InventoryStatusChartProps) {
  const [location, setLocation] = useState(locations[0]);

  // For the demo, we'll just adjust data slightly based on location
  const getLocationData = (locationName: string) => {
    // Apply a multiplier based on location name to vary the data
    const multiplier = locationName === locations[0] ? 1 : 
                      locationName === locations[1] ? 0.8 : 0.6;
    
    return data.map(item => ({
      ...item,
      currentStock: Math.floor(item.currentStock * multiplier),
      safetyStock: item.safetyStock,
      maxStock: item.maxStock,
      onOrder: Math.floor(item.onOrder * (multiplier + 0.2)),
    }));
  };

  const displayData = getLocationData(location);

  return (
    <Card className="col-span-3">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Inventory Status</CardTitle>
        <Select value={location} onValueChange={setLocation}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Location" />
          </SelectTrigger>
          <SelectContent>
            {locations.map(loc => (
              <SelectItem key={loc} value={loc}>{loc}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={displayData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 60,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
            <XAxis 
              dataKey="productName" 
              tick={{ fontSize: 12 }}
              angle={-45}
              textAnchor="end"
              height={70}
            />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                borderColor: "#ddd",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
            />
            <Legend />
            <ReferenceLine y={0} stroke="#000" />
            <Bar dataKey="safetyStock" name="Safety Stock" fill="#f39c12" opacity={0.3} />
            <Bar dataKey="currentStock" name="Current Stock" fill="#3498db" />
            <Bar dataKey="onOrder" name="On Order" fill="#2ecc71" opacity={0.8} stackId="a" />
            <ReferenceLine
              y={0}
              label={{ position: "top" }}
              stroke="#666"
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

export default InventoryStatusChart;
