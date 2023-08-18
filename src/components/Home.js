import React, { useEffect, useRef } from "react";
import Header from "./Header";
import styles from "../styles/home.module.scss";
import ImageSlider from "./ImageSlider";
import Viewers from "./Viewers";
import Categories from "./Categories";
import { useDispatch } from "react-redux";
import { getMovies } from "../context/AuthContext";
import { setMovies } from "../features/movie/movieSlice";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  const dataFetchRef = useRef(false);
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const recommends = [];
  const originals = [];
  const trending = [];
  const newDisney = [];
  useEffect(() => {
    auth.onAuthStateChanged((user)=>{
      if(!user){
        navigate('/');
      }
    })
    if (dataFetchRef.current) return;
    getMovies()
      .then((res) => {
        res.docs.forEach((ele) => {
          switch (ele.data().type) {
            case "recommend":
              recommends.push({ ...ele.data(), id: ele.id });
              break;
            case "original":
              originals.push({ ...ele.data(), id: ele.id });
              break;
            case "trending":
              trending.push({ ...ele.data(), id: ele.id });
              break;
            case "new":
              newDisney.push({ ...ele.data(), id: ele.id });
              break;
            default:
              console.log("switch case error***");
              break;
          }
        });
        dispatch(
          setMovies({
            recommend: recommends,
            newDisney: newDisney,
            original: originals,
            trending: trending,
          })
        );
      })
      .catch((error) => console.log("111", error));
    dataFetchRef.current = true;
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <ImageSlider />
        <Viewers />
        <Categories heading={"Recommended for You"} category={"recommend"} />
        <Categories heading={"New to Disney+"} category={"new"} />
        <Categories heading={"Originals"} category={"original"} />
        <Categories heading={"Trending"} category={"trending"} />
      </div>
    </div>
  );
};

export default Home;
