import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  GraduationCap, 
  Target, 
  Trophy, 
  BookOpen, 
  Clock, 
  TrendingUp,
  Calendar,
  Users
} from "lucide-react";

interface StatsCardsProps {
  userRole?: 'student' | 'faculty' | 'admin';
}

export default function StatsCards({ userRole = 'student' }: StatsCardsProps) {
  if (userRole === 'student') {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Current Attendance */}
        <Card className="hover:shadow-md transition-smooth">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Attendance</CardTitle>
            <GraduationCap className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">88.5%</div>
            <Progress value={88.5} className="mt-2 h-2" />
            <p className="text-xs text-muted-foreground mt-2">
              Above target by 13.5%
            </p>
          </CardContent>
        </Card>

        {/* Classes This Week */}
        <Card className="hover:shadow-md transition-smooth">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Week</CardTitle>
            <Calendar className="h-4 w-4 text-secondary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">9/10</div>
            <div className="flex items-center gap-2 mt-2">
              <Badge variant="secondary" className="text-xs">90%</Badge>
              <span className="text-xs text-muted-foreground">classes attended</span>
            </div>
          </CardContent>
        </Card>

        {/* Streak */}
        <Card className="hover:shadow-md transition-smooth">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Streak</CardTitle>
            <Trophy className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold flex items-center gap-1">
              🔥 15
              <span className="text-sm font-normal text-muted-foreground">days</span>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Personal best: 23 days
            </p>
          </CardContent>
        </Card>

        {/* Gamification Points */}
        <Card className="hover:shadow-md transition-smooth">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">XP Points</CardTitle>
            <Target className="h-4 w-4 text-accent-glow" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-accent">2,450</div>
            <div className="flex items-center gap-2 mt-2">
              <Badge className="text-xs bg-gradient-accent text-accent-foreground">Level 12</Badge>
              <span className="text-xs text-muted-foreground">550 to next</span>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (userRole === 'faculty') {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Total Students */}
        <Card className="hover:shadow-md transition-smooth">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">
              Across 4 classes
            </p>
          </CardContent>
        </Card>

        {/* Average Attendance */}
        <Card className="hover:shadow-md transition-smooth">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Attendance</CardTitle>
            <TrendingUp className="h-4 w-4 text-secondary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-secondary">82.3%</div>
            <p className="text-xs text-success">
              +2.1% from last month
            </p>
          </CardContent>
        </Card>

        {/* Classes Today */}
        <Card className="hover:shadow-md transition-smooth">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Classes Today</CardTitle>
            <BookOpen className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">
              Next: Data Structures at 2:00 PM
            </p>
          </CardContent>
        </Card>

        {/* Low Attendance Alert */}
        <Card className="hover:shadow-md transition-smooth border-warning/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Alerts</CardTitle>
            <Clock className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">12</div>
            <p className="text-xs text-muted-foreground">
              Students below 75%
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return null;
}