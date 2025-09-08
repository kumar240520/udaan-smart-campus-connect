import { useState } from "react";
import Header from "@/components/layout/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Users, 
  MessageCircle, 
  Search, 
  Plus, 
  Calendar, 
  BookOpen,
  Video,
  Clock,
  MapPin,
  Star,
  Filter,
  ChevronRight
} from "lucide-react";

interface StudyGroup {
  id: number;
  name: string;
  subject: string;
  description: string;
  members: number;
  maxMembers: number;
  schedule: string;
  location: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  isOnline: boolean;
  tags: string[];
  rating: number;
  nextSession: string;
}

const studyGroups: StudyGroup[] = [
  {
    id: 1,
    name: "Data Structures Mastery",
    subject: "Computer Science",
    description: "Deep dive into advanced data structures and algorithms. Perfect for interview prep and competitive programming.",
    members: 12,
    maxMembers: 15,
    schedule: "Mon, Wed, Fri - 7:00 PM",
    location: "Library Room 204",
    level: "Advanced",
    isOnline: false,
    tags: ["algorithms", "interview-prep", "competitive-programming"],
    rating: 4.8,
    nextSession: "Today, 7:00 PM"
  },
  {
    id: 2,
    name: "Machine Learning Study Circle",
    subject: "AI/ML",
    description: "Exploring ML concepts, working on projects, and sharing research papers. Great for beginners and experts alike.",
    members: 8,
    maxMembers: 12,
    schedule: "Tue, Thu - 6:30 PM",
    location: "Online",
    level: "Intermediate",
    isOnline: true,
    tags: ["machine-learning", "python", "research", "projects"],
    rating: 4.9,
    nextSession: "Tomorrow, 6:30 PM"
  },
  {
    id: 3,
    name: "Web Development Bootcamp",
    subject: "Programming",
    description: "Learn modern web development with React, Node.js, and cloud deployment. Build real projects together.",
    members: 15,
    maxMembers: 20,
    schedule: "Daily - 8:00 PM",
    location: "Online",
    level: "Beginner",
    isOnline: true,
    tags: ["web-dev", "react", "javascript", "projects"],
    rating: 4.7,
    nextSession: "Today, 8:00 PM"
  },
  {
    id: 4,
    name: "Database Design Workshop",
    subject: "Database",
    description: "Master database design, SQL optimization, and learn about NoSQL databases through hands-on projects.",
    members: 6,
    maxMembers: 10,
    schedule: "Sat, Sun - 2:00 PM",
    location: "Lab 301",
    level: "Intermediate",
    isOnline: false,
    tags: ["database", "sql", "design", "optimization"],
    rating: 4.6,
    nextSession: "Saturday, 2:00 PM"
  },
  {
    id: 5,
    name: "System Design Study Group",
    subject: "Engineering",
    description: "Tackle large-scale system design problems. Perfect for senior students and those preparing for tech interviews.",
    members: 9,
    maxMembers: 12,
    schedule: "Wed, Sat - 3:00 PM",
    location: "Online",
    level: "Advanced",
    isOnline: true,
    tags: ["system-design", "scalability", "architecture", "interviews"],
    rating: 4.9,
    nextSession: "Wednesday, 3:00 PM"
  }
];

export default function StudyGroupsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [showCreateGroup, setShowCreateGroup] = useState(false);

  const levels = ["All", "Beginner", "Intermediate", "Advanced"];

  const filteredGroups = studyGroups.filter(group => {
    const matchesSearch = group.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         group.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         group.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesLevel = selectedLevel === "All" || group.level === selectedLevel;
    return matchesSearch && matchesLevel;
  });

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-success/20 text-success';
      case 'Intermediate': return 'bg-warning/20 text-warning';
      case 'Advanced': return 'bg-destructive/20 text-destructive';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Study Groups</h1>
            <p className="text-muted-foreground">
              Join collaborative learning sessions and form study partnerships with your peers.
            </p>
          </div>
          <Button variant="hero" onClick={() => setShowCreateGroup(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Create Group
          </Button>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Search and Filters */}
            <Card>
              <CardContent className="p-4">
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {levels.map((level) => (
                      <Button
                        key={level}
                        variant={selectedLevel === level ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedLevel(level)}
                      >
                        {level}
                      </Button>
                    ))}
                  </div>
                  <div className="flex gap-2 w-full sm:w-auto">
                    <div className="relative flex-1 sm:w-64">
                      <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                      <Input 
                        placeholder="Search groups..." 
                        className="pl-9" 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                    <Button variant="outline" size="icon">
                      <Filter className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* My Groups */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  My Study Groups
                </CardTitle>
                <CardDescription>Groups you're currently part of</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {studyGroups.slice(0, 2).map((group) => (
                    <div key={group.id} className="p-4 border rounded-lg bg-primary/5 border-primary/20">
                      <div className="flex items-center justify-between mb-3">
                        <Badge className={getLevelColor(group.level)}>{group.level}</Badge>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-accent fill-current" />
                          <span className="text-sm font-medium">{group.rating}</span>
                        </div>
                      </div>
                      <h3 className="font-semibold mb-2">{group.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{group.description}</p>
                      <div className="space-y-2 text-xs text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Clock className="h-3 w-3" />
                          <span>Next: {group.nextSession}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          {group.isOnline ? <Video className="h-3 w-3" /> : <MapPin className="h-3 w-3" />}
                          <span>{group.location}</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="w-full mt-3">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Join Session
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Available Groups */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Available Study Groups</h2>
              {filteredGroups.map((group) => (
                <Card key={group.id} className="hover:shadow-md transition-smooth">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline">{group.subject}</Badge>
                          <Badge className={getLevelColor(group.level)}>{group.level}</Badge>
                          {group.isOnline && (
                            <Badge variant="secondary">Online</Badge>
                          )}
                        </div>
                        <CardTitle className="text-xl mb-2">{group.name}</CardTitle>
                        <CardDescription className="text-base">{group.description}</CardDescription>
                      </div>
                      <div className="flex items-center gap-1 ml-4">
                        <Star className="h-4 w-4 text-accent fill-current" />
                        <span className="text-sm font-medium">{group.rating}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span>{group.members}/{group.maxMembers} members</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>{group.schedule}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          {group.isOnline ? <Video className="h-4 w-4 text-muted-foreground" /> : <MapPin className="h-4 w-4 text-muted-foreground" />}
                          <span>{group.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>{group.nextSession}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {group.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            #{tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t">
                        <div className="text-sm text-muted-foreground">
                          {group.maxMembers - group.members} spots available
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                          <Button variant="hero" size="sm">
                            Join Group
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Your Study Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Groups Joined</span>
                  <span className="font-bold">2</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Sessions This Week</span>
                  <span className="font-bold">5</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Study Hours</span>
                  <span className="font-bold">12.5h</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Avg Rating</span>
                  <span className="font-bold text-accent">4.8 ⭐</span>
                </div>
              </CardContent>
            </Card>

            {/* Recommended Groups */}
            <Card>
              <CardHeader>
                <CardTitle>Recommended for You</CardTitle>
                <CardDescription>Based on your interests and performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {studyGroups.slice(2, 5).map((group) => (
                    <div key={group.id} className="p-3 border rounded-lg hover:bg-muted/50 transition-smooth cursor-pointer">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-sm line-clamp-1">{group.name}</h4>
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Badge className={getLevelColor(group.level)} variant="outline">
                          {group.level}
                        </Badge>
                        <span>{group.members}/{group.maxMembers}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Study Tips */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-secondary" />
                  Study Tips
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <h4 className="font-medium mb-1">Active Participation</h4>
                    <p className="text-xs text-muted-foreground">Engage actively in discussions to maximize learning.</p>
                  </div>
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <h4 className="font-medium mb-1">Consistent Attendance</h4>
                    <p className="text-xs text-muted-foreground">Regular attendance builds stronger study habits.</p>
                  </div>
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <h4 className="font-medium mb-1">Teach Others</h4>
                    <p className="text-xs text-muted-foreground">Teaching concepts helps reinforce your own understanding.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Sessions */}
            <Card>
              <CardHeader>
                <CardTitle>Today's Sessions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { name: "Data Structures Mastery", time: "7:00 PM", location: "Room 204" },
                    { name: "Web Development Bootcamp", time: "8:00 PM", location: "Online" },
                  ].map((session, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                      <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <BookOpen className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm truncate">{session.name}</h4>
                        <p className="text-xs text-muted-foreground">{session.time} • {session.location}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Create Group Modal */}
        {showCreateGroup && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Create Study Group</CardTitle>
                  <Button variant="ghost" size="sm" onClick={() => setShowCreateGroup(false)}>
                    ✕
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Group name..." />
                <Input placeholder="Subject/Topic..." />
                <textarea 
                  className="w-full p-3 border rounded-lg resize-none" 
                  placeholder="Group description..."
                  rows={4}
                />
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Schedule (e.g., Mon, Wed 7PM)" />
                  <Input placeholder="Location/Room" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <select className="p-2 border rounded-lg">
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                  </select>
                  <Input type="number" placeholder="Max members" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="online" />
                    <label htmlFor="online" className="text-sm">Online group</label>
                  </div>
                  <Button variant="hero">Create Group</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
}