import styles from "./leftBarNavigation.module.css"
import { Link } from "react-scroll";


function LeftBarNavigation(){
    return (
        <div className={styles.container}>

        <ul>
          <li>
            <button><Link className={styles.link_style} activeClass="active" to="TV" spy={true} smooth={true}>TV</Link></button>
          </li>
          <li>
            <button><Link className={styles.link_style} to="TVSHORT" spy={true} smooth={true}>TV SHORTS</Link></button>
          </li>
          <li>
            <button><Link className={styles.link_style} to="MOVIES" spy={true} smooth={true}>MOVIES</Link></button>
          </li>
          <li>
            <button><Link className={styles.link_style} to="OVA" spy={true} smooth={true}>OVA</Link></button>
          </li>
          <li>
            <button><Link className={styles.link_style} to="ONA" spy={true} smooth={true}>ONA</Link></button>
          </li>
          <li>
            <button><Link className={styles.link_style} to="SPECIAL" spy={true} smooth={true}>SPECIAL</Link></button>
          </li>
        </ul>

      </div>
    )
}
export default LeftBarNavigation;