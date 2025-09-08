import Header from "@/components/layout/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  BarChart3, 
  TrendingUp, 
  Calendar, 
  Users, 
  Clock,
  Download,
  Filter,
  ChevronDown
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const monthlyData = [
  { month: 'Jan', attendance: 85, target: 75, classes: 20 },
  { month: 'Feb', attendance: 92, target: 75, classes: 18 },
  { month: 'Mar', attendance: 78, target: 75, classes: 22 },
  { month: 'Apr', attendance: 88, target: 75, classes: 21 },
  { month: 'May', attendance: 95, target: 75, classes: 19 },
  { month: 'Jun', attendance: 90, target: 75, classes: 20 },
];

const subjectData = [
  { subject: 'Data Structures', attendance: 95, total: 40, present: 38 },
  { subject: 'DBMS', attendance: 88, total: 35, present: 31 },
  { subject: 'Software Eng', attendance: 82, total: 38, present: 31 },
  { subject: 'Machine Learning', attendance: 90, total: 30, present: 27 },
  { subject: 'Networks', attendance: 75, total: 32, present: 24 },
];

const weeklyData = [
  { day: 'Mon', present: 4, total: 4 },
  { day: 'Tue', present: 3, total: 4 },
  { day: 'Wed', present: 4, total: 4 },
  { day: 'Thu', present: 3, total: 3 },
  { day: 'Fri', present: 2, total: 3 },
];

const attendanceDistribution = [
  { name: 'Excellent (90-100%)', value: 35, color: '#10b981' },
  { name: 'Good (80-89%)', value: 40, color: '#3b82f6' },
  { name: 'Average (70-79%)', value: 20, color: '#f59e0b' },
  { name: 'Poor (<70%)', value: 5, color: '#ef4444' },
];

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-6 space-y-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Analytics & Reports</h1>
            <p className="text-muted-foreground">
              Comprehensive insights into your attendance patterns and performance.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filter
              <ChevronDown className="h-4 w-4 ml-2" />
            </Button>
            <Button variant="hero">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">88.5%</div>
                  <div className="text-sm text-muted-foreground">Overall Average</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <div className="text-2xl font-bold">151/170</div>
                  <div className="text-sm text-muted-foreground">Classes Attended</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="text-2xl font-bold">15</div>
                  <div className="text-sm text-muted-foreground">Current Streak</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-success/20 flex items-center justify-center">
                  <Users className="h-5 w-5 text-success" />
                </div>
                <div>
                  <div className="text-2xl font-bold">7th</div>
                  <div className="text-sm text-muted-foreground">Class Rank</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Monthly Trend */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  Monthly Attendance Trend
                </CardTitle>
                <CardDescription>Your attendance performance over the last 6 months</CardDescription>
              </div>
              <Badge variant="secondary">Above Target</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="month" />
                <YAxis domain={[60, 100]} />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="attendance" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={3}
                  dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 6 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="target" 
                  stroke="hsl(var(--muted-foreground))" 
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Subject-wise Performance */}
          <Card>
            <CardHeader>
              <CardTitle>Subject-wise Performance</CardTitle>
              <CardDescription>Attendance breakdown by subject</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {subjectData.map((subject, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">{subject.subject}</span>
                      <span className="text-muted-foreground">{subject.present}/{subject.total}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Progress value={subject.attendance} className="flex-1 h-2" />
                      <span className="text-sm font-medium min-w-[50px]">{subject.attendance}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Weekly Pattern */}
          <Card>
            <CardHeader>
              <CardTitle>This Week's Pattern</CardTitle>
              <CardDescription>Daily attendance this week</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="present" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="total" fill="hsl(var(--muted))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Class Distribution & Insights */}
        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Attendance Distribution</CardTitle>
              <CardDescription>How your classmates are performing</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={attendanceDistribution}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, value }) => `${value}%`}
                  >
                    {attendanceDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-4 space-y-2">
                {attendanceDistribution.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: item.color }}
                    />
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Insights & Recommendations */}
          <Card>
            <CardHeader>
              <CardTitle>AI Insights & Recommendations</CardTitle>
              <CardDescription>Personalized suggestions to improve your attendance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-success/10 border border-success/20 rounded-lg">
                  <h4 className="font-medium text-success mb-2">Great Progress! 🎉</h4>
                  <p className="text-sm text-muted-foreground">
                    You're performing above average with a 15-day streak. Keep it up!
                  </p>
                </div>
                
                <div className="p-4 bg-warning/10 border border-warning/20 rounded-lg">
                  <h4 className="font-medium text-warning mb-2">Improve Networks Attendance</h4>
                  <p className="text-sm text-muted-foreground">
                    Your Networks attendance (75%) could use improvement. Try setting reminders.
                  </p>
                </div>
                
                <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
                  <h4 className="font-medium text-primary mb-2">Optimal Study Schedule</h4>
                  <p className="text-sm text-muted-foreground">
                    Based on your patterns, you're most consistent on Mon-Wed. Focus extra effort on Fridays.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}