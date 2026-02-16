import Sandals from "../../assets/icons/sandale_icon.png"
import styles from "./NavBar.module.css"
import { Link } from "react-router-dom";

function NavBar(){

    return(
        <div className={styles.navbar}>
       <Link to="/" aria-label="Back to home page"> <img className={styles.logo} src={Sandals} alt="Sandales icon"/></Link>
        <div className={styles.h1container}>
		<p className={styles.h1}>Laurent "Sandalman"</p>
		<p className={styles.h2}>Senior GD Mobile-FTP</p></div>
        </div>
    )
}

export default NavBar