import React from "react";
import Header from "./Header";
import styles from "../styles/home.module.scss";
import ImageSlider from "./ImageSlider";
import Viewers from "./Viewers";
import Recommends from "./Recommends";

const Home = (props) => {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <ImageSlider />
        <Viewers />
        <Recommends heading={"Recommended for You"} />
        <Recommends heading={"New to Disney+"} />
        <Recommends heading={"Originals"} />
        <Recommends heading={"Trending"} />
      </div>
    </div>
  );
};

export default Home;
