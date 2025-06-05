import SectionContainer from '@/components/shared/section-container';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Zap } from 'lucide-react'; // Using Zap for hackathons

const achievements = [
  { text: "Organized 6+ masterclasses for Gitam Aero Astro (MIT-affiliated club)", icon: <Users className="w-5 h-5 text-primary mr-3" /> },
  { text: "Competed in national-level hackathons: ISRO Bharatiya Antariksh, IIT Kanpur Techkriti", icon: <Zap className="w-5 h-5 text-primary mr-3" /> },
  { text: "Secured 2nd place in CODEX Hackathon (SkillCheck)", icon: <Award className="w-5 h-5 text-primary mr-3" /> },
  { text: "Active member of Art of Living’s YES+ group", icon: <Users className="w-5 h-5 text-primary mr-3" /> },
];

const AchievementsSection = () => {
  return (
    <SectionContainer id="achievements" title="Achievements &amp; Activities">
      <Card className="shadow-lg">
        <CardContent className="p-6">
          <ul className="space-y-4">
            {achievements.map((ach, index) => (
              <li key={index} className="flex items-start text-md">
                {ach.icon}
                <span>{ach.text}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </SectionContainer>
  );
};

export default AchievementsSection;
