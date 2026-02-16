export interface Project {
name: string;
        toParam: string;
        img: string;
        alt: string;
        link: string;
        technos: string[];
        duration: string;
        desc: string;
}

export interface Section  {
    section: string;
    toParam: string;
    desc:string;
    projects: Project[];
}