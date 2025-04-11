
// Mock data for the retail inventory system

export const mockDemandForecastData = [
  { date: "Apr 1", actual: 120, forecast: 115, forecastLower: 105, forecastUpper: 125 },
  { date: "Apr 2", actual: 132, forecast: 125, forecastLower: 115, forecastUpper: 135 },
  { date: "Apr 3", actual: 101, forecast: 110, forecastLower: 100, forecastUpper: 120 },
  { date: "Apr 4", actual: 134, forecast: 120, forecastLower: 110, forecastUpper: 130 },
  { date: "Apr 5", actual: 90, forecast: 100, forecastLower: 90, forecastUpper: 110 },
  { date: "Apr 6", actual: 110, forecast: 105, forecastLower: 95, forecastUpper: 115 },
  { date: "Apr 7", actual: 120, forecast: 115, forecastLower: 105, forecastUpper: 125 },
  { date: "Apr 8", actual: 140, forecast: 130, forecastLower: 120, forecastUpper: 140 },
  { date: "Apr 9", actual: 145, forecast: 140, forecastLower: 130, forecastUpper: 150 },
  { date: "Apr 10", actual: 160, forecast: 150, forecastLower: 140, forecastUpper: 160 },
  { date: "Apr 11", actual: null, forecast: 155, forecastLower: 145, forecastUpper: 165 },
  { date: "Apr 12", actual: null, forecast: 160, forecastLower: 150, forecastUpper: 170 },
  { date: "Apr 13", actual: null, forecast: 165, forecastLower: 155, forecastUpper: 175 },
  { date: "Apr 14", actual: null, forecast: 170, forecastLower: 160, forecastUpper: 180 }
];

export const mockProductCategories = [
  "Electronics", 
  "Clothing", 
  "Food & Beverage", 
  "Home Goods", 
  "Beauty"
];

export const mockInventoryData = [
  {
    productId: "001",
    productName: "Laptop",
    currentStock: 45,
    safetyStock: 20,
    maxStock: 100,
    onOrder: 15
  },
  {
    productId: "002",
    productName: "Smartphone",
    currentStock: 78,
    safetyStock: 30,
    maxStock: 150,
    onOrder: 25
  },
  {
    productId: "003",
    productName: "Headphones",
    currentStock: 23,
    safetyStock: 15,
    maxStock: 75,
    onOrder: 10
  },
  {
    productId: "004",
    productName: "Monitor",
    currentStock: 17,
    safetyStock: 10,
    maxStock: 50,
    onOrder: 20
  },
  {
    productId: "005",
    productName: "Keyboard",
    currentStock: 62,
    safetyStock: 25,
    maxStock: 100,
    onOrder: 0
  },
  {
    productId: "006",
    productName: "Mouse",
    currentStock: 89,
    safetyStock: 30,
    maxStock: 120,
    onOrder: 0
  }
];

export const mockLocations = [
  "Main Warehouse",
  "East Coast Distribution",
  "West Coast Distribution"
];

export const mockAgentData = [
  // Store agents
  {
    id: "store-1",
    type: "store" as const,
    name: "Store 1",
    x: 150,
    y: 100,
    status: "active" as const,
    connections: ["warehouse-1", "customer-1", "customer-2"],
    latestMessage: {
      from: "Warehouse 1",
      content: "Shipment #45781 arriving tomorrow with 25 units of SKU-123",
      timestamp: new Date().toISOString()
    }
  },
  {
    id: "store-2",
    type: "store" as const,
    name: "Store 2",
    x: 150,
    y: 250,
    status: "active" as const,
    connections: ["warehouse-1", "customer-3"]
  },
  {
    id: "store-3",
    type: "store" as const,
    name: "Store 3",
    x: 150,
    y: 400,
    status: "warning" as const,
    connections: ["warehouse-2", "customer-4"],
    latestMessage: {
      from: "System",
      content: "Inventory below safety stock for SKU-456",
      timestamp: new Date().toISOString()
    }
  },
  
  // Warehouse agents
  {
    id: "warehouse-1",
    type: "warehouse" as const,
    name: "Warehouse 1",
    x: 350,
    y: 175,
    status: "active" as const,
    connections: ["store-1", "store-2", "supplier-1", "supplier-2"]
  },
  {
    id: "warehouse-2",
    type: "warehouse" as const,
    name: "Warehouse 2",
    x: 350,
    y: 325,
    status: "active" as const,
    connections: ["store-3", "supplier-2", "supplier-3"]
  },
  
  // Supplier agents
  {
    id: "supplier-1",
    type: "supplier" as const,
    name: "Supplier 1",
    x: 550,
    y: 100,
    status: "active" as const,
    connections: ["warehouse-1"]
  },
  {
    id: "supplier-2",
    type: "supplier" as const,
    name: "Supplier 2",
    x: 550,
    y: 250,
    status: "inactive" as const,
    connections: ["warehouse-1", "warehouse-2"],
    latestMessage: {
      from: "System",
      content: "Production delay - shipment postponed by 3 days",
      timestamp: new Date().toISOString()
    }
  },
  {
    id: "supplier-3",
    type: "supplier" as const,
    name: "Supplier 3",
    x: 550,
    y: 400,
    status: "active" as const,
    connections: ["warehouse-2"]
  },
  
  // Customer agents
  {
    id: "customer-1",
    type: "customer" as const,
    name: "Customer A",
    x: 50,
    y: 50,
    status: "active" as const,
    connections: ["store-1"]
  },
  {
    id: "customer-2",
    type: "customer" as const,
    name: "Customer B",
    x: 50,
    y: 150,
    status: "active" as const,
    connections: ["store-1"]
  },
  {
    id: "customer-3",
    type: "customer" as const,
    name: "Customer C",
    x: 50,
    y: 250,
    status: "active" as const,
    connections: ["store-2"]
  },
  {
    id: "customer-4",
    type: "customer" as const,
    name: "Customer D",
    x: 50,
    y: 400,
    status: "active" as const,
    connections: ["store-3"]
  }
];

export const mockAgentMessages = [
  {
    id: "msg-1",
    timestamp: new Date(Date.now() - 1000 * 60 * 5).toISOString(),
    from: {
      id: "warehouse-1",
      type: "warehouse" as const,
      name: "Warehouse 1"
    },
    to: {
      id: "store-1",
      type: "store" as const,
      name: "Store 1"
    },
    message: "Shipment #45781 dispatched with 25 units of SKU-123",
    status: "confirmed" as const
  },
  {
    id: "msg-2",
    timestamp: new Date(Date.now() - 1000 * 60 * 15).toISOString(),
    from: {
      id: "store-3",
      type: "store" as const,
      name: "Store 3"
    },
    to: {
      id: "warehouse-2",
      type: "warehouse" as const,
      name: "Warehouse 2"
    },
    message: "Requesting emergency resupply of SKU-456 (current stock: 3 units)",
    status: "pending" as const
  },
  {
    id: "msg-3",
    timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
    from: {
      id: "supplier-2",
      type: "supplier" as const,
      name: "Supplier 2"
    },
    to: {
      id: "warehouse-1",
      type: "warehouse" as const,
      name: "Warehouse 1"
    },
    message: "Production delay for order #789 - shipment postponed by 3 days",
    status: "confirmed" as const
  },
  {
    id: "msg-4",
    timestamp: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
    from: {
      id: "customer-1",
      type: "customer" as const,
      name: "Customer A"
    },
    to: {
      id: "store-1",
      type: "store" as const,
      name: "Store 1"
    },
    message: "Updated demand forecast shows 15% increase for next week",
    status: "confirmed" as const
  },
  {
    id: "msg-5",
    timestamp: new Date(Date.now() - 1000 * 60 * 60).toISOString(),
    from: {
      id: "warehouse-2",
      type: "warehouse" as const,
      name: "Warehouse 2"
    },
    to: {
      id: "supplier-3",
      type: "supplier" as const,
      name: "Supplier 3"
    },
    message: "Placing order for 150 units of SKU-789 with expedited shipping",
    status: "confirmed" as const
  }
];

export const mockStatsData = {
  stockOutRate: {
    value: "2.3%",
    trend: -0.8,
    description: "vs last month"
  },
  inventoryTurnover: {
    value: "4.2",
    trend: 0.5,
    description: "turns per month"
  },
  forecastAccuracy: {
    value: "91.5%",
    trend: 2.1,
    description: "last 30 days"
  },
  holdingCost: {
    value: "$12,458",
    trend: -3.2,
    description: "monthly savings"
  }
};
