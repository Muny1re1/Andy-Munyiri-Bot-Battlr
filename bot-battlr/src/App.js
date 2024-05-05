import './App.css';
import React, { useEffect, useState } from 'react';
import BotCollection from './BotCollection';

function App() {
  const [Bots, setBots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then(r => r.json())
      .then(data => {
        setBots(data)
      })
      .catch(()=>{
        if(Bots != []){
          return console.log("Success")
        } else {
        console.error("Failed to fetch bots")
        }
      }
      )
  }, []);

  return (
    <BotCollection bots={Bots}/>
  )
};

export default App;
