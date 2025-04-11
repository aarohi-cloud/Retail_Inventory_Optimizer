
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AgentSystemVisualization } from "@/components/dashboard/AgentSystemVisualization";
import { AgentCommunication } from "@/components/dashboard/AgentCommunication";
import { mockAgentData, mockAgentMessages } from "@/services/mockData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Agents = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Agent Network</h1>
          <p className="text-muted-foreground">
            Monitor and manage multi-agent interactions
          </p>
        </div>

        <Tabs defaultValue="visualization">
          <TabsList className="mb-4">
            <TabsTrigger value="visualization">Network Visualization</TabsTrigger>
            <TabsTrigger value="communication">Agent Communication</TabsTrigger>
            <TabsTrigger value="config">Configuration</TabsTrigger>
          </TabsList>
          
          <TabsContent value="visualization" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Agent System Visualization</CardTitle>
              </CardHeader>
              <CardContent className="h-[500px]">
                <AgentSystemVisualization agents={mockAgentData} />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="communication" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Agent Communication</CardTitle>
              </CardHeader>
              <CardContent>
                <AgentCommunication messages={mockAgentMessages} />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="config" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Agent Configuration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Configure agent behaviors, rules and learning parameters.
                </p>
                {/* Agent configuration UI would go here */}
                <div className="mt-4 text-center py-8 text-muted-foreground">
                  Agent configuration interface coming soon
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Agents;
