import styles from "./Card.module.css";

type PropsType = {
  children: React.ReactNode;
  style?: string;
};

const Card = ({ children, style }: PropsType) => {
  return <div className={`${styles["container"]} ${style}`}>{children}</div>;
};

export default Card;
