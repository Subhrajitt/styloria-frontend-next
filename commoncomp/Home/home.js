import React from "react";
import Navbar from "../Navbar/navbar";
import styles from "./home.module.css";
import { Button } from "@mui/material";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className={styles.home_mainWrpr}>
        <div className={styles.home_subWrpr}>
          <div className="commonWidth">
            <div className={styles.home_contentWrpr}>
              <div className={styles.home_textWrpr}>
                <h2>The Styloria</h2>
                <h2>
                  <span>Hair & Beauty </span>Studio
                </h2>
                <Link href="tel:+1 (905) 497-2489">+1 (905) 497-2489</Link>
              </div>
              <div>
                <Button>Book Now</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
