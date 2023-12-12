import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/auth/login/SignIn";
import Register from "./pages/auth/register/Register";

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="login" element={<SignIn />} />
        <Route path="/register" element={< Register/>}></Route>
      </Routes>
    </BrowserRouter>
  );
  
}

