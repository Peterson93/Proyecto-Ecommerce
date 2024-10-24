import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import {HashRouter as Router,Routes,Route} from "react-router-dom"
import InicioScreen from "./components/screens/InicioScreen";
import LoginScreen from "./components/screens/LoginScreen";
import SignupScreen from "./components/screens/SignupScreen";
import LogoutScreen from "./components/screens/LogoutScreen";
import CarritoScreen from "./components/screens/CarritoScreen";
import ProductoScreen from "./components/screens/ProductoScreen";





export default function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route exact path="/" element={<InicioScreen/>}></Route>
        </Routes>
        <Routes>
          <Route exact path="/Product/:id" element={<ProductoScreen/>}></Route>
        </Routes>
        <Routes>
          <Route exact path="/Login" element={<LoginScreen/>}></Route>
        </Routes>
        <Routes>
          <Route exact path="/Signup" element={<SignupScreen/>}></Route>
        </Routes>
        <Routes>
          <Route exact path="/Logout" element={<LogoutScreen/>}></Route>
        </Routes>
        <Routes>
          <Route exact path="/Carrito/:id?" element={<CarritoScreen/>}></Route>
        </Routes>
    </Router>
    </>
  );
}
