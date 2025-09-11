import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeft,
  Users,
  MessageSquare,
  ThumbsUp,
  Share,
  MapPin,
  Eye,
  TrendingUp,
  Award,
  Calendar
} from "lucide-react";
import { Link } from "react-router-dom";

const Community = () => {
  const trendingIssues = [
    {
      id: "FC202400045",
      title: "Multiple potholes on Outer Ring Road",
      location: "Outer Ring Road, Marathahalli",
      upvotes: 127,
      comments: 23,
      status: "trending",
      reportedBy: "Rajesh K.",
      timeAgo: "2 hours ago",
      category: "potholes"
    },
    {
      id: "FC202400032",
      title: "Garbage collection missed for 5 days",
      location: "HSR Layout, Sector 3",
      upvotes: 89,
      comments: 15,
      status: "hot",
      reportedBy: "Priya M.",
      timeAgo: "4 hours ago",
      category: "garbage"
    },
    {
      id: "FC202400021",
      title: "Street lights not working in residential area",
      location: "Koramangala, 6th Block",
      upvotes: 156,
      comments: 31,
      status: "critical",
      reportedBy: "Suresh R.",
      timeAgo: "1 day ago",
      category: "streetlights"
    }
  ];

  const localGroups = [
    {
      id: 1,
      name: "HSR Layout Residents",
      members: 2456,
      activeIssues: 12,
      description: "Community group for HSR Layout area residents",
      isJoined: true,
      recentActivity: "3 new issues reported today"
    },
    {
      id: 2,
      name: "Koramangala Civic Action",
      members: 3201,
      activeIssues: 8,
      description: "Working together to improve Koramangala",
      isJoined: false,
      recentActivity: "Road cleaning drive organized"
    },
    {
      id: 3,
      name: "Indiranagar Ward Committee",
      members: 1854,
      activeIssues: 15,
      description: "Official ward committee for Indiranagar",
      isJoined: true,
      recentActivity: "Meeting scheduled for weekend"
    }
  ];

  const civicHeroes = [
    { name: "Anitha Sharma", reports: 45, resolved: 38, points: 1250, badge: "Gold Reporter" },
    { name: "Ramesh Gupta", reports: 32, resolved: 29, points: 980, badge: "Silver Champion" },
    { name: "Kavya Reddy", reports: 28, resolved: 25, points: 850, badge: "Bronze Helper" },
    { name: "Vikram Singh", reports: 22, resolved: 18, points: 720, badge: "Active Citizen" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "trending": return "bg-blue-500";
      case "hot": return "bg-orange-500";
      case "critical": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

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
            <h1 className="text-2xl font-bold">Community</h1>
            <p className="text-primary-foreground/80">Connect with your neighborhood</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <Tabs defaultValue="trending" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="trending">Trending</TabsTrigger>
            <TabsTrigger value="groups">Local Groups</TabsTrigger>
            <TabsTrigger value="heroes">Civic Heroes</TabsTrigger>
          </TabsList>

          {/* Trending Issues */}
          <TabsContent value="trending" className="space-y-4">
            <div className="text-center space-y-2">
              <TrendingUp size={24} className="mx-auto text-primary" />
              <h3 className="font-semibold">Trending Issues in Your Area</h3>
              <p className="text-sm text-muted-foreground">Most upvoted issues this week</p>
            </div>

            {trendingIssues.map((issue) => (
              <Card key={issue.id} className="p-4 hover:shadow-md transition-shadow">
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-2">
                      <Badge className={`text-xs text-white ${getStatusColor(issue.status)}`}>
                        {issue.status.toUpperCase()}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {issue.category}
                      </Badge>
                    </div>
                    <span className="text-xs text-muted-foreground">{issue.timeAgo}</span>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{issue.title}</h4>
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <MapPin size={14} className="mr-1" />
                      {issue.location}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Reported by {issue.reportedBy}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-border">
                    <div className="flex items-center space-x-4">
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                        <ThumbsUp size={16} className="mr-1" />
                        {issue.upvotes}
                      </Button>
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                        <MessageSquare size={16} className="mr-1" />
                        {issue.comments}
                      </Button>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">
                        <Eye size={16} className="mr-1" />
                        View
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Share size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          {/* Local Groups */}
          <TabsContent value="groups" className="space-y-4">
            <div className="text-center space-y-2">
              <Users size={24} className="mx-auto text-primary" />
              <h3 className="font-semibold">Local Community Groups</h3>
              <p className="text-sm text-muted-foreground">Join groups in your area to stay connected</p>
            </div>

            {localGroups.map((group) => (
              <Card key={group.id} className="p-4">
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold text-foreground">{group.name}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{group.description}</p>
                    </div>
                    {group.isJoined && (
                      <Badge variant="secondary" className="text-xs">Joined</Badge>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Users size={14} className="mr-1" />
                        {group.members.toLocaleString()} members
                      </div>
                      <div className="flex items-center">
                        <MessageSquare size={14} className="mr-1" />
                        {group.activeIssues} active issues
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-border">
                    <p className="text-xs text-muted-foreground">{group.recentActivity}</p>
                    <Button size="sm" variant={group.isJoined ? "outline" : "default"}>
                      {group.isJoined ? "View Group" : "Join Group"}
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          {/* Civic Heroes */}
          <TabsContent value="heroes" className="space-y-4">
            <div className="text-center space-y-2">
              <Award size={24} className="mx-auto text-primary" />
              <h3 className="font-semibold">Civic Heroes Leaderboard</h3>
              <p className="text-sm text-muted-foreground">Top contributors making a difference</p>
            </div>

            <Card className="p-4 bg-gradient-to-r from-amber-50 to-amber-100 border-amber-200">
              <div className="text-center space-y-2">
                <Calendar size={20} className="mx-auto text-amber-600" />
                <p className="text-sm font-medium text-amber-800">This Month's Challenge</p>
                <p className="text-xs text-amber-700">Report 5 issues to earn "Community Guardian" badge</p>
                <div className="w-full bg-amber-200 rounded-full h-2 mt-2">
                  <div className="bg-amber-500 h-2 rounded-full" style={{width: '60%'}}></div>
                </div>
                <p className="text-xs text-amber-700">3 out of 5 reports completed</p>
              </div>
            </Card>

            {civicHeroes.map((hero, index) => (
              <Card key={index} className={`p-4 ${index === 0 ? 'bg-gradient-to-r from-yellow-50 to-amber-50 border-amber-200' : ''}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white ${
                      index === 0 ? 'bg-amber-500' : 
                      index === 1 ? 'bg-gray-400' : 
                      index === 2 ? 'bg-amber-600' : 'bg-primary'
                    }`}>
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{hero.name}</h4>
                      <Badge variant="outline" className="text-xs mt-1">
                        {hero.badge}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-sm font-medium text-foreground">{hero.points} pts</div>
                    <div className="text-xs text-muted-foreground">
                      {hero.reports} reports • {hero.resolved} resolved
                    </div>
                  </div>
                </div>
              </Card>
            ))}

            <Card className="p-4 text-center border-dashed border-2 border-primary/30">
              <div className="space-y-2">
                <Award size={20} className="mx-auto text-primary opacity-50" />
                <p className="text-sm font-medium text-muted-foreground">Want to be a Civic Hero?</p>
                <p className="text-xs text-muted-foreground">Start reporting issues to climb the leaderboard!</p>
                <Link to="/report">
                  <Button size="sm" className="mt-2">
                    Report Your First Issue
                  </Button>
                </Link>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Community;