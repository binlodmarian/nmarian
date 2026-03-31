import { Section } from "@/components/common/Section";
import { projectData } from "@/constant/project"
import Link  from "next/link";
import Image  from "next/image";

export function RecentProject() {
    return (
        <Section>
            <div className="container mx-auto w-full">
                <div className="flex justify-center items-center w-full">
                    <div className="bg-black h-[8px] w-full flex-1"></div>
                    <div className="w-fit font-extrabold text-2xl mx-5">RECENT PROJECTS</div>
                    <div className="bg-black h-[8px] w-full flex-1"></div>
                </div>
                <div className="flex flex-col lg:flex-row gap-10 p-10 justify-center items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {
                        projectData.slice(0,3).map( (data,index) => (
                            <Link href={data.link} key={index} target="_blank" className="items-center flex justify-center group">
                                <div className="group relative w-80 size-auto aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:rotate-1">
                                    <Image
                                        src={data.imageLink}
                                        alt="project image"
                                        loading="eager"
                                        fill
                                        className="object-cover transition-all duration-700 group-hover:brightness-110 group-hover:contrast-110"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500"></div>
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 transform translate-y-4 group-hover:translate-y-0">
                                        <span className="bg-white/90 dark:bg-black/90 text-foreground px-4 py-2 rounded-full font-semibold shadow-lg backdrop-blur-sm">
                                            View Project
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
                <div className="flex justify-center items-center w-full">
                    <div className="bg-black h-[8px] w-full flex-1"></div>
                </div>
            </div>
        </Section>
    );
}