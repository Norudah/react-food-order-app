import classes from "./Header.module.css";
import mealBanner from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Meals App</h1>
        <HeaderCartButton onShowCart={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img
          src={mealBanner}
          alt="Une table avec plein de nourritures dessus"
        />
      </div>
    </>
  );
};

export default Header;
