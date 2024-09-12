import React from "react";
import style from "./page.module.css";
import { delay, easeIn, motion } from "framer-motion";

const Loading = () => {
  const cirlceLoading = {
    hidden: {
      x: 0,
      scale: 1.1,
    },
    circleOne: {
      y: [0, 40, 0],
      transition: {
        type: "string",
        repeat: Infinity,
        duration: 1,
        repeatType: "loop",
        stiffness: 100,
        easeIn,
      },
    },
    circleTwo: {
      y: [40, 0, 40],
      transition: {
        type: "string",
        repeat: Infinity,
        delay: 0,
        duration: 1,
        repeatType: "loop",
        stiffness: 100,
        easeIn,
      },
    },
    circleThree: {
      y: [0, 40, 0],
      transition: {
        type: "string",
        repeat: Infinity,
        delay: 0,
        duration: 1,
        repeatType: "loop",
        stiffness: 100,
        easeIn,
      },
    },
  };

  return (
    <section>
      <div className={style.loading_container}>
        <motion.span
          variants={cirlceLoading}
          animate="circleOne"
          className={style.cirlce}
        ></motion.span>{" "}
        <motion.span
          variants={cirlceLoading}
          animate="circleTwo"
          className={style.cirlce}
        ></motion.span>{" "}
        <motion.span
          variants={cirlceLoading}
          animate="circleThree"
          className={style.cirlce}
        ></motion.span>
      </div>
      <div className={style.text_container}>
      <p>Loading...</p>
      </div>
    </section>
  );
};

export default Loading;
