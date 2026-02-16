import projectSbu from "../assets/img/projects/super-brawl-universe-21525-1.jpg";
import projectTdf from "../assets/img/projects/tour-de-france-2020-official-game-11.jpg";
import projectTdfDesktop from "../assets/img/projects/tour-de-france-2020-official-game-11 - Copie.jpg";
import projectMgg from "../assets/img/projects/mgg_cover.jpg";
import projectAtlantis from "../assets/img/projects/Atlantis-Fantasy-111_small.png"
import projectAtlantisDesktop from "../assets/img/projects/Atlantis-Fantasy-111.png"
import projectTs from "../assets/img/projects/fashion_agents.jpg"
import projectBlast from "../assets/img/projects/blast_raiders.jpg"
import projectBlastDesktop from "../assets/img/projects/maxresdefault.jpg"
import projectTennis from "../assets/img/projects/tennis_manager.jpg"
import projectRivals from "../assets/img/projects/rivals.jpg"

export const portfolio = [
    {
        section: "Released Mobile Games",
        toParam: "mobile",
        desc: "The mobile free-to-play games I worked on which were released",
        projects: [
            {
                name: "Super Brawl Universe",
                toParam: "sbu",
                img: projectSbu,
                alt: "Super Brawl Universe loading page",
                link: "https://www.youtube.com/embed/5DqP_E5xtQI?si=aC3Hr4A6nuQds22A",
                projectType: "Mobile Game - Production",
                role: "Lead Game Designer",
                place: "Playsoft - Poland - Remote",
                starting: "2020",
                desc: [
                    "A previous launched version already existed",
                    "As a Lead Game Designer with 2 younger designers, my main task was to change the meta, from one similar to Marvel : Contest of Champions to a new one closer to Looney Tunes World of Mayhem",
                    "We also enriched the core game with addition of special powers (shield, freeze, etc.)",
                ],
            },
            {
                name: "Tour de France 2020 & 2021",
                toParam: "tdf",
                img: projectTdf,
				desktopImg:projectTdfDesktop,
                alt: "Tour de France advertisement sample",
                link: "https://www.youtube.com/embed/6mb5lzdHihM?si=ufP1O5GeeL9p3fg8",
                projectType: "Mobile Game - Production & Live Ops",
                role: "Lead Game Designer",
                place: "Playsoft - Poland - Remote",
                starting: "2020",
                desc: [
                    "For TDF 2020, a younger GD and I were in charge of the adaptation of TDF 2019. A lot of small things, but the main ones were: addition of a camp, new level-up system, distinction between riders and bikes (previously, bikes were a sub-attribute of riders), addition of a technology tree.",
                    "For TDF 2021, I designed a slightly different live-ops system and handled all the live-ops, based on existing official competitions (planning, implementation, new communication features…).",
                ],
            },
            {
                name: "Mutants: Genetic Gladiators",
                toParam: "mgg",
                img: projectMgg,
                alt: "Mutant Genetic Gladiators advertisement sample",
                link: "https://www.youtube.com/embed/gpGOVU2-JqM?si=FoQXMB9Bssi_HGLw",
                projectType: "Mobile Game - Concept to Live Ops",
                role: "Original Game Designer",
                place: "Kobojo - France",
                starting: "2013",
                desc: [
                    "MGG is a turn based fighting/breeding game.",
                    "On this Facebook/Mobile game, I was the main Game Designer and worked on the project from concept to Live Ops.",
                    "I mainly worked on the FB version, but except some UI adaptation, it was exactly the same game including balancing.",
                    "The game is still live, more than 10 yrs later!",
                    "https://play.google.com/store/apps/details?id=com.kobojo.mutants&hl=en",
                ],
            },
        ],
    },
    {
        section: "Facebook Social Games",
        toParam: "fb",
        desc: "The social games I created as a main Game Designer for Facebook platform.",
        projects: [
            {
                name: "Mutants: Genetic Gladiators",
                toParam: "mgg",
                img: projectMgg,
                alt: "Mutant Genetic Gladiators advertisement sample",
                link: "https://www.youtube.com/embed/gpGOVU2-JqM?si=FoQXMB9Bssi_HGLw",
                projectType: "Facebook FTP Game - Concept to Live Ops",
                role: "Main Game Designer",
                place: "Kobojo - France",
                starting: "2013",
                desc: [
                    "MGG is a turn based fighting/breeding game.",
                    "On this Facebook/Mobile game, I was the main Game Designer and worked on the project from concept to Live Ops.",
                    "I handled most of the GD, including features description, mutants balancing (including the creation of balancing formulas), level design and scripting of each PvE fight, progression, and part of the creature briefing for artists.",
                    "I also created dialogs, quests, and HC-packs for LiveOps events",
                ],
            },
            {
                name: "Atlantis Fantasy (city builder)",
                toParam: "atlantis",
                img: projectAtlantis,
				desktopImg:projectAtlantisDesktop,
                alt: "Atlantis Fantasy city builder",
                link: "https://www.youtube.com/embed/jecQdYcS-sY?si=MkajL9mFCh8mvhDT",
                projectType: "Facebook FTP Game - Live Ops",
                role: "Live Ops Game Designer",
                place: "Kobojo - France",
                starting: "2012",
                desc: [
                    "Atlantis Fantasy was a city-builder Facebook Project.",
                    "I worked on Live Ops, mainly delivering one event every 2 weeks, with quests, dialogs, free items, and paid items.",
                    "I also documented new features, as there was no other GD on the project",
                ],
            },
            {
                name: "Totally Spies! Fashion Agent",
                toParam: "ts",
                img: projectTs,
                alt: "Totally Spies! Fashion Agents banner",
                link: "https://www.youtube.com/embed/WX38ov2i6nw?si=3oY2LgraBq0Ob2Xr",
                projectType: "Facebook FTP Game - Concept to launch",
                role: "Main Game Designer / Licence Manager",
                place: "OUAT Entertainment - France",
                starting: "2011",
                desc: [
                    "I was the only GD/LD on this game. Totally Spies! Fashion Agent was split in two: a customisation game and a puzzle-adventure game.",
                    "The game was not a huge commercial success, but the puzzle-adventure part was extensively copied by Zynga's Adventure World. It was both a huge pride and some very bad news, as David rarely survives Goliath's assault.",
                    "On this project, I was also in charge of the Totally Spies! licence for the 5th time, checking the licence was respected, reporting to Marathon (licence owner), and so on.",
                ],
            },
        ],
    },
    {
        section: "Soft-launched or unreleased Mobile Games",
        toParam: "unreleased",
        desc: "The mobile free-to-play games I worked on which were either only soft-launched or global launched long after I left the company",
        projects: [
            {
                name: "Blast Raiders (Blast Explorers)",
                toParam: "blast",
                img: projectBlast,
				desktopImg:projectBlastDesktop,
                alt: "Blast Raiders Google Play image",
                link: "https://www.youtube.com/embed/X7mzMiW8zDM?si=cN_CBptNN9GcqSBW",
                projectType: "Mobile Game - Production (soft-launch)",
                role: "Main Game Designer",
                place: "Product Madness - Poland - Remote",
                starting: "2022",
                desc: [
                    "A 'match-2' game which frequently changed, was soft-launched several times, but never global launched.",
                    "When I joined the project, production had already started. I worked on it during approximately 2 yrs, including the level design of 400+ levels.",
                    "At the beginning, the project was coin-based, with a meta very close to Coin Master. Later on, it became star-based, closer to Royal Match.",
                ],
            },
            {
                name: "Tennis Manager Mobile",
                toParam: "tennis",
                img: projectTennis,
                alt: "Tennis Manager loading page",
                link: "https://www.youtube.com/embed/h4tO2lms_Ck?si=zgv0uTyu0NsDoMNJ",
                projectType:
                    "Mobile Game - Preprod to Production (soft-launch)",
                role: "Lead Game Designer",
                place: "Rebound CG - France",
                starting: "2017",
                desc: [
                    "The first tennis management game on mobile.",
                    "I left the project during softlaunch, after 2 yrs working on it.",
                    "The video shows the game at that time.",
                    "Now, the game has been released with some additional features (ability to use 'cards' at specific moments for example)",
                ],
            },
            {
                name: "Urban Rivals Squad RPG",
                toParam: "rivals",
                img: projectRivals,
                alt: "Some Urban Rivals characters",
                link: "",
                projectType: "Mobile Game - Concept to Alpha",
                role: "Main Game Designer",
                place: "Boostr/Acute Games - France",
                starting: "2015",
                desc: [
                    "The idea was to adapt the Urban Rivals licence to a Squad RPG game, similar to Summoner Wars but with a twist.",
                    "The twist was the creation of “Synergy”, a special move specific to a clan with low damage (or protection) but activated for free: each time a fighter performs an action except a Synergy, there is a chance fighters of the same team and same clan will activate their Synergy move",
                    "The game was supposed to find an editor at Alpha state, and didn’t manage to.",
                ],
            },
        ],
    },
];
