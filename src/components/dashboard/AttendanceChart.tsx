import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Calendar, Clock, Award } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

interface AttendanceData {
  month: string;
  attendance: number;
  target: number;
}

interface AttendanceChartProps {
  data?: AttendanceData[];
  currentAttendance?: number;
  targetAttendance?: number;
  totalClasses?: number;
  attendedClasses?: number;
}

const defaultData: AttendanceData[] = [
  { month: 'Jan', attendance: 85, target: 75 },
  { month: 'Feb', attendance: 92, target: 75 },
  { month: 'Mar', attendance: 78, target: 75 },
  { month: 'Apr', attendance: 88, target: 75 },
  { month: 'May', attendance: 95, target: 75 },
  { month: 'Jun', attendance: 90, target: 75 },
];

export default function AttendanceChart({ 
  data = defaultData, 
  currentAttendance = 88,
  targetAttendance = 75,
  totalClasses = 120,
  attendedClasses = 106
}: AttendanceChartProps) {
  const isAboveTarget = currentAttendance >= targetAttendance;
  const progressColor = isAboveTarget ? "bg-success" : currentAttendance >= 70 ? "bg-warning" : "bg-destructive";

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* Main Attendance Chart */}
      <Card className="col-span-2">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Attendance Trend
              </CardTitle>
              <CardDescription>
                Your monthly attendance performance over time
              </CardDescription>
            </div>
            <Badge variant={isAboveTarget ? "default" : "destructive"}>
              {currentAttendance}% Current
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
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
                dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
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

      {/* Current Progress */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-secondary" />
            Current Progress
          </CardTitle>
          <CardDescription>This semester's attendance</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">{currentAttendance}%</div>
            <Progress value={currentAttendance} className="h-3" />
            <div className="flex justify-between text-sm text-muted-foreground mt-2">
              <span>{attendedClasses} attended</span>
              <span>{totalClasses} total</span>
            </div>
          </div>

          <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">Target</span>
            </div>
            <span className="font-semibold">{targetAttendance}%</span>
          </div>

          {isAboveTarget ? (
            <div className="flex items-center gap-2 text-success text-sm">
              <Award className="h-4 w-4" />
              <span>Great job! Above target</span>
            </div>
          ) : (
            <div className="text-sm text-warning">
              Need {Math.ceil((targetAttendance * totalClasses / 100) - attendedClasses)} more classes
            </div>
          )}
        </CardContent>
      </Card>

      {/* Weekly Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle>This Week</CardTitle>
          <CardDescription>Daily attendance breakdown</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={[
              { day: 'Mon', attended: 1, total: 1 },
              { day: 'Tue', attended: 2, total: 2 },
              { day: 'Wed', attended: 1, total: 2 },
              { day: 'Thu', attended: 3, total: 3 },
              { day: 'Fri', attended: 2, total: 2 },
            ]}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="attended" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              <Bar dataKey="total" fill="hsl(var(--muted))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}