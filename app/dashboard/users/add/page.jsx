import React from "react";
import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css";
const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder="username" name="title" required />
        <input type="email" placeholder="email" name="price" />
        <input type="password" placeholder="password" name="stock" />
        <input type="phone" placeholder="phone" name="color" />
        <select name="isAdmin" id="">
          <option value={false} selected>
            Is Admin?
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select name="isActive" id="">
          <option value={false} selected>
            Is Active?
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>{" "}
        </select>
        <textarea
          name="desc"
          id="desc"
          placeholder="address"
          rows="16"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddUserPage;
