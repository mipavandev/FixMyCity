import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Plus, 
  Search, 
  Construction, 
  Trash2, 
  Lightbulb, 
  Droplets, 
  MapPin,
  TrendingUp 
} from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const categories = [
    { icon: Construction, label: "Potholes", color: "bg-status-reported", count: 24 },
    { icon: Trash2, label: "Garbage", color: "bg-accent", count: 18 },
    { icon: Lightbulb, label: "Streetlights", color: "bg-status-progress", count: 12 },
    { icon: Droplets, label: "Water Issues", color: "bg-primary", count: 8 },
  ];

  const recentIssues = [
    { id: "FC2024001", category: "Pothole", location: "MG Road", status: "Reported", time: "2 hours ago" },
    { id: "FC2024002", category: "Garbage", location: "Park Street", status: "In Progress", time: "4 hours ago" },
    { id: "FC2024003", category: "Streetlight", location: "City Center", status: "Resolved", time: "1 day ago" },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-6 rounded-b-3xl">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Welcome Back!</h1>
              <p className="text-primary-foreground/80">Let's make our city better</p>
            </div>
            <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
              <MapPin size={20} />
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
            <Input
              placeholder="Enter Ticket ID to track issue..."
              className="pl-10 bg-background/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
            />
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Quick Report Button */}
        <Link to="/report">
          <Button size="lg" className="w-full h-16 text-lg font-semibold bg-accent hover:bg-accent/90">
            <Plus size={24} className="mr-2" />
            Report New Issue
          </Button>
        </Link>

        {/* Category Grid */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Categories</h2>
          <div className="grid grid-cols-2 gap-4">
            {categories.map(({ icon: Icon, label, color, count }) => (
              <Card key={label} className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center text-white`}>
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium">{label}</h3>
                    <p className="text-sm text-muted-foreground">{count} reported</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Recent Activity</h2>
            <Link to="/my-issues">
              <Button variant="ghost" size="sm">
                <TrendingUp size={16} className="mr-1" />
                View All
              </Button>
            </Link>
          </div>

          <div className="space-y-3">
            {recentIssues.map((issue) => (
              <Card key={issue.id} className="p-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <p className="font-medium text-sm">{issue.id}</p>
                      <Badge variant="outline" className="text-xs">
                        {issue.category}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{issue.location}</p>
                    <p className="text-xs text-muted-foreground">{issue.time}</p>
                  </div>
                  <Badge 
                    variant={issue.status === "Resolved" ? "default" : "secondary"}
                    className={
                      issue.status === "Reported" ? "bg-status-reported" :
                      issue.status === "In Progress" ? "bg-status-progress" :
                      "bg-status-resolved"
                    }
                  >
                    {issue.status}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Map View Button */}
        <Link to="/map">
          <Button size="lg" variant="outline" className="w-full">
            <MapPin size={20} className="mr-2" />
            View City Map
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;