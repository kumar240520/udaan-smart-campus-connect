import Header from "@/components/layout/Header";
import StatsCards from "@/components/dashboard/StatsCards";
import AttendanceChart from "@/components/dashboard/AttendanceChart";
import GamificationPanel from "@/components/dashboard/GamificationPanel";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  BookOpen, 
  Users, 
  MessageCircle, 
  ChevronRight,
  Clock,
  MapPin,
  QrCode,
  Camera
} from "lucide-react";

interface DashboardProps {
  userRole?: 'student' | 'faculty' | 'admin';
}

export default function Dashboard({ userRole = 'student' }: DashboardProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header userRole={userRole} />
      
      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            Good morning, {userRole === 'student' ? 'John' : 'Dr. Smith'}! 👋
          </h1>
          <p className="text-muted-foreground">
            {userRole === 'student' 
              ? "You have 3 classes today. Let's make it a great day!" 
              : "You have 4 classes scheduled today. 12 students need attention."
            }
          </p>
        </div>

        {/* Stats Overview */}
        <StatsCards userRole={userRole} />

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Attendance Analytics */}
            <AttendanceChart />

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>
                  {userRole === 'student' 
                    ? "Mark your attendance and manage your schedule"
                    : "Manage your classes and student interactions"
                  }
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {userRole === 'student' ? (
                    <>
                      <Button variant="hero" className="h-20 flex-col gap-2">
                        <QrCode className="h-6 w-6" />
                        <span className="text-xs">Scan QR</span>
                      </Button>
                      <Button variant="outline" className="h-20 flex-col gap-2">
                        <Camera className="h-6 w-6" />
                        <span className="text-xs">Face Check-in</span>
                      </Button>
                      <Button variant="outline" className="h-20 flex-col gap-2">
                        <MapPin className="h-6 w-6" />
                        <span className="text-xs">Location</span>
                      </Button>
                      <Button variant="outline" className="h-20 flex-col gap-2">
                        <BookOpen className="h-6 w-6" />
                        <span className="text-xs">Study Hub</span>
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button variant="hero" className="h-20 flex-col gap-2">
                        <Users className="h-6 w-6" />
                        <span className="text-xs">View Students</span>
                      </Button>
                      <Button variant="outline" className="h-20 flex-col gap-2">
                        <Calendar className="h-6 w-6" />
                        <span className="text-xs">Schedule</span>
                      </Button>
                      <Button variant="outline" className="h-20 flex-col gap-2">
                        <MessageCircle className="h-6 w-6" />
                        <span className="text-xs">Announcements</span>
                      </Button>
                      <Button variant="outline" className="h-20 flex-col gap-2">
                        <BookOpen className="h-6 w-6" />
                        <span className="text-xs">Reports</span>
                      </Button>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Today's Schedule */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      Today's Schedule
                    </CardTitle>
                    <CardDescription>
                      {new Date().toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </CardDescription>
                  </div>
                  <Button variant="ghost" size="sm">
                    View All <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    {
                      time: '9:00 AM',
                      subject: 'Data Structures',
                      room: 'Room 301',
                      status: 'attended',
                      attendance: userRole === 'faculty' ? '45/50' : undefined
                    },
                    {
                      time: '11:00 AM',
                      subject: 'Database Management',
                      room: 'Room 205',
                      status: 'attended',
                      attendance: userRole === 'faculty' ? '42/50' : undefined
                    },
                    {
                      time: '2:00 PM',
                      subject: 'Software Engineering',
                      room: 'Room 401',
                      status: 'upcoming',
                      attendance: userRole === 'faculty' ? '0/50' : undefined
                    },
                    {
                      time: '4:00 PM',
                      subject: 'Machine Learning',
                      room: 'Lab 102',
                      status: 'upcoming',
                      attendance: userRole === 'faculty' ? '0/45' : undefined
                    },
                  ].map((classItem, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-smooth">
                      <div className="flex items-center gap-3">
                        <div className="flex flex-col items-center">
                          <Clock className="h-4 w-4 text-muted-foreground mb-1" />
                          <span className="text-xs font-medium">{classItem.time}</span>
                        </div>
                        <div>
                          <h4 className="font-medium">{classItem.subject}</h4>
                          <p className="text-sm text-muted-foreground flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {classItem.room}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {userRole === 'faculty' && classItem.attendance && (
                          <span className="text-sm text-muted-foreground">{classItem.attendance}</span>
                        )}
                        <Badge 
                          variant={classItem.status === 'attended' ? 'secondary' : 'outline'}
                          className="capitalize"
                        >
                          {classItem.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {userRole === 'student' && <GamificationPanel />}
            
            {/* Recent Activity / News */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-secondary" />
                  {userRole === 'student' ? 'Campus News' : 'Recent Activity'}
                </CardTitle>
                <CardDescription>
                  {userRole === 'student' ? 'Latest updates and announcements' : 'Student interactions and updates'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    {
                      title: userRole === 'student' ? 'Tech Fest 2024 Registration Open' : 'John Doe marked present',
                      time: '2 hours ago',
                      type: userRole === 'student' ? 'announcement' : 'attendance'
                    },
                    {
                      title: userRole === 'student' ? 'New Study Groups Available' : 'Sarah Smith submitted assignment',
                      time: '4 hours ago',
                      type: userRole === 'student' ? 'community' : 'assignment'
                    },
                    {
                      title: userRole === 'student' ? 'Scholarship Opportunity' : 'Mike Johnson absent today',
                      time: '1 day ago',
                      type: userRole === 'student' ? 'opportunity' : 'attendance'
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-smooth cursor-pointer">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium line-clamp-2">{item.title}</h4>
                        <p className="text-xs text-muted-foreground mt-1">{item.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="ghost" size="sm" className="w-full mt-3">
                  View All <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}