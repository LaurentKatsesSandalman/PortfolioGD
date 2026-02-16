import linkedInIcon from "../../assets/icons/linkedin.png"
import githubIcon from "../../assets/icons/github.png"
import styles from "./Footer.module.css"

function Footer() {
    return (
        <>
            <div className={styles.allblocks}>
                <div className={styles.leftblock}>
                    <p className={styles.pLeft}>Laurent Durup, aka Sandalman</p>
                    <p className={styles.pLeft}>Angoulême, FRANCE</p>
                    <p className={styles.pLeft}>Disponible dans un rayon de 100km </p>
                    <p className={styles.pLeft}>( Bordeaux, Poitiers, ...) ou en télétravail</p>
                </div>
                <div className={styles.rightblock}>
                    <div className={styles.picto} ><a href="https://www.linkedin.com/in/laurent-durup-85598035/" target="_blank" rel="noopener noreferrer"><img src={linkedInIcon} alt="Picto linkedin" className={styles.pictoLink} /></a>
                    <a href="https://www.github.com/LaurentKatsesSandalman" target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="Picto GitHub" className={styles.pictoLink}/></a>
                    </div>
                    <div className={styles.mailTel}>
                    <p  className={styles.pRight}>(+33) 6 76 43 48 08</p>
                    <p className={styles.pRight}>laurent.durup@proton.me</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
