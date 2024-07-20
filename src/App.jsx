import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";
import Home from "./components/home";

BrowserRouter;
function App() {
  return (
    <>
      <div className="main">
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Signup />} />
            <Route  path="/home" element={<Home/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
