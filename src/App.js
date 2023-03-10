import Login from "./Components/Login";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import SignUp from "./Components/SignUp";
import Dashboard from "./Components/Dashboard";
import ResetPassword from "./Components/ResetPassword";

function App() {
  return (
    <BrowserRouter>
      <div className="antialiased">
       <Routes>
        <Route path="/" element={ <Login />}/>
        <Route path="/signup" element={ <SignUp />}/>
        <Route  path="/resetPassword" element={ <ResetPassword/>}/>
        <Route  path="/dashboard" element={ <Dashboard/>}/>

       </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
