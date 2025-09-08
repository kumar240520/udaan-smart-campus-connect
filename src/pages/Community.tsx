import { useState } from "react";
import Header from "@/components/layout/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MessageCircle, 
  Heart, 
  Share2, 
  Eye, 
  Calendar, 
  User,
  TrendingUp,
  Plus,
  Search,
  Filter,
  ChevronDown,
  BookOpen,
  Users,
  Award,
  Star
} from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  authorRole: 'student' | 'faculty' | 'alumni';
  date: string;
  category: string;
  readTime: string;
  likes: number;
  comments: number;
  views: number;
  tags: string[];
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "My Journey from 60% to 95% Attendance: Tips That Actually Work",
    excerpt: "Struggling with attendance? Here's how I transformed my academic life with simple but effective strategies that anyone can implement.",
    author: "Sarah Chen",
    authorRole: "student",
    date: "2024-01-15",
    category: "Student Life",
    readTime: "5 min read",
    likes: 127,
    comments: 23,
    views: 856,
    tags: ["attendance", "productivity", "student-tips"],
    featured: true
  },
  {
    id: 2,
    title: "Tech Industry Recruitment: What We Really Look For",
    excerpt: "As a hiring manager at Google, I share insights on what makes a candidate stand out beyond just technical skills.",
    author: "Dr. Alex Kumar",
    authorRole: "alumni",
    date: "2024-01-14",
    category: "Career",
    readTime: "8 min read",
    likes: 342,
    comments: 67,
    views: 1245,
    tags: ["career", "tech", "recruitment", "interview"],
    featured: true
  },
  {
    id: 3,
    title: "AI in Education: Transforming the Classroom Experience",
    excerpt: "How artificial intelligence is revolutionizing teaching methods and student engagement in modern universities.",
    author: "Prof. Maria Rodriguez",
    authorRole: "faculty",
    date: "2024-01-13",
    category: "Technology",
    readTime: "6 min read",
    likes: 89,
    comments: 15,
    views: 623,
    tags: ["AI", "education", "technology", "teaching"]
  },
  {
    id: 4,
    title: "Hackathon Victory: How Our Team Built an Award-Winning App",
    excerpt: "A behind-the-scenes look at our winning submission to the National Student Hackathon and the lessons we learned.",
    author: "Team DevWizards",
    authorRole: "student",
    date: "2024-01-12",
    category: "Achievement",
    readTime: "7 min read",
    likes: 156,
    comments: 34,
    views: 924,
    tags: ["hackathon", "teamwork", "development", "achievement"]
  },
  {
    id: 5,
    title: "Mental Health in Computer Science: Breaking the Stigma",
    excerpt: "Opening up about the challenges of maintaining mental wellness in a demanding field and resources that helped me.",
    author: "Jordan Park",
    authorRole: "student",
    date: "2024-01-11",
    category: "Wellness",
    readTime: "4 min read",
    likes: 203,
    comments: 45,
    views: 1127,
    tags: ["mental-health", "wellness", "student-life"]
  }
];

export default function CommunityPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showCreatePost, setShowCreatePost] = useState(false);

  const categories = ["All", "Student Life", "Career", "Technology", "Achievement", "Wellness"];

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'student': return 'bg-primary/20 text-primary';
      case 'faculty': return 'bg-secondary/20 text-secondary';
      case 'alumni': return 'bg-accent/20 text-accent';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Community Hub</h1>
            <p className="text-muted-foreground">
              Share your journey, learn from others, and stay connected with the academic community.
            </p>
          </div>
          <Button variant="hero" onClick={() => setShowCreatePost(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Write Post
          </Button>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Filters */}
            <Card>
              <CardContent className="p-4">
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <Button
                        key={category}
                        variant={selectedCategory === category ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <div className="relative">
                      <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                      <Input placeholder="Search posts..." className="pl-9 w-64" />
                    </div>
                    <Button variant="outline" size="icon">
                      <Filter className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Featured Posts */}
            {selectedCategory === "All" && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-accent" />
                    Featured Posts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {blogPosts.filter(post => post.featured).map((post) => (
                      <div key={post.id} className="p-4 border rounded-lg hover:shadow-md transition-smooth cursor-pointer">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="outline">{post.category}</Badge>
                          <Badge className={getRoleColor(post.authorRole)}>
                            {post.authorRole}
                          </Badge>
                        </div>
                        <h3 className="font-semibold mb-2 line-clamp-2">{post.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{post.excerpt}</p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>{post.author}</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Blog Posts */}
            <div className="space-y-4">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-md transition-smooth cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline">{post.category}</Badge>
                          <Badge className={getRoleColor(post.authorRole)}>
                            {post.authorRole}
                          </Badge>
                          {post.featured && (
                            <Badge className="bg-accent text-accent-foreground">Featured</Badge>
                          )}
                        </div>
                        <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                        <CardDescription className="text-base">{post.excerpt}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <BookOpen className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          <span>{post.views.toLocaleString()}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            #{tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t">
                        <div className="flex items-center gap-4">
                          <Button variant="ghost" size="sm" className="gap-2">
                            <Heart className="h-4 w-4" />
                            <span>{post.likes}</span>
                          </Button>
                          <Button variant="ghost" size="sm" className="gap-2">
                            <MessageCircle className="h-4 w-4" />
                            <span>{post.comments}</span>
                          </Button>
                          <Button variant="ghost" size="sm" className="gap-2">
                            <Share2 className="h-4 w-4" />
                            Share
                          </Button>
                        </div>
                        <Button variant="outline" size="sm">
                          Read More
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Community Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Community Stats
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Total Posts</span>
                  <span className="font-bold">1,247</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Active Members</span>
                  <span className="font-bold">3,456</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">This Week</span>
                  <span className="font-bold text-primary">+23 posts</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Avg Engagement</span>
                  <span className="font-bold text-secondary">94%</span>
                </div>
              </CardContent>
            </Card>

            {/* Top Contributors */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-accent" />
                  Top Contributors
                </CardTitle>
                <CardDescription>Most active community members this month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { name: 'Dr. Alex Kumar', role: 'alumni', posts: 12, badge: '🥇' },
                    { name: 'Sarah Chen', role: 'student', posts: 8, badge: '🥈' },
                    { name: 'Prof. Maria Rodriguez', role: 'faculty', posts: 6, badge: '🥉' },
                    { name: 'Jordan Park', role: 'student', posts: 5, badge: '⭐' },
                    { name: 'Team DevWizards', role: 'student', posts: 4, badge: '⭐' },
                  ].map((contributor, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                      <span className="text-lg">{contributor.badge}</span>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium truncate">{contributor.name}</div>
                        <div className="text-sm text-muted-foreground capitalize">{contributor.role}</div>
                      </div>
                      <div className="text-sm font-medium">{contributor.posts} posts</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start gap-2">
                  <Users className="h-4 w-4" />
                  Join Study Group
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2">
                  <Calendar className="h-4 w-4" />
                  Upcoming Events
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2">
                  <MessageCircle className="h-4 w-4" />
                  Discussion Forums
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2">
                  <BookOpen className="h-4 w-4" />
                  Resource Library
                </Button>
              </CardContent>
            </Card>

            {/* Trending Tags */}
            <Card>
              <CardHeader>
                <CardTitle>Trending Tags</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {[
                    '#attendance', '#productivity', '#career', '#tech', '#AI', 
                    '#student-life', '#mental-health', '#hackathon', '#interview-prep'
                  ].map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs cursor-pointer hover:bg-secondary/80">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Create Post Modal would go here */}
        {showCreatePost && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Create New Post</CardTitle>
                  <Button variant="ghost" size="sm" onClick={() => setShowCreatePost(false)}>
                    ✕
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Post title..." />
                <Textarea placeholder="What's on your mind?" rows={6} />
                <div className="flex gap-2">
                  <Input placeholder="Add tags (comma separated)" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Draft</Button>
                    <Button variant="outline" size="sm">Preview</Button>
                  </div>
                  <Button variant="hero">Publish Post</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
}