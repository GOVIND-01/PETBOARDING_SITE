import './App.css';
import { Route, Routes } from "react-router-dom";
import { CreatePage } from "./component/CreatePage.jsx";
import { Home } from "./component/Home";
import { Navbar } from "./component/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/listing/create" element={<CreatePage />} />
      </Routes>
    </div>
  );
}

export default App;
