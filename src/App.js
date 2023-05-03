import { Routes, Route, Navigate } from 'react-router-dom';
import './reset.css';
import './App.css';
import Header from './components/Header/Header';
import Homepage from './pages/Homepage/Homepage';
import Footer from './components/Footer/Footer';
import ContactUs from './pages/ContactUs/ContactUs';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Checkout from './pages/Checkout/Checkout';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/details/:id' element={<ProductDetails />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
