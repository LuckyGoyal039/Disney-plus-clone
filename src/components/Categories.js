import styles from "../styles/recommends.module.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectNewDisney,
  selectOriginal,
  selectRecommend,
  selectTrending,
} from "../features/movie/movieSlice";
const Caterories = ({ heading, category }) => {
  const recommendMovies = useSelector(selectRecommend);
  const trendingMovies = useSelector(selectTrending);
  const originalMovies = useSelector(selectOriginal);
  const newDisneyMovies = useSelector(selectNewDisney);
  function checkCategory() {
    switch (category) {
      case "recommend":
        return recommendMovies;
      case "original":
        return originalMovies;
      case "trending":
        return trendingMovies;
      case "new":
        return newDisneyMovies;
      default:
        console.log("Somthing wet wrong");
    }
  }
  return (
    <div className={styles.container}>
      <h4>{heading}</h4>
      <div className={styles.content}>
        {checkCategory()?.map((ele) => {
          return (
            <div className={styles.imageElement} key={ele.id}>
              <Link to={"/detail/".concat(ele.id)}>
                <img src={ele.cardImg} alt={ele.title} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Caterories;
