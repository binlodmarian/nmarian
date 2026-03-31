

type project_type = {
    link: string;
    imageLink: string;
    title: string;
    category: "web" | "mobile" | "system";
}

export const projectData: project_type[] = [
    {
        link: "https://fcfs-cpu-sched.vercel.app//",
        imageLink: "/fcfssimulator.jpg",
        title: "FCFS Simulator",
        category: "web"
    },
    {
        link: "https://os-final-portfolio.vercel.app//",
        imageLink: "/osfinalportfolio.jpg",
        title: "os-final-portfolio",
        category: "system"
    },
    {
        link: "https://app-dev-project-zeta.vercel.app/",
        imageLink: "/appdevproject.jpg",
        title: "app-dev-project",
        category: "web"
    },
    
    
       
]