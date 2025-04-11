
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { Bell, HelpCircle, Settings } from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export function Header() {
  const { toast } = useToast();
  const [notifications, setNotifications] = useState([
    { id: 1, message: "Warehouse agent requesting inventory transfer" },
    { id: 2, message: "Supplier agent has updated delivery schedule" }
  ]);
  
  const clearNotifications = () => {
    setNotifications([]);
    toast({
      title: "Notifications cleared",
      description: "All notifications have been cleared",
    });
  };

  return (
    <header className="border-b sticky top-0 z-30 bg-background">
      <div className="flex h-16 items-center px-4 md:px-6">
        <div className="flex items-center gap-2 font-semibold">
          <div className="hidden md:flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-primary"
            >
              <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
              <path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4"></path>
              <path d="M9 14v2"></path>
              <path d="M15 14v2"></path>
            </svg>
          </div>
          <span className="text-lg md:text-xl">Retail Agent Alchemy</span>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                {notifications.length > 0 && (
                  <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] font-medium text-destructive-foreground">
                    {notifications.length}
                  </span>
                )}
                <span className="sr-only">Notifications</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <div className="flex items-center justify-between px-4 py-2">
                <span className="font-medium">Notifications</span>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={clearNotifications}
                  disabled={notifications.length === 0}
                >
                  Clear all
                </Button>
              </div>
              <div className="max-h-96 overflow-y-auto">
                {notifications.length ? (
                  notifications.map((notification) => (
                    <DropdownMenuItem key={notification.id} className="p-4 cursor-pointer">
                      <div>
                        <p className="font-medium">{notification.message}</p>
                        <p className="text-sm text-muted-foreground">
                          Just now
                        </p>
                      </div>
                    </DropdownMenuItem>
                  ))
                ) : (
                  <div className="px-4 py-8 text-center text-muted-foreground">
                    No new notifications
                  </div>
                )}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="ghost" size="icon">
            <HelpCircle className="h-5 w-5" />
            <span className="sr-only">Help</span>
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
            <span className="sr-only">Settings</span>
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
