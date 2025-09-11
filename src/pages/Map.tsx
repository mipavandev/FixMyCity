import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft,
  MapPin,
  Filter,
  Search,
  Navigation,
  Layers,
  Eye,
  MessageSquare,
  ThumbsUp
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Map = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedIssue, setSelectedIssue] = useState<string | null>(null);

  const issueTypes = [
    { id: "all", label: "All Issues", color: "bg-gray-500", count: 45 },
    { id: "potholes", label: "Potholes", color: "bg-orange-500", count: 12 },
    { id: "garbage", label: "Garbage", color: "bg-green-500", count: 8 },
    { id: "streetlights", label: "Lights", color: "bg-yellow-500", count: 7 },
    { id: "water", label: "Water", color: "bg-blue-500", count: 10 },
    { id: "traffic", label: "Traffic", color: "bg-red-500", count: 8 }
  ];

  const mapIssues = [
    { 
      id: "FC202400001", 
      type: "potholes", 
      x: 25, 
      y: 35, 
      title: "Large pothole",
      location: "MG Road",
      status: "reported",
      upvotes: 12,
      comments: 3
    },
    { 
      id: "FC202400002", 
      type: "garbage", 
      x: 60, 
      y: 20, 
      title: "Overflowing bin",
      location: "HSR Layout",
      status: "in-progress",
      upvotes: 8,
      comments: 2
    },
    { 
      id: "FC202400003", 
      type: "streetlights", 
      x: 40, 
      y: 70, 
      title: "Broken street light",
      location: "Koramangala",
      status: "reported",
      upvotes: 15,
      comments: 5
    },
    { 
      id: "FC202400004", 
      type: "water", 
      x: 75, 
      y: 45, 
      title: "Water leakage",
      location: "Indiranagar",
      status: "resolved",
      upvotes: 6,
      comments: 1
    },
    { 
      id: "FC202400005", 
      type: "potholes", 
      x: 15, 
      y: 80, 
      title: "Road damage",
      location: "Whitefield",
      status: "in-progress",
      upvotes: 20,
      comments: 7
    },
    { 
      id: "FC202400006", 
      type: "traffic", 
      x: 85, 
      y: 30, 
      title: "Broken signal",
      location: "Marathahalli",
      status: "reported",
      upvotes: 25,
      comments: 10
    }
  ];

  const getIssueColor = (type: string, status: string) => {
    const typeColor = issueTypes.find(t => t.id === type)?.color || "bg-gray-500";
    const opacity = status === "resolved" ? "opacity-50" : status === "in-progress" ? "opacity-75" : "";
    return `${typeColor} ${opacity}`;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "reported": return "bg-status-reported";
      case "in-progress": return "bg-status-progress"; 
      case "resolved": return "bg-status-resolved";
      default: return "bg-gray-500";
    }
  };

  const filteredIssues = activeFilter === "all" 
    ? mapIssues 
    : mapIssues.filter(issue => issue.type === activeFilter);

  const selectedIssueData = selectedIssue 
    ? mapIssues.find(issue => issue.id === selectedIssue)
    : null;

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/20">
                <ArrowLeft size={20} />
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold">City Map</h1>
              <p className="text-primary-foreground/80">Issues reported in your city</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/20">
              <Search size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/20">
              <Navigation size={20} />
            </Button>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center space-x-2 mb-3">
          <Layers size={16} className="text-muted-foreground" />
          <span className="text-sm font-medium">Filter by category:</span>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {issueTypes.map((type) => (
            <Button
              key={type.id}
              variant={activeFilter === type.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(type.id)}
              className="flex items-center space-x-2 whitespace-nowrap"
            >
              <div className={`w-3 h-3 rounded-full ${type.color}`}></div>
              <span>{type.label}</span>
              <Badge variant="secondary" className="text-xs">
                {activeFilter === type.id ? filteredIssues.length : type.count}
              </Badge>
            </Button>
          ))}
        </div>
      </div>

      {/* Map Area */}
      <div className="p-4">
        <Card className="relative overflow-hidden">
          {/* Stylized Map Background */}
          <div 
            className="relative bg-gradient-to-br from-green-100 via-green-50 to-blue-50 min-h-[400px] rounded-lg border-2 border-dashed border-gray-300"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(34, 197, 94, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 40% 60%, rgba(168, 85, 247, 0.05) 0%, transparent 50%)
              `
            }}
          >
            {/* City Streets Illustration */}
            <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 400">
              {/* Main Roads */}
              <path d="M0 100 L400 100" stroke="#666" strokeWidth="3" strokeDasharray="5,5" />
              <path d="M0 200 L400 200" stroke="#666" strokeWidth="4" strokeDasharray="8,4" />
              <path d="M0 300 L400 300" stroke="#666" strokeWidth="3" strokeDasharray="5,5" />
              
              {/* Vertical Roads */}
              <path d="M100 0 L100 400" stroke="#666" strokeWidth="2" strokeDasharray="3,3" />
              <path d="M200 0 L200 400" stroke="#666" strokeWidth="3" strokeDasharray="5,5" />
              <path d="M300 0 L300 400" stroke="#666" strokeWidth="2" strokeDasharray="3,3" />
              
              {/* Area Labels */}
              <text x="50" y="50" className="text-xs fill-gray-600 font-medium">HSR Layout</text>
              <text x="250" y="50" className="text-xs fill-gray-600 font-medium">Koramangala</text>
              <text x="50" y="150" className="text-xs fill-gray-600 font-medium">BTM Layout</text>
              <text x="250" y="150" className="text-xs fill-gray-600 font-medium">Indiranagar</text>
              <text x="50" y="350" className="text-xs fill-gray-600 font-medium">Whitefield</text>
              <text x="250" y="350" className="text-xs fill-gray-600 font-medium">Marathahalli</text>
            </svg>

            {/* Issue Markers */}
            {filteredIssues.map((issue) => (
              <div
                key={issue.id}
                className={`absolute w-6 h-6 rounded-full border-2 border-white shadow-lg cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 hover:scale-125 ${
                  getIssueColor(issue.type, issue.status)
                } ${selectedIssue === issue.id ? 'ring-4 ring-primary ring-opacity-50 scale-125' : ''}`}
                style={{ 
                  left: `${issue.x}%`, 
                  top: `${issue.y}%`
                }}
                onClick={() => setSelectedIssue(selectedIssue === issue.id ? null : issue.id)}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
            ))}

            {/* Current Location */}
            <div className="absolute w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow-lg animate-pulse" style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
              <div className="absolute inset-0 rounded-full bg-blue-600 animate-ping opacity-75"></div>
            </div>

            {/* Center Label */}
            <div className="absolute" style={{ left: '50%', top: '45%', transform: 'translate(-50%, -50%)' }}>
              <div className="bg-white px-2 py-1 rounded shadow-sm border text-xs font-medium text-blue-600">
                📍 Your Location
              </div>
            </div>
          </div>

          {/* Map Controls */}
          <div className="absolute top-4 right-4 space-y-2">
            <Button size="sm" variant="secondary" className="shadow-lg">
              <Navigation size={16} />
            </Button>
            <Button size="sm" variant="secondary" className="shadow-lg">
              +
            </Button>
            <Button size="sm" variant="secondary" className="shadow-lg">
              -
            </Button>
          </div>

          {/* Legend */}
          <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-lg border">
            <h4 className="text-xs font-semibold mb-2">Issue Status</h4>
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <span className="text-xs">Reported</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-75"></div>
                <span className="text-xs">In Progress</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-green-500 opacity-50"></div>
                <span className="text-xs">Resolved</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Issue Details Card */}
        {selectedIssueData && (
          <Card className="mt-4 p-4 border-l-4 border-l-primary">
            <div className="space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-foreground">{selectedIssueData.title}</h3>
                  <div className="flex items-center text-sm text-muted-foreground mt-1">
                    <MapPin size={14} className="mr-1" />
                    {selectedIssueData.location}
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className={`text-xs text-white ${getStatusColor(selectedIssueData.status)}`}>
                    {selectedIssueData.status.replace('-', ' ').toUpperCase()}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {selectedIssueData.id}
                  </Badge>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <ThumbsUp size={14} className="mr-1" />
                    {selectedIssueData.upvotes}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MessageSquare size={14} className="mr-1" />
                    {selectedIssueData.comments}
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">
                    <Eye size={14} className="mr-1" />
                    View Details
                  </Button>
                  <Button size="sm">
                    <ThumbsUp size={14} className="mr-1" />
                    Upvote
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        )}

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          <Card className="p-4 text-center">
            <div className="text-2xl font-bold text-primary">{filteredIssues.length}</div>
            <div className="text-sm text-muted-foreground">
              {activeFilter === "all" ? "Total Issues" : `${issueTypes.find(t => t.id === activeFilter)?.label} Issues`}
            </div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-2xl font-bold text-status-resolved">
              {filteredIssues.filter(issue => issue.status === "resolved").length}
            </div>
            <div className="text-sm text-muted-foreground">Resolved</div>
          </Card>
        </div>

        {/* Report Button */}
        <Link to="/report" className="block mt-4">
          <Button size="lg" className="w-full">
            <MapPin size={20} className="mr-2" />
            Report Issue at This Location
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Map;