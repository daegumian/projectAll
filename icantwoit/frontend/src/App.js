import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavbarElement from "./components/Navbar/NavbarElement";
import Conversation from "./pages/Conversation";
import Sentence from "./pages/Sentence";

function App() {
  return (
    <Router>
      <NavbarElement />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/conversation' element={<Conversation />} />
        <Route path='/sentence' element={<Sentence />} />
      </Routes>
    </Router>
  );
}

export default App;
