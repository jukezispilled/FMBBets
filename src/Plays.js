// Plays.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PlaysHome from './PlaysHome';
import VIPd from './VIPday';
import VIPw from './VIPweek';
import Excd from './Excday';
import Excw from './Excweek';

function Plays() {
  return (
      <Routes>
        <Route exact path="/" element={<PlaysHome />} />
        <Route path="/vipday" element={<VIPd />} />
        <Route path="/vipweek" element={<VIPw />} />
        <Route path="/exclusiveday" element={<Excd />} />
        <Route path="/exclusiveweek" element={<Excw />} />
      </Routes>
  );
}

export default Plays;
