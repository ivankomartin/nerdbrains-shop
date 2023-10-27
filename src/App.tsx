import { Route, Routes } from "react-router-dom";
import Navigation from "./components/navigation/navigation.component";
import Checkout from "./routes/checkout.component";
import Home from "./routes/home.component";
import Shop from "./routes/shop/shop.component";
import SignIn from "./routes/sign-in.component";
import SignUp from "./routes/sign-up.component";

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
