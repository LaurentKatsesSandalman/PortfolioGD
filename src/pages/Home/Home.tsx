//import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import SectionButton from "../../components/SectionButton/SectionButton";
import photo from "../../assets/img/temp_profil_3.png"
import pro from "../../assets/img/logos/logo_pro.jpg"
import groupe from "../../assets/img/logos/logo_groupe_wcs.png"
import solo from "../../assets/img/logos/logo_solo_sandales.png"

function HomePage() {
    return (
        <>
            <div className={styles.presentationContainer}>
                <div>
                    <img
                        className={styles.avatar}
                        src={photo}
                        alt="Photo de Laurent Sandalman"
                    />
                </div>
                <div className={styles.presentationText}>
                    
                    <h2 className={styles.h2top}>Développeur Web Full-stack</h2>
                    <p className={styles.pblock}>
                        Vous êtes sur le portfolio de Laurent Durup, aka
                        Sandalman. Après plus de 20 ans dans l’univers du jeu
                        vidéo et de l’animation interactive, dont 10+ comme Game
                        Designer Free-To-Play Mobile, me voici à présent “jeune”
                        Développeur Web.</p>
                        <p className={styles.pblock}> En recherche de stage, d’emploi, du
                        Graal, du Sens de la Vie, et d’une nouvelle paire de
                        sandales en cuir taille 42, je vous présente ici mes
                        premiers projets.
                    </p>
                </div>
            </div>
            
                <h2>Projets</h2>
            <div className={styles.projectsContainer}>
                <SectionButton
                    image={pro}
                    name="Professionnel"
                    to="portfolio/pro"
                    ariaLabel="vers la section projet professionnel"
                />
                <SectionButton
                    image={groupe}
                    name="En groupe"
                    to="portfolio/groupe"
                    ariaLabel="vers la section projet en groupe"
                />
                <SectionButton
                    image={solo}
                    name="En solo"
                    to="portfolio/solo"
                    ariaLabel="vers la section projet en solo"
                />
            </div>
        </>
    );
}

export default HomePage;
