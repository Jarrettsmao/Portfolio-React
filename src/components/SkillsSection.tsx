import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
    {name: "C#", category: "coding"},
    {name: "JavaScript", category: "coding"},
    {name: "HTML/CSS", category: "coding"},
    {name: "Python", category: "coding"},
    {name: "C++", category: "coding"},
    {name: "Java", category: "coding"},


    {name: "TypeScript", category: "frontend"},
    {name: "React", category: "frontend"},
    {name: "Tailwind CSS", category: "frontend"},

    {name: ".NET", category: "backend"},
    {name: "MongoDB", category: "backend"},
    {name: "SQL", category: "backend"},
    {name: "AWS", category: "backend"},

    {name: "Unity", category: "tools/engine"},
    {name: "Git", category: "tools/engine"},
    {name: "Jira", category: "tools/engine"},
    {name: "Microsoft Projects", category: "tools/engine"},  

    {name: "Cantonese (Native)", category: "linguistic"},
    {name: "Mandarin (Fluent)", category: "linguistic"},
];

// test skills for use with percentage bars
// const skills = [
//     {name: "C#", level: 80, category: "coding"},
//     {name: "Cantonese", level: 70, category: "linguistic"},
// ]

const categories = ["all", "coding", "frontend", "backend", "tools/engine", "linguistic"]

const categoryColors = {
  "coding": "#3b82f6", // Blue in hex
  "linguistic": "#10b981", // Green in RGB
  "frontend": "#9a61feff", // Purple in HSL
  "backend": "#ff3333ff", // Red in hex
  "tools/engine": "#f59e0b", // Yellow in HSL
};
 
export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory
    );
    return (
    <section 
        id="skills" 
        className="py-24 px-4 relative bg-secondary/30"
    >
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary"> Skills</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                    <button 
                        key={key} 
                        onClick={() => setActiveCategory(category)}
                        className={cn(
                            "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                            activeCategory === category 
                            ? "bg-primary text-primary-foreground" 
                            : "bg-secondary/70 text-foreground hover:bd-secondary " 
                        )}
                    >
                        {category}  
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
                {filteredSkills.map((skill, key) => (
                    <div 
                        key={key} 
                        className="bg-card p-6 rounded-lg shadow-xs card-hover flex flex-col justify-center items-center"
                    >  
                        <h3 
                            className="font-semibold text-lg"
                            style={{ color: categoryColors[skill.category] }}
                        >
                            {skill.name}</h3>
                        <div 
                            className="bg-primary animate-[grow_1.5s_ease-out]"
                        />


                        {/* used to show the percentage bars */}

                        {/* <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg">{skill.name}</h3>
                        </div>
                        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                            <div 
                                className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                                style={{width: skill.level + "%"}}
                            />
                        </div>

                        <div className="text-right mt-1">
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div> */}
                    </div>
                ))}
            </div> 
        </div>

    </section>

    )
};