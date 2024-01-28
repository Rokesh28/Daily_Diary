import { BrowserRouter, Route,Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./screens/home/Home";
import Createday from "./screens/create/Createday";
import Daydetail from "./screens/daydetail/Daydetail"
import Editday from "./screens/edit/Editday";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/create" element={<Createday />}></Route>
            <Route path="/day/:id" element={<Daydetail/>}></Route>
            <Route path="/edit/:id" element={<Editday/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
