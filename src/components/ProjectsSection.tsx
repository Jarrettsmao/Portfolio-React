import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Hot Foetato",
    description:
      "Real-time multiplayer hot potato game using Websockets with room lifecycle management.",
    image: "/projects/hot-foetato.png",
    tags: ["Unity", "Typescript", "WebSockets", "React"],
    demoUrl: "https://hot-foetato.vercel.app/",
    githubUrl: "https://github.com/Jarrettsmao/Hot-Foetato",
  },
  {
    id: 2,
    title: "Grunt",
    description:
      "Restaurant review site using Google Maps, ChatGPT, P5, for fun caveman-speak reviews with doodles. ",
    image: "/projects/grunt.png",
    tags: ["MongoDB", ".NET", "API"],
    demoUrl: "https://grunt.onrender.com/Home",
    githubUrl: "https://github.com/Jarrettsmao/Grunt",
  },

  {
    id: 3,
    title: "Smash and Stab",
    description:
      "Social deduction game with 8 player network capability, designed with fun weapons and gadgets.",
    image: "/projects/smash-and-stab.png",
    tags: ["Unity", "Multiplayer"],
    //  demoUrl: "#",
    //  githubUrl: "#"
  },

  {
    id: 4,
    title: "Underwater Temple",
    description:
      "3D Exploration game using creative lighting, creepy SFX, and particle effects.",
    image: "/projects/underwater-temple.png",
    tags: ["Unity", "3D"],
    //  demoUrl: "#",
    githubUrl: "https://github.com/hmAAmh/CMPM121-Final",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. While not all of them are
          perfect, I strive to continue building upon each project to deliver
          better and more interesting creations in the future.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 text-s font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mt-2 text-center">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 text-center p-1">
                  {project.description}
                </p>

                <div className="mt-auto flex justify-start space-x-4">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Jarrettsmao"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
