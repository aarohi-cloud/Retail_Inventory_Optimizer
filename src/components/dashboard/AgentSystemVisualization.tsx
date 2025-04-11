
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

export interface Agent {
  id: string;
  type: 'store' | 'warehouse' | 'supplier' | 'customer';
  name: string;
  x: number;
  y: number;
  status: 'active' | 'inactive' | 'warning';
  connections: string[];
  latestMessage?: {
    from: string;
    content: string;
    timestamp: string;
  };
}

const AGENT_RADIUS = 30;

interface AgentSystemVisualizationProps {
  agents: Agent[];
}

export function AgentSystemVisualization({ agents }: AgentSystemVisualizationProps) {
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);

  const getColorByAgentType = (type: Agent['type']) => {
    switch (type) {
      case 'store': return 'bg-agent-store text-white';
      case 'warehouse': return 'bg-agent-warehouse text-white';
      case 'supplier': return 'bg-agent-supplier text-white';
      case 'customer': return 'bg-agent-customer text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getStrokeByAgentType = (type: Agent['type']) => {
    switch (type) {
      case 'store': return '#3498db';
      case 'warehouse': return '#2ecc71';
      case 'supplier': return '#9b59b6';
      case 'customer': return '#e74c3c';
      default: return '#95a5a6';
    }
  };

  const handleAgentClick = (agent: Agent) => {
    setSelectedAgent(agent);
    toast(`${agent.name} is ${agent.status}`, {
      description: agent.latestMessage 
        ? `Last message: ${agent.latestMessage.content}`
        : "No recent messages",
      position: "bottom-right",
    });
  };

  return (
    <Card className="col-span-2 h-[600px]">
      <CardHeader>
        <CardTitle>Multi-Agent System Architecture</CardTitle>
      </CardHeader>
      <CardContent className="p-0 overflow-hidden relative h-[540px]">
        <div className="absolute top-0 left-0 right-0 bottom-0">
          <svg width="100%" height="100%" className="bg-slate-50 dark:bg-slate-950">
            {/* Draw connections between agents */}
            {agents.map(agent => 
              agent.connections.map(targetId => {
                const targetAgent = agents.find(a => a.id === targetId);
                if (!targetAgent) return null;
                
                return (
                  <line
                    key={`${agent.id}-${targetId}`}
                    x1={agent.x}
                    y1={agent.y}
                    x2={targetAgent.x}
                    y2={targetAgent.y}
                    stroke={getStrokeByAgentType(agent.type)}
                    strokeOpacity={0.5}
                    strokeWidth={2}
                    className="agent-connection"
                  />
                );
              })
            )}
            
            {/* Draw agent nodes */}
            {agents.map(agent => (
              <g key={agent.id}>
                {/* Pulse animation for active agents */}
                {agent.status === 'active' && (
                  <circle
                    cx={agent.x}
                    cy={agent.y}
                    r={AGENT_RADIUS + 5}
                    fill={getStrokeByAgentType(agent.type)}
                    opacity={0.2}
                    className="animate-ping-small"
                  />
                )}
                
                {/* Agent circle */}
                <circle
                  cx={agent.x}
                  cy={agent.y}
                  r={AGENT_RADIUS}
                  fill={getStrokeByAgentType(agent.type)}
                  stroke={agent.status === 'warning' ? '#f39c12' : (
                    agent.status === 'inactive' ? '#95a5a6' : getStrokeByAgentType(agent.type)
                  )}
                  strokeWidth={3}
                  onClick={() => handleAgentClick(agent)}
                  style={{ cursor: 'pointer' }}
                />
                
                {/* Agent label */}
                <text
                  x={agent.x}
                  y={agent.y}
                  textAnchor="middle"
                  dy=".3em"
                  fill="white"
                  fontSize="10"
                  fontWeight="bold"
                  pointerEvents="none"
                >
                  {agent.name}
                </text>
                
                {/* Status indicator */}
                <circle
                  cx={agent.x + AGENT_RADIUS - 5}
                  cy={agent.y - AGENT_RADIUS + 5}
                  r={5}
                  fill={
                    agent.status === 'active' ? '#2ecc71' : 
                    agent.status === 'warning' ? '#f39c12' : '#95a5a6'
                  }
                  stroke="#fff"
                  strokeWidth={1.5}
                />
              </g>
            ))}
          </svg>
        </div>
        
        {/* Agent details panel */}
        {selectedAgent && (
          <div className="absolute bottom-0 right-0 p-4 bg-white dark:bg-slate-900 border rounded-tl-md shadow-md w-64">
            <h4 className="font-bold mb-1">{selectedAgent.name}</h4>
            <p className="text-xs text-muted-foreground mb-2">
              {selectedAgent.type.charAt(0).toUpperCase() + selectedAgent.type.slice(1)} Agent
            </p>
            <div className="flex items-center mb-2">
              <div className={`w-2 h-2 rounded-full mr-2 ${
                selectedAgent.status === 'active' ? 'bg-green-500' : 
                selectedAgent.status === 'warning' ? 'bg-amber-500' : 'bg-gray-500'
              }`}></div>
              <span className="text-xs">
                {selectedAgent.status.charAt(0).toUpperCase() + selectedAgent.status.slice(1)}
              </span>
            </div>
            {selectedAgent.latestMessage && (
              <div className="text-xs p-2 bg-slate-100 dark:bg-slate-800 rounded mt-2">
                <p className="font-semibold">Latest message:</p>
                <p className="text-muted-foreground">{selectedAgent.latestMessage.content}</p>
                <p className="text-muted-foreground text-right mt-1">
                  - {selectedAgent.latestMessage.from}
                </p>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default AgentSystemVisualization;
