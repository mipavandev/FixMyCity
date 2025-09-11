import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  ArrowLeft, 
  Search, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  Filter,
  Construction,
  Trash2,
  Lightbulb,
  Droplets
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const MyIssues = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const issues = [
    {
      id: "FC202400001",
      category: "potholes",
      title: "Large pothole on MG Road",
      location: "MG Road, Sector 12, Bangalore",
      status: "in-progress",
      reportedDate: "2024-01-15",
      lastUpdate: "2024-01-18",
      description: "Deep pothole causing traffic issues",
      icon: Construction
    },
    {
      id: "FC202400012",
      category: "garbage",
      title: "Overflowing garbage bin",
      location: "HSR Layout, 2nd Sector",
      status: "resolved",
      reportedDate: "2024-01-10",
      lastUpdate: "2024-01-14",
      description: "Garbage bin overflowing for 3 days",
      icon: Trash2
    },
    {
      id: "FC202400023",
      category: "streetlights",
      title: "Broken street light",
      location: "Koramangala, 4th Block",
      status: "reported",
      reportedDate: "2024-01-20",
      lastUpdate: "2024-01-20",
      description: "Street light not working since last week",
      icon: Lightbulb
    },
    {
      id: "FC202400034",
      category: "water",
      title: "Water leakage on main road",
      location: "Indiranagar, 1st Stage", 
      status: "in-progress",
      reportedDate: "2024-01-18",
      lastUpdate: "2024-01-19",
      description: "Continuous water leakage causing road damage",
      icon: Droplets
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "reported": return "bg-status-reported";
      case "in-progress": return "bg-status-progress";
      case "resolved": return "bg-status-resolved";
      default: return "bg-gray-500";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "reported": return <Clock size={16} />;
      case "in-progress": return <AlertCircle size={16} />;
      case "resolved": return <CheckCircle size={16} />;
      default: return <Clock size={16} />;
    }
  };

  const filteredIssues = issues.filter(issue => {
    const matchesSearch = issue.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         issue.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === "all" || issue.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-6">
        <div className="flex items-center space-x-4">
          <Link to="/">
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/20">
              <ArrowLeft size={20} />
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold">My Issues</h1>
            <p className="text-primary-foreground/80">Track your reported issues</p>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="p-6 space-y-4">
        <div className="relative">
          <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search by ticket ID or title..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2">
          <Button 
            variant={filterStatus === "all" ? "default" : "outline"} 
            size="sm"
            onClick={() => setFilterStatus("all")}
          >
            All ({issues.length})
          </Button>
          <Button 
            variant={filterStatus === "reported" ? "default" : "outline"} 
            size="sm"
            onClick={() => setFilterStatus("reported")}
          >
            Reported ({issues.filter(i => i.status === "reported").length})
          </Button>
          <Button 
            variant={filterStatus === "in-progress" ? "default" : "outline"} 
            size="sm"
            onClick={() => setFilterStatus("in-progress")}
          >
            In Progress ({issues.filter(i => i.status === "in-progress").length})
          </Button>
          <Button 
            variant={filterStatus === "resolved" ? "default" : "outline"} 
            size="sm"
            onClick={() => setFilterStatus("resolved")}
          >
            Resolved ({issues.filter(i => i.status === "resolved").length})
          </Button>
        </div>
      </div>

      {/* Issues List */}
      <div className="px-6 space-y-4">
        {filteredIssues.length === 0 ? (
          <Card className="p-8 text-center">
            <div className="text-muted-foreground">
              <Filter size={48} className="mx-auto mb-4 opacity-50" />
              <p>No issues found matching your criteria</p>
            </div>
          </Card>
        ) : (
          filteredIssues.map((issue) => {
            const IconComponent = issue.icon;
            return (
              <Card key={issue.id} className="p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                    <IconComponent size={20} />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="text-xs">
                          {issue.id}
                        </Badge>
                        <Badge className={`text-xs text-white ${getStatusColor(issue.status)}`}>
                          {getStatusIcon(issue.status)}
                          <span className="ml-1 capitalize">{issue.status.replace('-', ' ')}</span>
                        </Badge>
                      </div>
                    </div>
                    
                    <h3 className="font-semibold text-foreground mb-1 truncate">
                      {issue.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-2 truncate">
                      {issue.location}
                    </p>
                    
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {issue.description}
                    </p>
                    
                    <div className="flex justify-between items-center text-xs text-muted-foreground">
                      <span>Reported: {new Date(issue.reportedDate).toLocaleDateString()}</span>
                      <span>Updated: {new Date(issue.lastUpdate).toLocaleDateString()}</span>
                    </div>
                    
                    <div className="mt-3 flex gap-2">
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                      {issue.status === "resolved" && (
                        <Button size="sm" variant="ghost">
                          Rate Resolution
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })
        )}
      </div>

      {/* Quick Actions */}
      <div className="p-6">
        <Link to="/report">
          <Button size="lg" className="w-full">
            Report New Issue
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default MyIssues;