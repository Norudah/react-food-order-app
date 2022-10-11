import MealCard from "../../components/Meal/MealCard";
import Header from "../../components/UI/Header";
import { DUMMY_DATA } from "../../data/meals";
import styles from "./MealsPage.module.css";

type PropsType = {
  children?: React.ReactNode;
  onActivateModal: () => void;
};

const MealsPage = ({ children, onActivateModal }: PropsType) => {
  return (
    <div className={styles.container}>
      <Header onActivateModal={onActivateModal} />
      <MealCard meals={DUMMY_DATA}></MealCard>
    </div>
  );
};

export default MealsPage;
