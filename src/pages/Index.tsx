import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  BarChart3, 
  Trophy, 
  Users, 
  Brain, 
  Calendar,
  Zap,
  Shield,
  ArrowRight,
  CheckCircle,
  Star,
  Smartphone,
  Globe
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";
import dashboardIcon from "@/assets/dashboard-icon.jpg";
import gamificationIcon from "@/assets/gamification-icon.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <BookOpen className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Udaan
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost">About</Button>
            <Button variant="ghost">Features</Button>
            <Button variant="outline">Sign In</Button>
            <Button variant="hero">Get Started</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-5" />
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-up">
              <div className="space-y-4">
                <Badge variant="outline" className="w-fit">
                  🚀 Next-Gen Attendance System
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Transform
                  <span className="bg-gradient-primary bg-clip-text text-transparent"> Student </span>
                  Attendance Forever
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Udaan revolutionizes education with AI-powered attendance tracking, 
                  gamified learning experiences, and comprehensive analytics for students and faculty.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/dashboard">
                  <Button variant="hero" size="lg" className="w-full sm:w-auto">
                    Try Demo Dashboard
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Watch Video Demo
                </Button>
              </div>

              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span>90% Error Reduction</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span>Real-time Analytics</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span>AI-Powered Insights</span>
                </div>
              </div>
            </div>

            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-20 animate-pulse-glow" />
              <img 
                src={heroImage} 
                alt="Educational Technology Dashboard" 
                className="relative rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Complete Solution
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Everything You Need</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From automated attendance to AI-powered recommendations, 
              Udaan provides a comprehensive platform for modern education.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Smart Attendance */}
            <Card className="hover:shadow-lg transition-smooth group">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Smart Attendance</CardTitle>
                <CardDescription>
                  QR codes, facial recognition, and geofencing for accurate, fraud-proof attendance tracking.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Analytics Dashboard */}
            <Card className="hover:shadow-lg transition-smooth group">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-gradient-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Real-time Analytics</CardTitle>
                <CardDescription>
                  Beautiful dashboards with charts, trends, and insights for students, faculty, and administrators.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Gamification */}
            <Card className="hover:shadow-lg transition-smooth group">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-gradient-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                  <Trophy className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Gamification</CardTitle>
                <CardDescription>
                  Badges, points, streaks, and certificates to motivate students and improve engagement.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* AI Recommendations */}
            <Card className="hover:shadow-lg transition-smooth group">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <CardTitle>AI-Powered Insights</CardTitle>
                <CardDescription>
                  Personalized recommendations and smart notifications to help students succeed.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Study Groups */}
            <Card className="hover:shadow-lg transition-smooth group">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-gradient-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Study Groups</CardTitle>
                <CardDescription>
                  Peer connections, study groups, and collaborative learning spaces with integrated chat.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Event Management */}
            <Card className="hover:shadow-lg transition-smooth group">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-gradient-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Event Management</CardTitle>
                <CardDescription>
                  Workshop registrations, event management, and payment processing with Razorpay integration.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">90%</div>
              <div className="text-muted-foreground">Error Reduction</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-secondary">10,000+</div>
              <div className="text-muted-foreground">Students Active</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent">500+</div>
              <div className="text-muted-foreground">Institutions</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">99.9%</div>
              <div className="text-muted-foreground">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Ready to Transform Education?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Join thousands of institutions already using Udaan to revolutionize 
              their attendance tracking and student engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/dashboard">
                <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90">
                  Try Demo Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Udaan
              </span>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span>© 2024 Udaan. All rights reserved.</span>
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
