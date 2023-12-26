import BackgroundImage from "../../assets/page1_bg.png";
import styles from "./Banner.module.css";

const Banner = () => {
    return (
        <div>
            <div className={styles.bottom}>
                <p>Discover new things on SuperApp</p>
            </div>
            <img src={BackgroundImage}></img>
        </div>
    )
}

export default Banner;