import Logo from "../assets/images/logo.svg";
import HomeIcon from "../assets/images/home-icon.svg";
import SearchIcon from "../assets/images/search-icon.svg";
import WatchListIcon from "../assets/images/watchlist-icon.svg";
import OriginalsIcon from "../assets/images/original-icon.svg";
import MoviesIcon from "../assets/images/movie-icon.svg";
import SeriesIcon from "../assets/images/series-icon.svg";
import styles from "../styles/header.module.scss";
const Header = (props) => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.mainLogo}>
        <img src={Logo} alt="Logo" />
      </div>
      <div className={styles.menuList}>
        <a href="/home">
          <img src={HomeIcon} alt="Home" className={styles.menuIcons} />
          <span>HOME</span>
        </a>
        <a href="/search">
          <img src={SearchIcon} alt="search" className={styles.menuIcons} />
          <span>SEARCH</span>
        </a>
        <a href="/watchlist">
          <img
            src={WatchListIcon}
            alt="watchList"
            className={styles.menuIcons}
          />
          <span>WATCHLIST</span>
        </a>
        <a href="/originals">
          <img
            src={OriginalsIcon}
            alt="originals"
            className={styles.menuIcons}
          />
          <span>ORIGINALS</span>
        </a>
        <a href="/movies">
          <img src={MoviesIcon} alt="movies" className={styles.menuIcons} />
          <span>MOVIES</span>
        </a>
        <a href="/series">
          <img src={SeriesIcon} alt="series" className={styles.menuIcons} />
          <span>SERIES</span>
        </a>
      </div>
      <div>
        <a href="/login" className={styles.loginBtn}>
          LOGIN
        </a>
      </div>
    </nav>
  );
};

export default Header;
