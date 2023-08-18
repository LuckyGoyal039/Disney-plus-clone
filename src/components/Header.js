import Logo from "../assets/images/logo.svg";
import HomeIcon from "../assets/images/home-icon.svg";
import SearchIcon from "../assets/images/search-icon.svg";
import WatchListIcon from "../assets/images/watchlist-icon.svg";
import OriginalsIcon from "../assets/images/original-icon.svg";
import MoviesIcon from "../assets/images/movie-icon.svg";
import SeriesIcon from "../assets/images/series-icon.svg";
import styles from "../styles/header.module.scss";
import { sighOutUser, loginWithGoogle } from "../context/AuthContext";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import {
  setUserLoginDetails,
  selectUserName,
  selectUserPhoto,
  setSignOutState,
} from "../features/user/userSlice";

const Header = (props) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const navigate = useNavigate();
  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  const handleUser = async () => {
    if (!userName) {
      try {
        const result = await loginWithGoogle();
        setUser(result.user);
        navigate('/home')
        console.log(result.user);
      } catch (error) {
        console.log(error.message);
      }
    } else if (userName) {
      sighOutUser()
        .then(() => {
          dispatch(setSignOutState());
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
      }
    });
    //eslint-disable-next-line
  }, [userName]);

  return (
    <nav className={styles.navBar}>
      <div className={styles.mainLogo}>
        <img src={Logo} alt="Logo" />
      </div>
      {!userName ? (
        <a className={styles.loginBtn} href="/#" onClick={handleUser}>
          LOGIN
        </a>
      ) : (
        <React.Fragment>
          <div className={styles.menuList}>
            <a href="/home">
              <img src={HomeIcon} alt="Home" className={styles.menuIcons} />
              <span>HOME</span>
            </a>
            <a href="/home">
              <img src={SearchIcon} alt="search" className={styles.menuIcons} />
              <span>SEARCH</span>
            </a>
            <a href="/home">
              <img
                src={WatchListIcon}
                alt="watchList"
                className={styles.menuIcons}
              />
              <span>WATCHLIST</span>
            </a>
            <a href="/home">
              <img
                src={OriginalsIcon}
                alt="originals"
                className={styles.menuIcons}
              />
              <span>ORIGINALS</span>
            </a>
            <a href="/home">
              <img src={MoviesIcon} alt="movies" className={styles.menuIcons} />
              <span>MOVIES</span>
            </a>
            <a href="/home">
              <img src={SeriesIcon} alt="series" className={styles.menuIcons} />
              <span>SERIES</span>
            </a>
          </div>
          <div className={styles.profileContainer}>
            <img
              src={userPhoto}
              alt="Profile"
              className={styles.profilePhoto}
            />
            <span className={styles.signOut} onClick={handleUser}>
              Sign out
            </span>
          </div>
        </React.Fragment>
      )}
    </nav>
  );
};

export default Header;
