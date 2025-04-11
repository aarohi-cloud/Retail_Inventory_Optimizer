
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from "recharts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface DemandData {
  date: string;
  actual: number;
  forecast: number;
  forecastLower?: number;
  forecastUpper?: number;
}

interface DemandForecastChartProps {
  data: DemandData[];
  productCategories: string[];
}

export function DemandForecastChart({ 
  data, 
  productCategories 
}: DemandForecastChartProps) {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Demand Forecast</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all">
          <TabsList className="mb-4">
            <TabsTrigger value="all">All Products</TabsTrigger>
            {productCategories.map((category) => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value="all" className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                <XAxis 
                  dataKey="date"
                  tick={{ fontSize: 12 }}
                  padding={{ left: 10, right: 10 }}
                />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    borderColor: "#ddd",
                    borderRadius: "4px",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="actual"
                  stroke="#3498db"
                  strokeWidth={2}
                  dot={{ r: 3 }}
                  activeDot={{ r: 6 }}
                  name="Actual Demand"
                />
                <Line
                  type="monotone"
                  dataKey="forecast"
                  stroke="#9b59b6"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={{ r: 3, strokeWidth: 1 }}
                  name="Forecast"
                />
                {data[0]?.forecastLower && (
                  <Line
                    type="monotone"
                    dataKey="forecastLower"
                    stroke="#9b59b6"
                    strokeWidth={1}
                    strokeOpacity={0.5}
                    dot={false}
                    name="Lower Bound"
                  />
                )}
                {data[0]?.forecastUpper && (
                  <Line
                    type="monotone"
                    dataKey="forecastUpper"
                    stroke="#9b59b6"
                    strokeWidth={1}
                    strokeOpacity={0.5}
                    dot={false}
                    name="Upper Bound"
                  />
                )}
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>
          {/* We'll just use the same data for all tabs in this demo */}
          {productCategories.map((category) => (
            <TabsContent key={category} value={category} className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={data.map(d => ({...d, forecast: d.forecast * (Math.random() * 0.4 + 0.8)}))}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                  <XAxis 
                    dataKey="date"
                    tick={{ fontSize: 12 }}
                    padding={{ left: 10, right: 10 }}
                  />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="actual"
                    stroke="#3498db"
                    strokeWidth={2}
                    dot={{ r: 3 }}
                    activeDot={{ r: 6 }}
                    name="Actual Demand"
                  />
                  <Line
                    type="monotone"
                    dataKey="forecast"
                    stroke="#9b59b6"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    dot={{ r: 3, strokeWidth: 1 }}
                    name={`${category} Forecast`}
                  />
                </LineChart>
              </ResponsiveContainer>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
}

export default DemandForecastChart;
