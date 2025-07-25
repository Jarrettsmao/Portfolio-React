import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from '../components/StarBackground'
import { NavBar } from "../components/NavBar";
import { PersonalSection } from "../components/PersonalSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme Toggle */}
        <ThemeToggle />
        {/* Background Effects */}
        <StarBackground />
        {/* Background Effects */}
        <NavBar />
        {/* Main Content */}
        <main> 
            <PersonalSection />
            <AboutSection />
            <SkillsSection />
        </main>

        {/* Footer */}
        
    </div>;
};

export default Home;