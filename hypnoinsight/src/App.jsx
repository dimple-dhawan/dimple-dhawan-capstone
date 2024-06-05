import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import BookNow from "./pages/BookNow/BookNow";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/services' element={ <Services /> } />
        <Route path='/booknow' element={ <BookNow /> } />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
