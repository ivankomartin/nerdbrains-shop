import { Route, Routes } from "react-router-dom";
import Navigation from "@components/navigation/navigation.component";
import Checkout from "@routes/checkout.component";
import Home from "@routes/home.component";
import SignIn from "@routes/sign-in.component";
import SignUp from "@routes/sign-up.component";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
