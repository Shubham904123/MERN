import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import Product from "./components/Product";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/src/jquery";
import "bootstrap/dist/js/bootstrap";
import Basket from "./components/basket";
import Home from "./components/Home";
import Login from "./components/Login/login";
import Signup from "./components/Signup/signup";
import { useEffect, useState } from "react";
import { auth } from "./components/Firebase/firebase";

function App() {
  const [user, setUser] = useState(false);
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        setUser(true);
      }
    });
  }, []);
  return (                                      
    <Router>
      {!user ? (
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      )}

      {/* <Route path='/signup'element={<Signup/>}/> */}
    </Router>
    // <h1>Hello</h1>
  );
}

export default App;
