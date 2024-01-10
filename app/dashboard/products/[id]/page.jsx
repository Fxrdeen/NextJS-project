import React from "react";
import styles from "@/app/ui/dashboard/users/singleUser.module.css";
import Image from "next/image";
const SingleProductPage = () => {
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
          <label>Title</label>
          <input type="text" name="title" placeholder="Niggaman" />
          <label>Price</label>
          <input type="number" name="price" placeholder="Niggaman@gmail.com" />
          <label>̦Stock</label>
          <input type="number" name="stock" placeholder="44" />
          <label>̦Color</label>
          <input type="text" name="color" placeholder="red" />
          <label>Size</label>
          <textarea type="text" name="size" placeholder="Blr" />
          <label name={"cat"}>Cat</label>
          <select name="kitchen">
            <option value={"kitchen"}>Kitchen</option>
            <option value={"computers"}>Computers</option>
          </select>
          <label name={"isActive"}>Description</label>
          <textarea
            name="desc"
            id="desc"
            rows="16"
            placeholder="description"
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
