import { Section } from "@/components/common/Section"

export function AboutMe(){
    return(
        <Section>
            <div className="container mx-auto px-6">
                <div className="flex justify-center items-center w-full mb-12">
                    <div className="bg-black h-[8px] w-full flex-1"></div>
                    <div className="w-fit font-extrabold text-3xl mx-5">ABOUT</div>
                    <div className="bg-black h-[8px] w-full flex-1"></div>
                </div>
                
                <div className="bg-gradient-to-br from-muted via-background to-muted rounded-2xl p-10 mb-12 min-h-[280px] flex items-center justify-center border-2 border-border hover:border-primary hover:shadow-xl transition-all duration-300">
                    <div className="max-w-3xl">
                        <h2 className="text-2xl font-bold mb-6 text-primary">Fresh BSIT Graduate &amp; Aspiring Web Developer</h2>
                        <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                            I&apos;m a passionate and driven fresh graduate in Bachelor of Science in Information Technology with a strong foundation in web development, software engineering, and modern technologies. My journey in IT has equipped me with solid technical skills and a deep understanding of building scalable, user-centric solutions.
                        </p>
                        <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                            I&apos;m eager to apply my knowledge to create innovative digital products and solutions that make a real impact. With expertise in full-stack development, I&apos;m committed to continuous learning and staying updated with the latest industry trends and best practices.
                        </p>
                        <p className="text-lg leading-relaxed text-muted-foreground">
                            As I embark on my professional journey, I&apos;m excited to collaborate with talented teams, contribute to meaningful projects, and grow as a software engineer in the dynamic tech industry.
                        </p>
                    </div>
                </div>
                
                <div className="flex justify-center items-center w-full">
                    <div className="bg-black h-[8px] w-full flex-1"></div>
                </div>
            </div>
        </Section>
    );
}