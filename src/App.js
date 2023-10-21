import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './Home';
import Plays from './Plays';
import FAQs from './FAQs';
import Checkout from './Checkout';
import Success from './Success';

function App() {

  return (
    <Router>
      <div className="bg-slate-100">
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/plays/*" element={<Plays />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path='/success' element={<Success />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;