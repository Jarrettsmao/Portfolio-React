import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from '../components/StarBackground'
import { NavBar } from "../components/NavBar";
import { PersonalSection } from "../components/PersonalSection";
import { AboutMe } from "../components/AboutMe";

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
            <AboutMe />
        </main>

        {/* Footer */}
        
    </div>;
};

export default Home;