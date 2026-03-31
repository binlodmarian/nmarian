import { Section } from "@/components/common/Section";
import { MyImage } from "@/components/common/MyImage"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroBanner() {
    return(
        <Section>
            <div className="flex gap-5 py-10 flex-col lg:flex-row px-10">
                <div className="flex-2 flex flex-col gap-4 py-10">
                    <h1 className="xl:text-5xl lg:text-3xl text-2xl font-extrabold lg:pl-10 ">Hi, I&apos;m Marian</h1>
                    <p className="text-lg lg:pl-10 font-semibold">Fresh BSIT Graduate</p>
                    <p className="text-muted-foreground text-base lg:pl-10 ">I&apos;m a passionate and driven fresh graduate in Bachelor of Science in Information Technology with a strong foundation in web development, software engineering, and modern technologies. I&apos;m eager to apply my skills and knowledge to create innovative solutions while continuously learning and growing in the tech industry. Let me explore my projects to see what I&apos;ve built!</p>
                    <div className="flex gap-4 lg:pl-10 mt-2">
                        <Link href="/projects">
                            <Button className="h-10 px-6">View Projects</Button>
                        </Link>
                        <Link href="/contact">
                            <Button variant="outline" className="h-10 px-6">Contact Me</Button>
                        </Link>
                    </div>
                </div>
                <div className="flex justify-center items-center px-10 md:px-20">
                    <MyImage />
                </div>
                
            </div>
        </Section>
    );
}