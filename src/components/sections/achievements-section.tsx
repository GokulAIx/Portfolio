
import SectionContainer from '@/components/shared/section-container';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Zap } from 'lucide-react'; // Using Zap for hackathons/events

const achievements = [
  { text: "Organized 6+ ”GAAC-MasterClasses” for Gitam Aero Astro Club (affiliated with MIT, Boston), achieving 60+ attendees per session, focusing on technical education and aerospace topics.", icon: <Users className="w-5 h-5 text-primary mr-3" /> },
  { text: "Competed in national-level events like IIT Kanpur’s Techkriti (Maneuver Bot, Astro Quiz) and ISRO’s Bharatiya Antariksh Hackathon (Lunar Crater Locator), among 50+ teams.", icon: <Zap className="w-5 h-5 text-primary mr-3" /> },
  { text: "Secured 2 nd place in the hackathon CODEX (for my SkillCheck Project) conducted by Young Compete.", icon: <Award className="w-5 h-5 text-primary mr-3" /> },
  { text: "Member of Art of Living’s YES+ Group since 1st year of college.", icon: <Users className="w-5 h-5 text-primary mr-3" /> },
  { text: "Participated in various coding competitions and workshops to enhance problem-solving skills and stay updated with industry trends.", icon: <Zap className="w-5 h-5 text-primary mr-3" /> },
  { text: "Contributed to open-source projects focusing on NLP and data science, gaining experience in collaborative development.", icon: <Users className="w-5 h-5 text-primary mr-3" /> },
  { text: "Presented a project on 'Automated Fake News Detection using Transformer Models' at a university tech symposium, receiving positive feedback.", icon: <Award className="w-5 h-5 text-primary mr-3" /> },
];

const AchievementsSection = () => {
  return (
    <SectionContainer id="achievements" title="Achievements & Activities">
      <Card className="shadow-lg">
        <CardContent className="p-6 max-h-[60vh] overflow-y-auto">
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
