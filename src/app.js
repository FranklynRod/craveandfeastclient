import Register from "./components/Register";
import Profile from "./components/Profile";
import FourZeroFour from "./components/404";
import { BrowserRouter, Routes,Route} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import { useState } from "react";



function App() {
  const [username, setUsername] = useState('')
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
      <Route path="/register" element={<Register setUsername={setUsername}/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/home" element={<Home prop={username}/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/*" element={<FourZeroFour/>} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
