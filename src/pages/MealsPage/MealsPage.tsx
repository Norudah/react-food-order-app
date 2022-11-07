import { useQuery, useQueryClient } from "react-query";
import { getMeals } from "../../api";
import MealCard from "../../components/Meal/MealCard";
import Card from "../../components/UI/Card";
import Header from "../../components/UI/Header";
import styles from "./MealsPage.module.css";

type PropsType = {
  children?: React.ReactNode;
  onActivateModal: () => void;
};

const MealsPage = ({ children, onActivateModal }: PropsType) => {
  const queryClient = useQueryClient();

  const { isLoading, isError, data, error } = useQuery({ queryKey: ["meals"], queryFn: getMeals });

  const mealCardContent = () => {
    if (isLoading) return <Card>Chargement</Card>;
    if (isError) return <Card>Une erreur est survenue : {!!error}</Card>;
    return <MealCard meals={data}></MealCard>;
  };

  return (
    <div className={styles.container}>
      <>
        <Header onActivateModal={onActivateModal} />
        {mealCardContent()}
      </>
    </div>
  );
};

export default MealsPage;
