import './App.css';
import React, { useEffect, useState } from 'react';
import BotCollection from './BotCollection';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BotSpecs from './BotSpecs';
import SortBar from './SortBar';


function App() {
  const [Bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);


  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then(r => r.json())
      .then(data => {
        setBots(data)
      })
      .catch((error) => {
        console.error("Failed to fetch bots", error);
      });
  }, []);

  return (
    <>
      < SortBar bots={Bots} setBots={setBots}/>

      <Router>
        <Routes>
          <Route path="/" element={<BotCollection bots={Bots} army={army} setArmy={setArmy} />} />
          <Route path="/botSpecs/:id" element={<BotSpecs bots={Bots} setArmy={setArmy}/>} />
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
