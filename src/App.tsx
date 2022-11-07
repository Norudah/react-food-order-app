import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import CartModal from "./components/Cart/CartModal/CartModal";
import { CartProvider } from "./context/cart-context";
import MealsPage from "./pages/MealsPage/MealsPage";

const queryClient = new QueryClient();

function App() {
  const [isModalDisplayed, setIsModalDisplayed] = useState<boolean>(false);

  const ActivateModalHandler = () => setIsModalDisplayed(true);
  const DesactivateModalHandler = () => setIsModalDisplayed(false);

  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <MealsPage onActivateModal={ActivateModalHandler} />
        {isModalDisplayed && <CartModal onDesactivateModal={DesactivateModalHandler} />}
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;
