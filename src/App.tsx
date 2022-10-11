import { useState } from "react";
import CartModal from "./components/Cart/CartModal/CartModal";
import { CartProvider } from "./context/cart-context";
import MealsPage from "./pages/MealsPage/MealsPage";

function App() {
  const [isModalDisplayed, setIsModalDisplayed] = useState<boolean>(false);

  const ActivateModalHandler = () => setIsModalDisplayed(true);
  const DesactivateModalHandler = () => setIsModalDisplayed(false);

  return (
    <CartProvider>
      <MealsPage onActivateModal={ActivateModalHandler} />
      {isModalDisplayed && <CartModal onDesactivateModal={DesactivateModalHandler} />}
    </CartProvider>
  );
}

export default App;
