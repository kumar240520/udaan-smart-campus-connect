import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Trophy, Star, Award, Zap, Gift, Target } from "lucide-react";
import gamificationIcon from "@/assets/gamification-icon.jpg";

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  earned: boolean;
  earnedDate?: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

const achievements: Achievement[] = [
  {
    id: '1',
    title: 'Perfect Week',
    description: 'Attended all classes for a week',
    icon: '✨',
    earned: true,
    earnedDate: '2024-01-15',
    rarity: 'rare'
  },
  {
    id: '2',
    title: 'Streak Master',
    description: 'Maintain 15-day attendance streak',
    icon: '🔥',
    earned: true,
    earnedDate: '2024-01-10',
    rarity: 'epic'
  },
  {
    id: '3',
    title: 'Quiz Champion',
    description: 'Score 100% in 5 quizzes',
    icon: '🏆',
    earned: false,
    rarity: 'legendary'
  },
  {
    id: '4',
    title: 'Early Bird',
    description: 'Arrive early 10 times',
    icon: '🌅',
    earned: true,
    earnedDate: '2024-01-05',
    rarity: 'common'
  }
];

const getRarityColor = (rarity: Achievement['rarity']) => {
  switch (rarity) {
    case 'common': return 'text-muted-foreground';
    case 'rare': return 'text-primary';
    case 'epic': return 'text-accent';
    case 'legendary': return 'text-warning';
    default: return 'text-muted-foreground';
  }
};

export default function GamificationPanel() {
  const currentLevel = 12;
  const currentXP = 2450;
  const nextLevelXP = 3000;
  const xpProgress = ((currentXP % 1000) / 1000) * 100;

  return (
    <div className="space-y-6">
      {/* Level & XP Progress */}
      <Card className="bg-gradient-card border-primary/20">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-accent animate-pulse-glow" />
                Level {currentLevel}
              </CardTitle>
              <CardDescription>You're doing amazing! Keep it up</CardDescription>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-accent">{currentXP.toLocaleString()}</div>
              <div className="text-xs text-muted-foreground">XP Points</div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress to Level {currentLevel + 1}</span>
              <span>{Math.round(xpProgress)}%</span>
            </div>
            <Progress value={xpProgress} className="h-3" />
            <div className="text-xs text-muted-foreground text-center">
              {nextLevelXP - currentXP} XP needed for next level
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Achievements */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-accent" />
                Achievements
              </CardTitle>
              <CardDescription>Your badges and milestones</CardDescription>
            </div>
            <Button variant="outline" size="sm">View All</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className={`p-3 rounded-lg border transition-smooth hover:shadow-sm ${
                  achievement.earned 
                    ? 'bg-card border-primary/20' 
                    : 'bg-muted/30 border-muted opacity-60'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{achievement.icon}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium text-sm truncate">{achievement.title}</h4>
                      <Badge 
                        variant="outline" 
                        className={`text-xs capitalize ${getRarityColor(achievement.rarity)}`}
                      >
                        {achievement.rarity}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {achievement.description}
                    </p>
                    {achievement.earned && achievement.earnedDate && (
                      <p className="text-xs text-success mt-1">
                        Earned {new Date(achievement.earnedDate).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Daily Challenges */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-secondary" />
            Daily Challenges
          </CardTitle>
          <CardDescription>Complete these for bonus XP</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { task: 'Mark attendance on time', reward: '+50 XP', completed: true },
              { task: 'Complete 3 quiz questions', reward: '+100 XP', completed: false },
              { task: 'Join a study group discussion', reward: '+75 XP', completed: false },
            ].map((challenge, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${challenge.completed ? 'bg-success' : 'bg-muted-foreground'}`} />
                  <span className={`text-sm ${challenge.completed ? 'line-through text-muted-foreground' : ''}`}>
                    {challenge.task}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={challenge.completed ? "secondary" : "default"} className="text-xs">
                    {challenge.reward}
                  </Badge>
                  {challenge.completed && <span className="text-success text-xs">✓</span>}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Rewards Shop Preview */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Gift className="h-5 w-5 text-accent" />
                Rewards Shop
              </CardTitle>
              <CardDescription>Spend your XP on cool rewards</CardDescription>
            </div>
            <Button variant="accent" size="sm">
              <Zap className="h-3 w-3 mr-1" />
              Shop Now
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-3">
            {[
              { name: 'Custom Badge', cost: 500, available: true },
              { name: 'Late Pass', cost: 1000, available: true },
              { name: 'Certificate', cost: 2000, available: false },
            ].map((item, index) => (
              <div key={index} className={`p-3 border rounded-lg text-center ${item.available ? '' : 'opacity-50'}`}>
                <div className="text-xl mb-1">🎁</div>
                <div className="text-xs font-medium">{item.name}</div>
                <div className="text-xs text-accent mt-1">{item.cost} XP</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}