import "./App.css";
import SignIn from "./components/SignIn";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Dashboard from "./pages/Dashboard";
 import Testimo from "./components/testimonial";
import Form from "./components/Form/Form";
import MyInteraction from "./components/MyInteractions"
import LegalMarketplace from "./components/LegalMarketplace";
import Error from "./pages/Error"
function App() {

 return (
    <>
    
   
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/testimonial" element={<Testimo/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/form" element={<Form/>} />
        <Route path="/my_interaction" element={<MyInteraction/>} />

        <Route path="/legal_Marketplace" element={<LegalMarketplace/>} />
        <Route path="*" element={<Error/>} />

      </Routes>
    </>
  );


}

export default App;
