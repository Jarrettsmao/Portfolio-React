const experiences = [
    {
        id: 1,
        company: "Kwan Wo Ironworks",
        date: "2023-Current",
        description: "Acted as a team lead for the purchasing department to improve efficiency through writing documentation, training, and writing programs that generate reports by processing multiple Excel files, while acting as IT support and maintaining the company website.",
        tags: ["IT", "Web Development", "Spreadsheet/Database"]
    }, 

    {
        id: 2,
        company: "Theta Studios",
        date: "2023-2024",
        description: "Acted as an engineering team lead to build gameplay/UI features, mentored two interns, and conducted weekly code reviews while managing project deadlines.",
        tags: ["Game Development", "UI", "Mentoring"]
    }, 

    {
        id: 3,
        company: "CodeFu",
        date: "2022-2023",
        description: "Taught object-oriented programming fundamentals to elementary school children, provided one-on-one support and helped with conflict resolution, and tailored curriculum to varying skill levels.",
        tags: ["Python", "Education"]
    }, 
]

export const ExperienceSection = () => {
    return ( 
        <section id="experience" className="py-24 px-4 relative w-4/5 mx-auto">
            <div className="flex flex-wrap justify-center gap-6">
            {experiences.map((experience, key) => (
                    <div
                        key={key}
                        className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col w-4/6"
                    >
                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {experience.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="px-2 text-s font-medium border rounded-full bg-secondary text-secondary-foreground"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div 
                                className="text-right"
                            >
                                {experience.date}
                            </div>

                            <h3 className="text-xl font-semibold mt-2 text-center">{experience.company}</h3>
                            <p className="text-muted-foreground text-med mb-4 text-center p-1">
                                {experience.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}