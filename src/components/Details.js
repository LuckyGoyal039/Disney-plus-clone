import styles from "../styles/detail.module.scss";
import Header from "./Header";
import playBtn from "../assets/images/play-icon-black.png";
import trailerBtn from "../assets/images/play-icon-white.png";
import groupWatchIcon from "../assets/images/group-icon.png";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const Detail = (props) => {
  const [movieDetails, setMovieDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getDocs(collection(db, "movies"))
      .then((result) => {
        const data = result.docs.filter((ele) => id === ele.id);
        setMovieDetails(data[0].data());
      })
      .catch((error) => {
        console.log("fetching error: ", error);
      });
  }, [id]);
  return (
    <>
      <Header />
      {movieDetails && (
        <div className={styles.main}>
          <div className={styles.background}>
            <img src={movieDetails.backgroundImg} alt={movieDetails.title} />
          </div>
          <div className={styles.imageTitle}>
            <img src={movieDetails.titleImg} alt={movieDetails.title} />
          </div>
          <div className={styles.contentMeta}>
            <div className={styles.controls}>
              <button className={styles.player}>
                <img src={playBtn} alt="Play Button" />
                <span>PLAY</span>
              </button>
              <button className={`${styles.player} ${styles.trailer}`}>
                <img src={trailerBtn} alt="Trailer Button" />
                <span>TRAILER</span>
              </button>
              <div className={styles.addList}>
                <span></span>
                <span></span>
              </div>
              <div className={styles.groupWatch}>
                <div>
                  <img src={groupWatchIcon} alt="Group Icon" />
                </div>
              </div>
            </div>
            <div className={styles.subTitle}>{movieDetails.subTitle}</div>
            <div className={styles.description}>{movieDetails.description}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Detail;
