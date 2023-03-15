import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import React from "react";
import img2 from "../img/img2.png";
import styles from "./Home.module.css";

const Home = () => {
  const navigate = useNavigate();
  if (!localStorage.currentUser) {
    navigate("/login");
  }
  const style = { backgroundImage: `url(${img2})` };
  return (
    <div>
      <NavBar />
      <div className={styles.home} style={style}></div>
    </div>
  );
};

export default Home;
