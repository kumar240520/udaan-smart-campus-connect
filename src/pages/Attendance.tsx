import { useState } from "react";
import Header from "@/components/layout/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  QrCode, 
  Camera, 
  MapPin, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  Wifi,
  Smartphone,
  Users,
  Calendar
} from "lucide-react";

export default function AttendancePage() {
  const [attendanceMethod, setAttendanceMethod] = useState<'qr' | 'face' | 'location' | null>(null);
  const [isScanning, setIsScanning] = useState(false);

  const handleAttendance = (method: 'qr' | 'face' | 'location') => {
    setAttendanceMethod(method);
    setIsScanning(true);
    // Simulate attendance marking
    setTimeout(() => {
      setIsScanning(false);
      // Would show success toast in real app
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-6 space-y-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Mark Attendance</h1>
          <p className="text-muted-foreground">
            Choose your preferred method to mark attendance for today's classes.
          </p>
        </div>

        {/* Current Class Info */}
        <Card className="bg-gradient-card border-primary/20">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Current Class
                </CardTitle>
                <CardDescription>Software Engineering - Room 401</CardDescription>
              </div>
              <Badge className="bg-success text-success-foreground">Active</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span>2:00 PM - 3:30 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span>Prof. Sarah Johnson</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Attendance Methods */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* QR Code Scanning */}
          <Card className="hover:shadow-lg transition-smooth cursor-pointer group" onClick={() => handleAttendance('qr')}>
            <CardHeader className="text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                <QrCode className="h-8 w-8 text-white" />
              </div>
              <CardTitle>QR Code Scan</CardTitle>
              <CardDescription>
                Scan the QR code displayed in your classroom
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-success">
                  <CheckCircle className="h-4 w-4" />
                  <span>Fast & Reliable</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-success">
                  <CheckCircle className="h-4 w-4" />
                  <span>No Location Required</span>
                </div>
                <Button variant="hero" className="w-full" disabled={isScanning && attendanceMethod === 'qr'}>
                  {isScanning && attendanceMethod === 'qr' ? 'Scanning...' : 'Start Scanning'}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Facial Recognition */}
          <Card className="hover:shadow-lg transition-smooth cursor-pointer group" onClick={() => handleAttendance('face')}>
            <CardHeader className="text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-gradient-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                <Camera className="h-8 w-8 text-white" />
              </div>
              <CardTitle>Face Recognition</CardTitle>
              <CardDescription>
                AI-powered facial recognition for secure check-in
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-success">
                  <CheckCircle className="h-4 w-4" />
                  <span>Highly Secure</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-success">
                  <CheckCircle className="h-4 w-4" />
                  <span>Fraud Proof</span>
                </div>
                <Button variant="secondary" className="w-full" disabled={isScanning && attendanceMethod === 'face'}>
                  {isScanning && attendanceMethod === 'face' ? 'Analyzing...' : 'Start Recognition'}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Location-based */}
          <Card className="hover:shadow-lg transition-smooth cursor-pointer group" onClick={() => handleAttendance('location')}>
            <CardHeader className="text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-gradient-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <CardTitle>Geofencing</CardTitle>
              <CardDescription>
                Automatic check-in when you're in the classroom
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-success">
                  <CheckCircle className="h-4 w-4" />
                  <span>Automatic</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-warning">
                  <AlertCircle className="h-4 w-4" />
                  <span>Requires Location</span>
                </div>
                <Button variant="accent" className="w-full" disabled={isScanning && attendanceMethod === 'location'}>
                  {isScanning && attendanceMethod === 'location' ? 'Checking Location...' : 'Check Location'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Today's Schedule */}
        <Card>
          <CardHeader>
            <CardTitle>Today's Classes</CardTitle>
            <CardDescription>Your attendance status for today</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { time: '9:00 AM', subject: 'Data Structures', status: 'present', room: 'Room 301' },
                { time: '11:00 AM', subject: 'Database Management', status: 'present', room: 'Room 205' },
                { time: '2:00 PM', subject: 'Software Engineering', status: 'active', room: 'Room 401' },
                { time: '4:00 PM', subject: 'Machine Learning', status: 'upcoming', room: 'Lab 102' },
              ].map((classItem, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="text-sm font-medium">{classItem.time}</div>
                      <div className="text-xs text-muted-foreground">{classItem.room}</div>
                    </div>
                    <div>
                      <h4 className="font-medium">{classItem.subject}</h4>
                    </div>
                  </div>
                  <Badge 
                    variant={
                      classItem.status === 'present' ? 'secondary' : 
                      classItem.status === 'active' ? 'default' : 'outline'
                    }
                    className="capitalize"
                  >
                    {classItem.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-success/20 flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-success" />
                </div>
                <div>
                  <div className="text-2xl font-bold">15</div>
                  <div className="text-sm text-muted-foreground">Day Streak</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Wifi className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold">88.5%</div>
                  <div className="text-sm text-muted-foreground">This Month</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <Smartphone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="text-2xl font-bold">QR</div>
                  <div className="text-sm text-muted-foreground">Preferred Method</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}