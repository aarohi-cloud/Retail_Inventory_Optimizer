
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, ArrowRight, CheckCircle2 } from "lucide-react";

interface Message {
  id: string;
  timestamp: string;
  from: {
    id: string;
    type: "store" | "warehouse" | "supplier" | "customer";
    name: string;
  };
  to: {
    id: string;
    type: "store" | "warehouse" | "supplier" | "customer";
    name: string;
  };
  message: string;
  status: "pending" | "confirmed" | "rejected";
}

interface AgentCommunicationProps {
  messages: Message[];
}

export function AgentCommunication({ messages: initialMessages }: AgentCommunicationProps) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [autoUpdate, setAutoUpdate] = useState(true);

  useEffect(() => {
    if (!autoUpdate) return;

    // Simulate new messages being added
    const interval = setInterval(() => {
      const newMessage: Message = {
        id: `msg-${Date.now()}`,
        timestamp: new Date().toISOString(),
        from: {
          id: `agent-${Math.floor(Math.random() * 10)}`,
          type: ["store", "warehouse", "supplier", "customer"][
            Math.floor(Math.random() * 4)
          ] as "store" | "warehouse" | "supplier" | "customer",
          name: `${["Store", "Warehouse", "Supplier", "Customer"][
            Math.floor(Math.random() * 4)
          ]} ${Math.floor(Math.random() * 5) + 1}`,
        },
        to: {
          id: `agent-${Math.floor(Math.random() * 10)}`,
          type: ["store", "warehouse", "supplier", "customer"][
            Math.floor(Math.random() * 4)
          ] as "store" | "warehouse" | "supplier" | "customer",
          name: `${["Store", "Warehouse", "Supplier", "Customer"][
            Math.floor(Math.random() * 4)
          ]} ${Math.floor(Math.random() * 5) + 1}`,
        },
        message: [
          "Requesting inventory transfer of 20 units",
          "Stock levels critical, need immediate resupply",
          "Confirming delivery of 100 units scheduled for tomorrow",
          "Customer demand increased by 15% for Product A",
          "Adjusting forecast based on recent sales data",
          "Requesting price optimization for slow-moving inventory"
        ][Math.floor(Math.random() * 6)],
        status: ["pending", "confirmed", "rejected"][
          Math.floor(Math.random() * 3)
        ] as "pending" | "confirmed" | "rejected",
      };

      setMessages((prev) => [newMessage, ...prev.slice(0, 14)]); // Keep max 15 messages
    }, 5000);

    return () => clearInterval(interval);
  }, [autoUpdate]);

  const getAgentColor = (type: string) => {
    switch (type) {
      case "store": return "bg-agent-store text-white";
      case "warehouse": return "bg-agent-warehouse text-white";
      case "supplier": return "bg-agent-supplier text-white";
      case "customer": return "bg-agent-customer text-white";
      default: return "bg-gray-500 text-white";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending": return "bg-amber-500 text-white";
      case "confirmed": return "bg-green-500 text-white";
      case "rejected": return "bg-red-500 text-white";
      default: return "bg-gray-500 text-white";
    }
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <Card className="col-span-2">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle>Agent Communication</CardTitle>
        <div className="flex items-center space-x-2">
          <Badge 
            variant={autoUpdate ? "default" : "outline"} 
            className="cursor-pointer" 
            onClick={() => setAutoUpdate(!autoUpdate)}
          >
            {autoUpdate ? "Live Updates" : "Paused"}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px]">
          <div className="space-y-4">
            {messages.map((msg) => (
              <Alert key={msg.id} className="py-2">
                <div className="flex items-start space-x-2">
                  <AlertCircle className={`h-4 w-4 ${
                    msg.status === "pending" ? "text-amber-500" : 
                    msg.status === "confirmed" ? "text-green-500" : "text-red-500"
                  }`} />
                  <div className="flex-1">
                    <AlertDescription>
                      <div className="flex items-center space-x-2 mb-1">
                        <Badge className={getAgentColor(msg.from.type)}>
                          {msg.from.name}
                        </Badge>
                        <ArrowRight className="h-3 w-3" />
                        <Badge className={getAgentColor(msg.to.type)}>
                          {msg.to.name}
                        </Badge>
                        <Badge className={getStatusColor(msg.status)}>
                          {msg.status}
                        </Badge>
                        <span className="text-xs text-muted-foreground ml-auto">
                          {formatTimestamp(msg.timestamp)}
                        </span>
                      </div>
                      <p className="text-sm">{msg.message}</p>
                    </AlertDescription>
                  </div>
                </div>
              </Alert>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}

export default AgentCommunication;
