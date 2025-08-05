import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from '../components/StarBackground'
import { NavBar } from "../components/NavBar";
import { PersonalSection } from "../components/PersonalSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
// import { ExperienceSection } from "../components/ExperienceSection";
// import { Footer } from "../components/Footer";

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
            {/* <ExperienceSection /> */}
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
        </main>

        {/* Footer */}
        {/* <Footer /> */}
    </div>;
};

export default Home;