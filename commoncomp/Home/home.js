import React from "react";
import Navbar from "../Navbar/navbar";
import styles from "./home.module.css";
import { Button } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import paginatioLogo from "../../public/assest/pagination_logo_sttyloria.png";
import youtube from "../../public/assest/youtube_styloria.png";
import facebook from "../../public/assest/fb_styloria.png";
import twitter from "../../public/assest/X_twitter_styloria.png";
import linkedin from "../../public/assest/linkedIn_styloria.png";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className={styles.home_mainWrpr}>
        <div className={styles.home_subWrpr}>
          <div className="commonWidth">
            {/* <div className="commonWidth"> */}
            <div className="socialMedia_logo">
              <Link href="https://www.youtube.com/" target="_blank">
                <Image src={youtube} alt="" />
              </Link>
              <Link href="https://www.facebook.com/" target="_blank">
                <Image src={facebook} alt="" />
              </Link>{" "}
              <Link href="https://twitter.com" target="_blank">
                <Image src={twitter} alt="" />
              </Link>{" "}
              <Link href="https://www.linkedin.com/" target="_blank">
                <Image src={linkedin} alt="" />
              </Link>
              {/* </div> */}
            </div>
            <div className={styles.home_contentWrpr}>
              <div className={styles.home_textWrpr}>
                <h2>The Styloria</h2>
                <h2>
                  <span>Hair & Beauty </span>Studio
                </h2>
                <Link href="tel:+1 (905) 497-2489">+1 (905) 497-2489</Link>
              </div>
              <div className={styles.buttonWrpr}>
                <Button>Book Now</Button>
              </div>
            </div>
          </div>
          <div className={styles.btmText}>
            <h1>The Styloria Hair & Beauty Studio</h1>
          </div>
          <div className={styles.bottomDesgin}>
            <div className={styles.bottomPaginatioLogo}>
              <Image src={paginatioLogo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
