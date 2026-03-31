import { Section } from "@/components/common/Section"
import { FaReact, FaJsSquare, FaHtml5, FaGitAlt, FaDocker, FaGithub } from "react-icons/fa"

interface Skill {
  icon: React.ReactNode;
  name: string;
}

const frontendSkills: Skill[] = [
  { icon: <FaReact className="w-10 h-10" />, name: "React" },
  { icon: <FaJsSquare className="w-10 h-10" />, name: "JavaScript" },
  { icon: <FaHtml5 className="w-10 h-10" />, name: "HTML5" },
]

const toolsSkills: Skill[] = [
  { icon: <FaGitAlt className="w-10 h-10" />, name: "Git" },
  { icon: <FaGithub className="w-10 h-10" />, name: "GitHub" },
  { icon: <FaDocker className="w-10 h-10" />, name: "Docker" },
]

export function Skill() {
    return(
        <Section>
            <div className="flex container mx-auto flex-col gap-8">
                <div className="flex justify-center items-center w-full">
                    <div className="bg-black h-[8px] w-full flex-1"></div>
                    <div className="w-fit font-extrabold text-3xl mx-5">SKILLS & TOOLS</div>
                    <div className="bg-black h-[8px] w-full flex-1"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-4">
                    {/* Frontend Section */}
                    <div className="bg-gradient-to-br from-muted to-background rounded-xl p-8 border-2 border-border hover:border-primary transition-all duration-300">
                        <h2 className="font-extrabold text-2xl mb-8 text-center text-primary">Frontend</h2>
                        <div className="flex flex-wrap gap-6 justify-center">
                            {frontendSkills.map((skill, index) => (
                                <div key={index} className="group relative">
                                    <div className="w-24 h-24 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center border-2 border-border hover:border-primary hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 cursor-pointer transform hover:scale-110">
                                        <div className="text-3xl group-hover:text-primary transition-colors duration-300">
                                            {skill.icon}
                                        </div>
                                    </div>
                                    <p className="text-center text-sm font-semibold mt-2 text-muted-foreground group-hover:text-primary transition-colors duration-300">
                                        {skill.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tools Section */}
                    <div className="bg-gradient-to-br from-muted to-background rounded-xl p-8 border-2 border-border hover:border-primary transition-all duration-300">
                        <h2 className="font-extrabold text-2xl mb-8 text-center text-primary">Tools</h2>
                        <div className="flex flex-wrap gap-6 justify-center">
                            {toolsSkills.map((skill, index) => (
                                <div key={index} className="group relative">
                                    <div className="w-24 h-24 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center border-2 border-border hover:border-primary hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 cursor-pointer transform hover:scale-110">
                                        <div className="text-3xl group-hover:text-primary transition-colors duration-300">
                                            {skill.icon}
                                        </div>
                                    </div>
                                    <p className="text-center text-sm font-semibold mt-2 text-muted-foreground group-hover:text-primary transition-colors duration-300">
                                        {skill.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center w-full mt-6">
                    <div className="bg-black h-[8px] w-full flex-1"></div>
                </div>
            </div>
        </Section>
    );
}