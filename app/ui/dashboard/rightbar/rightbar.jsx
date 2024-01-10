import Image from "next/image";
import React from "react";
import { MdPlayCircleFilled } from "react-icons/md";
import styles from "./rightbar.module.css";
const RightBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src="/astronaut.png" alt="" fill className={styles.bg} />
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>Available now</span>
          <h3 className={styles.title}>
            How to use the new version of the admin dashboard
          </h3>
          <span className={styles.subtitle}>Takes 4 mins to learn</span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eaque
            dolor expedita, enim explicabo sint ratione? Dignissimos eligendi ut
            quis.
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Learn
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
