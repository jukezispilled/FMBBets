// Plays.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PlaysHome from './PlaysHome';
import VIPd from './VIPday';
import VIPw from './VIPweek';
import Excd from './Excday';
import Excw from './Excweek';
import Excm from './Excmonth';

function Plays() {
  return (
      <Routes>
        <Route exact path="/" element={<PlaysHome />} />
        <Route path="/vipdaypass" element={<VIPd />} />
        <Route path="/vipweekpass" element={<VIPw />} />
        <Route path="/exclusiveday" element={<Excd />} />
        <Route path="/exclusiveweek" element={<Excw />} />
        <Route path="/exclusivemonth" element={<Excm />} />
      </Routes>
  );
}

export default Plays;
