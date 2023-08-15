import styles from "../styles/recommends.module.scss";
import { Link } from "react-router-dom";

const Recommends = ({ heading }) => {
  return (
    <div className={styles.container}>
      <h4>{heading}</h4>
      <div className={styles.content}>
        <div className={styles.imageElement}>
          <Link to="/">
            <img />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Recommends;
