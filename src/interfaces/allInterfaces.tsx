export interface Project {
    name: string;
    toParam: string;
    img: string;
	desktopImg?:string;
    alt: string;
    link: string;
    projectType: string;
	role: string;
	place: string;
    starting: string;
    desc: string[];
}

export interface Section {
    section: string;
    toParam: string;
    desc: string;
    projects: Project[];
}
