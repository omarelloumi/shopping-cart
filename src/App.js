import { Routes, Route } from "react-router-dom";
import Container from '@mui/material/Container';
import Home from "./pages/Home";
import About from "./pages/About";
import Store from "./pages/Store";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <>
      <Navbar/>
      <Container>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
         <Route path="/store" element={<Store />} />
        </Routes>  
      </Container>
    </>
  );
}

export default App;
