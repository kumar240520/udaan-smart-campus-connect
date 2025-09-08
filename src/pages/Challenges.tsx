import { useState } from "react";
import Header from "@/components/layout/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { 
  Brain, 
  Trophy, 
  Clock, 
  Star, 
  BookOpen, 
  Users,
  ChevronRight,
  Timer,
  Target,
  Zap,
  Award
} from "lucide-react";

interface Question {
  id: number;
  category: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  question: string;
  options: string[];
  correct: number;
}

const sampleQuestions: Question[] = [
  {
    id: 1,
    category: "Data Structures",
    difficulty: "Medium",
    question: "What is the time complexity of inserting an element at the beginning of a dynamic array?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    correct: 2
  },
  {
    id: 2,
    category: "Algorithms",
    difficulty: "Hard",
    question: "Which algorithm would be most efficient for finding the shortest path in a weighted graph with negative edges?",
    options: ["Dijkstra's Algorithm", "Bellman-Ford Algorithm", "Floyd-Warshall Algorithm", "BFS"],
    correct: 1
  }
];

export default function ChallengesPage() {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-6 space-y-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Challenges & Interview Prep</h1>
          <p className="text-muted-foreground">
            Test your knowledge, earn XP, and prepare for interviews with our curated challenges.
          </p>
        </div>

        {/* Challenge Stats */}
        <div className="grid md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Brain className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold">147</div>
                  <div className="text-sm text-muted-foreground">Questions Solved</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <Trophy className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="text-2xl font-bold">12th</div>
                  <div className="text-sm text-muted-foreground">Leaderboard Rank</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Star className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <div className="text-2xl font-bold">78%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-warning/20 flex items-center justify-center">
                  <Zap className="h-5 w-5 text-warning" />
                </div>
                <div>
                  <div className="text-2xl font-bold">7</div>
                  <div className="text-sm text-muted-foreground">Day Streak</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Challenge Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Active Challenge */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="h-5 w-5 text-primary" />
                      Daily Challenge
                    </CardTitle>
                    <CardDescription>Complete today's challenge to earn bonus XP</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-warning" />
                    <span className="text-warning font-mono">{formatTime(timeLeft)}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="outline">{sampleQuestions[currentQuestion].category}</Badge>
                    <Badge 
                      variant={
                        sampleQuestions[currentQuestion].difficulty === 'Easy' ? 'secondary' :
                        sampleQuestions[currentQuestion].difficulty === 'Medium' ? 'default' : 'destructive'
                      }
                    >
                      {sampleQuestions[currentQuestion].difficulty}
                    </Badge>
                    <Badge className="bg-accent text-accent-foreground">+150 XP</Badge>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-4">
                      Question {currentQuestion + 1} of {sampleQuestions.length}
                    </h3>
                    <p className="text-foreground leading-relaxed">
                      {sampleQuestions[currentQuestion].question}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {sampleQuestions[currentQuestion].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedAnswer(index)}
                        className={`w-full p-4 text-left rounded-lg border transition-smooth hover:bg-muted/50 ${
                          selectedAnswer === index 
                            ? 'border-primary bg-primary/10' 
                            : 'border-border'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-medium ${
                            selectedAnswer === index 
                              ? 'border-primary bg-primary text-white' 
                              : 'border-muted-foreground'
                          }`}>
                            {String.fromCharCode(65 + index)}
                          </div>
                          <span>{option}</span>
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <Button variant="outline" disabled={currentQuestion === 0}>
                      Previous
                    </Button>
                    <Button 
                      variant="hero" 
                      disabled={selectedAnswer === null}
                      onClick={() => setShowResult(true)}
                    >
                      {currentQuestion === sampleQuestions.length - 1 ? 'Submit' : 'Next Question'}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Challenge Categories */}
            <Card>
              <CardHeader>
                <CardTitle>Challenge Categories</CardTitle>
                <CardDescription>Choose your focus area</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { name: 'Data Structures', count: 45, icon: '🗂️', difficulty: 'Mixed' },
                    { name: 'Algorithms', count: 38, icon: '⚡', difficulty: 'Hard' },
                    { name: 'System Design', count: 22, icon: '🏗️', difficulty: 'Advanced' },
                    { name: 'JavaScript', count: 56, icon: '💻', difficulty: 'Easy' },
                    { name: 'Python', count: 41, icon: '🐍', difficulty: 'Medium' },
                    { name: 'Interview Prep', count: 28, icon: '🎯', difficulty: 'Mixed' },
                  ].map((category, index) => (
                    <button
                      key={index}
                      className="p-4 text-left rounded-lg border hover:shadow-md transition-smooth hover:bg-muted/50"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{category.icon}</span>
                          <div>
                            <h4 className="font-medium">{category.name}</h4>
                            <p className="text-sm text-muted-foreground">{category.count} questions</p>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                          <Badge variant="outline" className="text-xs">{category.difficulty}</Badge>
                          <ChevronRight className="h-4 w-4 text-muted-foreground" />
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Leaderboard */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-accent" />
                  Weekly Leaderboard
                </CardTitle>
                <CardDescription>Top performers this week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { rank: 1, name: 'Sarah Chen', score: 2847, change: '+2' },
                    { rank: 2, name: 'Alex Kumar', score: 2654, change: '-1' },
                    { rank: 3, name: 'Maria Garcia', score: 2543, change: '+1' },
                    { rank: 4, name: 'You', score: 2401, change: '+3', isUser: true },
                    { rank: 5, name: 'David Park', score: 2398, change: '-2' },
                  ].map((player, index) => (
                    <div 
                      key={index} 
                      className={`flex items-center gap-3 p-3 rounded-lg ${
                        player.isUser ? 'bg-primary/10 border border-primary/20' : 'bg-muted/30'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        player.rank === 1 ? 'bg-accent text-accent-foreground' :
                        player.rank === 2 ? 'bg-muted text-muted-foreground' :
                        player.rank === 3 ? 'bg-warning text-warning-foreground' :
                        'bg-muted text-muted-foreground'
                      }`}>
                        {player.rank}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium truncate">{player.name}</div>
                        <div className="text-sm text-muted-foreground">{player.score.toLocaleString()} XP</div>
                      </div>
                      <div className={`text-xs px-2 py-1 rounded ${
                        player.change.startsWith('+') ? 'bg-success/20 text-success' : 'bg-destructive/20 text-destructive'
                      }`}>
                        {player.change}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Progress Tracking */}
            <Card>
              <CardHeader>
                <CardTitle>Your Progress</CardTitle>
                <CardDescription>Track your improvement</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Daily Goal</span>
                      <span>3/5 questions</span>
                    </div>
                    <Progress value={60} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Weekly Challenge</span>
                      <span>12/20 questions</span>
                    </div>
                    <Progress value={60} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Algorithm Mastery</span>
                      <span>Level 7</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-secondary" />
                  Recent Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { title: 'Problem Solver', desc: 'Solved 100 problems', date: '2 days ago', icon: '🧩' },
                    { title: 'Speed Demon', desc: 'Completed challenge in under 2 min', date: '1 week ago', icon: '⚡' },
                    { title: 'Consistency King', desc: '7-day solving streak', date: '1 week ago', icon: '🔥' },
                  ].map((achievement, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                      <span className="text-xl">{achievement.icon}</span>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm">{achievement.title}</h4>
                        <p className="text-xs text-muted-foreground">{achievement.desc}</p>
                        <p className="text-xs text-muted-foreground">{achievement.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}