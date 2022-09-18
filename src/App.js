import { Routes, Route, Navigate } from "react-router-dom";
import Container from '@mui/material/Container';
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Shop from "./pages/Shop/Shop";
import Navbar from "./components/Navbar/Navbar";
function App() {
  if (!localStorage.getItem("cart")) {
    localStorage.setItem('cart',JSON.stringify([]))
  }
  return (
    <>
      <Container>
        <Navbar/>
      </Container>
      <Container>
       <Routes>
          <Route path="/" element = {<Navigate to='/home'/>}/>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Shop />} />
        </Routes>  
      </Container>
    </>
  );
}

export default App;
