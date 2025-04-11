
import { Layout } from "@/components/layout/Layout";
import { StatCard } from "@/components/dashboard/StatCard";
import { DemandForecastChart } from "@/components/dashboard/DemandForecastChart";
import { AgentSystemVisualization } from "@/components/dashboard/AgentSystemVisualization";
import { InventoryStatusChart } from "@/components/dashboard/InventoryStatusChart";
import { AgentCommunication } from "@/components/dashboard/AgentCommunication";
import { OptimizationControls } from "@/components/dashboard/OptimizationControls";
import { CsvDataDisplay } from "@/components/dashboard/CsvDataDisplay";
import { 
  ActivitySquare,
  RefreshCw,
  BadgePercent,
  DollarSign
} from "lucide-react";
import { 
  mockDemandForecastData,
  mockProductCategories,
  mockInventoryData,
  mockLocations,
  mockAgentData,
  mockAgentMessages,
  mockStatsData 
} from "@/services/mockData";

const Index = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Retail Agent Alchemy</h1>
          <p className="text-muted-foreground">
            Multi-Agent AI System for Optimizing Retail Inventory
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            title="Stockout Rate"
            value={mockStatsData.stockOutRate.value}
            description={mockStatsData.stockOutRate.description}
            trend={mockStatsData.stockOutRate.trend}
            icon={<ActivitySquare className="h-4 w-4" />}
          />
          <StatCard
            title="Inventory Turnover"
            value={mockStatsData.inventoryTurnover.value}
            description={mockStatsData.inventoryTurnover.description}
            trend={mockStatsData.inventoryTurnover.trend}
            icon={<RefreshCw className="h-4 w-4" />}
          />
          <StatCard
            title="Forecast Accuracy"
            value={mockStatsData.forecastAccuracy.value}
            description={mockStatsData.forecastAccuracy.description}
            trend={mockStatsData.forecastAccuracy.trend}
            icon={<BadgePercent className="h-4 w-4" />}
          />
          <StatCard
            title="Holding Cost Reduction"
            value={mockStatsData.holdingCost.value}
            description={mockStatsData.holdingCost.description}
            trend={mockStatsData.holdingCost.trend}
            icon={<DollarSign className="h-4 w-4" />}
          />
        </div>

        {/* CSV Data Display */}
        <CsvDataDisplay />

        {/* Main Dashboard Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Demand Forecast */}
          <DemandForecastChart 
            data={mockDemandForecastData} 
            productCategories={mockProductCategories}
          />
          
          {/* Optimization Controls */}
          <OptimizationControls />
          
          {/* Inventory Status */}
          <InventoryStatusChart 
            data={mockInventoryData}
            locations={mockLocations}
          />
          
          {/* Agent System Visualization */}
          <AgentSystemVisualization agents={mockAgentData} />
          
          {/* Agent Communication */}
          <AgentCommunication messages={mockAgentMessages} />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
