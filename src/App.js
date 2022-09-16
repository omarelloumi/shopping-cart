import { Routes, Route, Navigate } from "react-router-dom";
import Container from '@mui/material/Container';
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Store from "./pages/Shop/Store";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <>
      <Navbar/>
      <Container>
       <Routes>
          <Route path="/" element = {<Navigate to='/home'/>}/>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
         <Route path="/store" element={<Store />} />
        </Routes>  
      </Container>
    </>
  );
}

export default App;
