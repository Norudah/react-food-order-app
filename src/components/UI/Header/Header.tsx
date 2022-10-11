import CartButton from "../../Cart/CartButton";
import styles from "./Header.module.css";

import mealImage from "../../../assets/meals.jpg";
import Banner from "../Banner";

type PropsType = {
  onActivateModal: () => void;
};

const Header = ({ onActivateModal }: PropsType) => {
  return (
    <header>
      <nav className={styles.container}>
        <h1>Chez Koba</h1>
        <CartButton onActivateModal={onActivateModal} />
      </nav>
      <div className={styles["image-container"]}>
        <img className={styles["image"]} src={mealImage} alt="" />
        <Banner />
      </div>
    </header>
  );
};

export default Header;
