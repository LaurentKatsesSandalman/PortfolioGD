import { Link } from "react-router-dom";
import styles from "./SectionButton.module.css"

interface SectionButtonProps {
    image: string;
    name: string;
    to: string;
    ariaLabel: string
}

function SectionButton({image, name, to, ariaLabel}:SectionButtonProps){

    return(
        <Link to={to} className={styles.sectionLink} state={{ from: "/" }} aria-label={ariaLabel}>
        <img className={styles.sectionImage} src={image} alt=""/>
        <p className={styles.sectionName}>{name}</p>
        </Link>
    )
}

export default SectionButton