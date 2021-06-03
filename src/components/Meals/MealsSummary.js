import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>De la bonne bouffe !</h2>
      <p>
        Ici tu trouveras que de la bonne bouffe mon reuf, crois moi ton estomac
        va en avoir pour son argent
      </p>
      <p>
        Evidemment, nous disposons de plusieurs repas en fonctions des régimes
        alimentaires de chacun et chacune, donc fais ton choix !
      </p>
    </section>
  );
};

export default MealsSummary;
