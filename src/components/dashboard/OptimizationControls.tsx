
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { 
  RefreshCw, 
  TrendingUp, 
  ShoppingCart, 
  Truck, 
  AlertTriangle,
  Save 
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Switch } from "@/components/ui/switch";

export function OptimizationControls() {
  const [safetyStock, setSafetyStock] = useState([20]); // %
  const [inventory, setInventory] = useState([50]); // %
  const [customerService, setCustomerService] = useState([85]); // %
  const [costFocus, setCostFocus] = useState([65]); // %
  const [autoOptimize, setAutoOptimize] = useState(true);
  const [optimizing, setOptimizing] = useState(false);
  
  const { toast } = useToast();

  const handleOptimize = () => {
    setOptimizing(true);
    
    // Simulate optimization process
    setTimeout(() => {
      setOptimizing(false);
      
      // Generate slightly adjusted values
      setSafetyStock([Math.min(Math.max(safetyStock[0] + (Math.random() * 10 - 5), 5), 40)]);
      setInventory([Math.min(Math.max(inventory[0] + (Math.random() * 10 - 5), 30), 80)]);
      setCustomerService([Math.min(Math.max(customerService[0] + (Math.random() * 5 - 2), 70), 95)]);
      setCostFocus([Math.min(Math.max(costFocus[0] + (Math.random() * 10 - 5), 40), 90)]);
      
      toast({
        title: "Optimization Complete",
        description: "System has optimized inventory parameters based on current data.",
      });
    }, 2000);
  };

  const handleSaveParameters = () => {
    toast({
      title: "Parameters Saved",
      description: "Your inventory optimization parameters have been saved."
    });
  };

  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Inventory Optimization Controls</span>
          <div className="flex items-center space-x-2">
            <Switch 
              id="auto-optimize" 
              checked={autoOptimize} 
              onCheckedChange={setAutoOptimize} 
            />
            <Label htmlFor="auto-optimize" className="text-sm font-normal">
              Auto-Optimize
            </Label>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="safety-stock" className="flex items-center">
                <AlertTriangle className="w-4 h-4 mr-2 text-amber-500" />
                Safety Stock Level
              </Label>
              <span className="font-bold">{safetyStock[0].toFixed(1)}%</span>
            </div>
            <Slider
              id="safety-stock"
              value={safetyStock}
              onValueChange={setSafetyStock}
              max={50}
              step={0.5}
            />
            <p className="text-xs text-muted-foreground">Higher safety stock reduces stockouts but increases holding costs</p>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="inventory-turn" className="flex items-center">
                <RefreshCw className="w-4 h-4 mr-2 text-blue-500" />
                Inventory Turnover Rate
              </Label>
              <span className="font-bold">{inventory[0].toFixed(1)}%</span>
            </div>
            <Slider
              id="inventory-turn"
              value={inventory}
              onValueChange={setInventory}
              max={100}
              step={0.5}
            />
            <p className="text-xs text-muted-foreground">Higher turnover reduces holding costs but may increase stockout risk</p>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="customer-service" className="flex items-center">
                <ShoppingCart className="w-4 h-4 mr-2 text-green-500" />
                Customer Service Level
              </Label>
              <span className="font-bold">{customerService[0].toFixed(1)}%</span>
            </div>
            <Slider
              id="customer-service"
              value={customerService}
              onValueChange={setCustomerService}
              min={60}
              max={99.9}
              step={0.1}
            />
            <p className="text-xs text-muted-foreground">Higher service level increases customer satisfaction but also costs</p>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="cost-focus" className="flex items-center">
                <TrendingUp className="w-4 h-4 mr-2 text-purple-500" />
                Cost Optimization Focus
              </Label>
              <span className="font-bold">{costFocus[0].toFixed(1)}%</span>
            </div>
            <Slider
              id="cost-focus"
              value={costFocus}
              onValueChange={setCostFocus}
              max={100}
              step={0.5}
            />
            <p className="text-xs text-muted-foreground">Higher cost focus reduces expenditure but may affect service levels</p>
          </div>
          
          <div className="flex space-x-2 pt-4">
            <Button onClick={handleOptimize} disabled={optimizing} className="flex-1">
              {optimizing ? (
                <>
                  <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                  Optimizing...
                </>
              ) : (
                <>
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Optimize Now
                </>
              )}
            </Button>
            <Button variant="outline" onClick={handleSaveParameters} className="flex-1">
              <Save className="mr-2 h-4 w-4" />
              Save Parameters
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default OptimizationControls;
