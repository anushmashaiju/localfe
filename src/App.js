import { useContext } from "react";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Home from "./pages/home page/Home";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import AddPost from "./pages/AddPost/AddPost";

import { LoginAuth, UserAuth } from './Authorisation/authorization';



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
   /* 

<>
<BrowserRouter>
  <Routes>
    <Route element={<LoginAuth/>}>
    <Route path='/'element={<Login/>}/>
    </Route>
    {/*user route*}
    <Route element={<UserAuth/>}>
    <Route path='/home' element={<Home/>}/>
    <Route path='/AddPost' element={<AddPost/>}/>
   
     </Route>
     </Routes>
   </BrowserRouter>
      </>
      );
    }
   

 */