import Register from "./components/Register";
import IngredientList from "./components/IngredientList";
import Profile from "./components/Profile";
import FourZeroFour from "./components/404";
import { BrowserRouter, Routes,Route} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/*" element={<FourZeroFour/>} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
