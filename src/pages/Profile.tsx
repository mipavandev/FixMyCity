import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  ArrowLeft,
  User,
  Award,
  Gift,
  Star,
  TrendingUp,
  MapPin,
  Calendar,
  Settings,
  Edit,
  Share,
  Trophy,
  Coins,
  Train,
  Bus
} from "lucide-react";
import { Link } from "react-router-dom";

const Profile = () => {
  const userStats = {
    name: "Rajesh Kumar",
    phone: "+91 98765 43210",
    email: "rajesh.kumar@email.com",
    joinDate: "January 2024",
    location: "HSR Layout, Bangalore",
    totalReports: 15,
    resolvedIssues: 12,
    currentPoints: 1250,
    level: "Gold Reporter",
    nextLevelPoints: 1500,
    pointsToNext: 250
  };

  const badges = [
    { id: 1, name: "First Reporter", description: "Reported your first issue", earned: true, icon: "🏆" },
    { id: 2, name: "Community Helper", description: "Helped resolve 5 issues", earned: true, icon: "🤝" },
    { id: 3, name: "Photo Pro", description: "Added photos to 10 reports", earned: true, icon: "📸" },
    { id: 4, name: "Location Master", description: "Accurate location in all reports", earned: true, icon: "📍" },
    { id: 5, name: "Streak Keeper", description: "Reported issues for 7 consecutive days", earned: false, icon: "🔥" },
    { id: 6, name: "Civic Champion", description: "25 reports submitted", earned: false, icon: "👑" },
  ];

  const redeemableRewards = [
    {
      id: 1,
      title: "Bangalore Metro Day Pass",
      description: "Valid for unlimited rides for one day",
      cost: 300,
      available: true,
      icon: <Train size={24} className="text-blue-600" />
    },
    {
      id: 2,
      title: "BMTC Bus Pass (Weekly)",
      description: "7-day unlimited bus travel pass",
      cost: 200,
      available: true,
      icon: <Bus size={24} className="text-green-600" />
    },
    {
      id: 3,
      title: "Civic Hero Certificate",
      description: "Official recognition certificate",
      cost: 500,
      available: userStats.currentPoints >= 500,
      icon: <Award size={24} className="text-purple-600" />
    },
    {
      id: 4,
      title: "City Mayor Meet & Greet",
      description: "Special meeting with city officials",
      cost: 2000,
      available: userStats.currentPoints >= 2000,
      icon: <Trophy size={24} className="text-gold-600" />
    }
  ];

  const recentActivity = [
    { date: "2024-01-20", action: "Reported pothole issue", points: "+25", type: "report" },
    { date: "2024-01-19", action: "Issue FC202400012 resolved", points: "+50", type: "resolved" },
    { date: "2024-01-18", action: "Earned 'Photo Pro' badge", points: "+100", type: "badge" },
    { date: "2024-01-17", action: "Reported garbage collection issue", points: "+25", type: "report" },
    { date: "2024-01-15", action: "Redeemed Metro Day Pass", points: "-300", type: "redeem" }
  ];

  const progressPercentage = ((userStats.currentPoints % 500) / 500) * 100;

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
              <h1 className="text-2xl font-bold">My Profile</h1>
              <p className="text-primary-foreground/80">Your civic contribution dashboard</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/20">
            <Settings size={20} />
          </Button>
        </div>
      </div>

      {/* Profile Summary */}
      <div className="p-6">
        <Card className="p-6 mb-6 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold">
              {userStats.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-bold text-foreground">{userStats.name}</h2>
                <Button variant="ghost" size="sm">
                  <Edit size={16} />
                </Button>
              </div>
              <div className="flex items-center text-sm text-muted-foreground mb-2">
                <MapPin size={14} className="mr-1" />
                {userStats.location}
              </div>
              <Badge className="bg-amber-500 hover:bg-amber-600">
                {userStats.level}
              </Badge>
            </div>
          </div>
        </Card>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="badges">Badges</TabsTrigger>
            <TabsTrigger value="rewards">Rewards</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-4">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 text-center">
                <div className="text-2xl font-bold text-primary">{userStats.totalReports}</div>
                <div className="text-sm text-muted-foreground">Issues Reported</div>
              </Card>
              <Card className="p-4 text-center">
                <div className="text-2xl font-bold text-status-resolved">{userStats.resolvedIssues}</div>
                <div className="text-sm text-muted-foreground">Issues Resolved</div>
              </Card>
            </div>

            {/* Civic Points */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Coins size={20} className="text-amber-500" />
                  <h3 className="font-semibold">Civic Credits</h3>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">{userStats.currentPoints}</div>
                  <div className="text-xs text-muted-foreground">Current Balance</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress to {userStats.level === "Gold Reporter" ? "Platinum Hero" : "Next Level"}</span>
                  <span>{userStats.pointsToNext} points to go</span>
                </div>
                <Progress value={progressPercentage} className="h-2" />
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="text-center p-3 bg-muted/50 rounded-lg">
                  <div className="text-sm font-medium">This Month</div>
                  <div className="text-lg font-bold text-primary">+180</div>
                  <div className="text-xs text-muted-foreground">Points Earned</div>
                </div>
                <div className="text-center p-3 bg-muted/50 rounded-lg">
                  <div className="text-sm font-medium">Lifetime</div>
                  <div className="text-lg font-bold text-primary">2,430</div>
                  <div className="text-xs text-muted-foreground">Total Earned</div>
                </div>
              </div>
            </Card>

            {/* Impact Summary */}
            <Card className="p-4">
              <h3 className="font-semibold mb-3 flex items-center">
                <TrendingUp size={20} className="mr-2 text-primary" />
                Your Impact
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Member since</span>
                  <span>{userStats.joinDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Resolution rate</span>
                  <span className="text-status-resolved font-medium">80%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Community ranking</span>
                  <span className="font-medium">#12 in HSR Layout</span>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Badges Tab */}
          <TabsContent value="badges" className="space-y-4">
            <div className="text-center space-y-2">
              <Award size={24} className="mx-auto text-primary" />
              <h3 className="font-semibold">Achievement Badges</h3>
              <p className="text-sm text-muted-foreground">Collect badges for your civic contributions</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {badges.map((badge) => (
                <Card key={badge.id} className={`p-4 ${badge.earned ? 'bg-primary/5 border-primary/30' : 'opacity-50'}`}>
                  <div className="text-center space-y-2">
                    <div className="text-3xl">{badge.icon}</div>
                    <h4 className="font-semibold text-sm">{badge.name}</h4>
                    <p className="text-xs text-muted-foreground">{badge.description}</p>
                    {badge.earned ? (
                      <Badge variant="secondary" className="text-xs">Earned</Badge>
                    ) : (
                      <Badge variant="outline" className="text-xs">Locked</Badge>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Rewards Tab */}
          <TabsContent value="rewards" className="space-y-4">
            <div className="text-center space-y-2">
              <Gift size={24} className="mx-auto text-primary" />
              <h3 className="font-semibold">Redeem Your Credits</h3>
              <p className="text-sm text-muted-foreground">Use your civic credits for real benefits</p>
            </div>

            <Card className="p-4 bg-gradient-to-r from-amber-50 to-amber-100 border-amber-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Coins size={24} className="text-amber-600" />
                  <div>
                    <div className="font-semibold text-amber-800">Available Credits</div>
                    <div className="text-sm text-amber-700">Ready to redeem</div>
                  </div>
                </div>
                <div className="text-2xl font-bold text-amber-600">{userStats.currentPoints}</div>
              </div>
            </Card>

            {redeemableRewards.map((reward) => (
              <Card key={reward.id} className={`p-4 ${!reward.available ? 'opacity-50' : ''}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                      {reward.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold">{reward.title}</h4>
                      <p className="text-sm text-muted-foreground">{reward.description}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <Coins size={14} className="text-amber-500" />
                        <span className="text-sm font-medium">{reward.cost} credits</span>
                      </div>
                    </div>
                  </div>
                  <Button 
                    size="sm" 
                    disabled={!reward.available}
                    variant={reward.available ? "default" : "secondary"}
                  >
                    {reward.available ? "Redeem" : "Locked"}
                  </Button>
                </div>
              </Card>
            ))}
          </TabsContent>

          {/* Activity Tab */}
          <TabsContent value="activity" className="space-y-4">
            <div className="text-center space-y-2">
              <Calendar size={24} className="mx-auto text-primary" />
              <h3 className="font-semibold">Recent Activity</h3>
              <p className="text-sm text-muted-foreground">Your civic engagement timeline</p>
            </div>

            <div className="space-y-3">
              {recentActivity.map((activity, index) => (
                <Card key={index} className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${
                        activity.type === 'report' ? 'bg-blue-500' :
                        activity.type === 'resolved' ? 'bg-green-500' :
                        activity.type === 'badge' ? 'bg-purple-500' :
                        'bg-orange-500'
                      }`}></div>
                      <div>
                        <div className="font-medium text-sm">{activity.action}</div>
                        <div className="text-xs text-muted-foreground">{activity.date}</div>
                      </div>
                    </div>
                    <Badge variant={activity.points.startsWith('+') ? 'default' : 'secondary'} className="text-xs">
                      {activity.points}
                    </Badge>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="p-4 text-center border-dashed border-2">
              <div className="space-y-2">
                <Star size={20} className="mx-auto text-primary opacity-50" />
                <p className="text-sm font-medium text-muted-foreground">Keep up the great work!</p>
                <p className="text-xs text-muted-foreground">Your contributions are making a difference</p>
                <Button size="sm" className="mt-2" asChild>
                  <Link to="/report">Report Another Issue</Link>
                </Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;