import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Tutorial from './pages/Tutorial'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/tutorial' element={<Tutorial></Tutorial>} />
        <Route path='/pricing' element={<Pricing></Pricing>} />
        <Route path='/contact' element={<Contact></Contact>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
