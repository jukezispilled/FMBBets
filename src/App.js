import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './Home';
import Plays from './Plays';
import FAQs from './FAQs';
import Checkout from './Checkout';

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
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;