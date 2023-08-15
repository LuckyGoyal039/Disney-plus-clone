import React from "react";
import Header from "./Header";
import styles from "../styles/home.module.scss";
import ImageSlider from "./ImageSlider";
import Viewers from "./Viewers";

const Home = (props) => {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <ImageSlider />
        <Viewers />
      </div>
    </div>
  );
};

export default Home;
