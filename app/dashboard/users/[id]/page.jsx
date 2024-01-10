import React from "react";
import styles from "@/app/ui/dashboard/users/singleUser.module.css";
import Image from "next/image";
const SingleUserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={"/noavatar.png"} fill />
        </div>
        Nigga man
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <label>Username</label>
          <input type="text" name="username" placeholder="Niggaman" />
          <label>Email</label>
          <input type="email" name="email" placeholder="Niggaman@gmail.com" />
          <label>̦Password</label>
          <input type="password" name="password" placeholder="Niggaman" />
          <label>̦Phone</label>
          <input type="text" name="phone" placeholder="+1234567" />
          <label>Address</label>
          <textarea type="text" name="address" placeholder="Niggaman" />
          <label name={"isAdmin"}>Is Admin?</label>
          <select name="isAdmin">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label name={"isActive"}>is Active</label>
          <select name="isActive" id="">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
