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
        <h3 className={styles.sectionName}>{name}</h3>
		<img className={styles.sectionImage} src={image} alt=""/>
        </Link>
    )
}

export default SectionButton