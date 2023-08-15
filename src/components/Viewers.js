import styles from "../styles/viewers.module.scss";
import disney from "../assets/images/viewers-disney.png";
import pixer from "../assets/images/viewers-pixar.png";
import marvel from "../assets/images/viewers-marvel.png";
import starwars from "../assets/images/viewers-starwars.png";
import national from "../assets/images/viewers-national.png";
import disneyVideo from "../assets/videos/1564674844-disney.mp4";
import marvelVideo from "../assets/videos/1564676115-marvel.mp4";
import nationalVideo from "../assets/videos/1564676296-national-geographic.mp4";
import pixarVideo from "../assets/videos/1564676714-pixar.mp4";
import starwarsVideo from "../assets/videos/1608229455-star-wars.mp4";
const Viewers = (props) => {
  return (
    <div className={styles.viewerMain}>
      <div className={styles.studios}>
        <img src={disney} alt="Disney" />
        <video autoPlay={true} loop={true} playsInline={true} muted>
          <source src={disneyVideo} type="video/mp4" />
        </video>
      </div>
      <div className={styles.studios}>
        <img src={pixer} alt="Pixer" />
        <video autoPlay={true} loop={true} playsInline={true} muted>
          <source src={pixarVideo} type="video/mp4" />
        </video>
      </div>
      <div className={styles.studios}>
        <img src={marvel} alt="Marvels" />
        <video autoPlay={true} loop={true} playsInline={true} muted>
          <source src={marvelVideo} type="video/mp4" />
        </video>
      </div>
      <div className={styles.studios}>
        <img src={starwars} alt="Starwars" />
        <video autoPlay={true} loop={true} playsInline={true} muted>
          <source src={starwarsVideo} type="video/mp4" />
        </video>
      </div>
      <div className={styles.studios}>
        <img src={national} alt="National" />
        <video autoPlay={true} loop={true} playsInline={true} muted>
          <source src={nationalVideo} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Viewers;
