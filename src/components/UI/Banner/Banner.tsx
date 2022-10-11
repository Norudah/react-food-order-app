import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={styles["container"]}>
      <h1>Test banière</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur esse deleniti inventore?</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit id corrupti quasi facilis quam!</p>
    </div>
  );
};

export default Banner;
