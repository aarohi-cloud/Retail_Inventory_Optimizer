
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard,
  Boxes,
  LineChart,
  Users,
  Settings,
  Network,
  History
} from "lucide-react";
import { NavLink } from "react-router-dom";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn("pb-12 h-full bg-sidebar", className)}>
      <div className="space-y-4 py-4">
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
            Overview
          </h2>
          <div className="space-y-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sidebar-foreground transition-all hover:text-sidebar-primary",
                  isActive ? "bg-sidebar-accent text-sidebar-primary" : "transparent"
                )
              }
            >
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </NavLink>
            <NavLink
              to="/inventory"
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sidebar-foreground transition-all hover:text-sidebar-primary",
                  isActive ? "bg-sidebar-accent text-sidebar-primary" : "transparent"
                )
              }
            >
              <Boxes className="h-4 w-4" />
              Inventory
            </NavLink>
            <NavLink
              to="/forecasting"
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sidebar-foreground transition-all hover:text-sidebar-primary",
                  isActive ? "bg-sidebar-accent text-sidebar-primary" : "transparent"
                )
              }
            >
              <LineChart className="h-4 w-4" />
              Forecasting
            </NavLink>
            <NavLink
              to="/agents"
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sidebar-foreground transition-all hover:text-sidebar-primary",
                  isActive ? "bg-sidebar-accent text-sidebar-primary" : "transparent"
                )
              }
            >
              <Network className="h-4 w-4" />
              Agent Network
            </NavLink>
          </div>
        </div>
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
            Analytics
          </h2>
          <div className="space-y-1">
            <NavLink
              to="/history"
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sidebar-foreground transition-all hover:text-sidebar-primary",
                  isActive ? "bg-sidebar-accent text-sidebar-primary" : "transparent"
                )
              }
            >
              <History className="h-4 w-4" />
              History
            </NavLink>
            <NavLink
              to="/users"
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sidebar-foreground transition-all hover:text-sidebar-primary",
                  isActive ? "bg-sidebar-accent text-sidebar-primary" : "transparent"
                )
              }
            >
              <Users className="h-4 w-4" />
              Users
            </NavLink>
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sidebar-foreground transition-all hover:text-sidebar-primary",
                  isActive ? "bg-sidebar-accent text-sidebar-primary" : "transparent"
                )
              }
            >
              <Settings className="h-4 w-4" />
              Settings
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
