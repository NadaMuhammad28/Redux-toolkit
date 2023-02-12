import CartList from "./components/CartList";
import NavBar from "./components/navbar";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getcartitems } from "./features/cart/CartSlice";
function App() {
  const dipatch = useDispatch();

  useEffect(() => {
    dipatch(getcartitems());
  }, []);
  const { isLoading } = useSelector((store) => store.cart);
  if (isLoading)
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  return (
    <main>
      <NavBar />
      <CartList />
    </main>
  );
}
export default App;
