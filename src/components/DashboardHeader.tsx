
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User, Settings, History, LogOut, Bell } from "lucide-react";
import { Link } from "react-router-dom";
{/*logo*/}
<img 
src="/lovable-uploads/84003fdb-4481-45db-89c7-ef29b876e71200.png" 
alt="VIZMORA" 
className="h-20 w-19"
/>
interface DashboardHeaderProps {
  userName: string;
  onLogout: () => void;
}

const DashboardHeader = ({ userName, onLogout }: DashboardHeaderProps) => {
  return (
    <header className="bg-slate-900/50 border-b border-blue-600/20 p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link to="/">
           
          </Link>
          <div className="hidden md:block">
            <h1 className="text-xl font-bold text-white">Dashboard</h1>
            <p className="text-gray-400 text-sm">AI-Powered Creative Tools</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {/* Credits Badge */}
          <Badge className="bg-green-600/20 text-green-400 border-green-600/30">
            Credits: 100
          </Badge>

          {/* Notifications */}
          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
            <Bell className="w-5 h-5" />
          </Button>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center space-x-2 text-gray-300 hover:text-white">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <span className="hidden md:inline">{userName}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-slate-800 border-slate-700">
              <DropdownMenuLabel className="text-gray-300">My Account</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-slate-700" />
              <DropdownMenuItem className="text-gray-300 hover:bg-slate-700 hover:text-white cursor-pointer">
                <User className="mr-2 h-4 w-4" />
                <Link to="/profile">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-gray-300 hover:bg-slate-700 hover:text-white cursor-pointer">
                <History className="mr-2 h-4 w-4" />
                <Link to="/history">History</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-gray-300 hover:bg-slate-700 hover:text-white cursor-pointer">
                <Settings className="mr-2 h-4 w-4" />
                <Link to="/settings">Settings</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-slate-700" />
              <DropdownMenuItem 
                onClick={onLogout}
                className="text-red-400 hover:bg-red-600/10 hover:text-red-300 cursor-pointer"
              >
                <LogOut className="mr-2 h-4 w-4" />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;



