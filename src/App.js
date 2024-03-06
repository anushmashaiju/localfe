import { useContext } from "react";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Home from "./pages/home page/Home";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import AddPost from "./pages/AddPost/AddPost";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>      
        <Route path="/" element={user ? <Home /> : <Login />} />
        <Route path="/Login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/SignUp" element={user ? <Navigate to="/" /> : <SignUp />} />
      <Route path="/AddPost" element={<AddPost/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
  