import React from 'react';

function YourBotArmy({ bots, setArmy }) {
    
    
    function dischargeButton(selected) {
             const stateUpdate = bots.filter((bot) => bot.id !== selected);
            setArmy(stateUpdate);

            fetch(`http://localhost:3000/bots/${selected}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          }
        })
        .then(r => {
            if(r.ok){
                return r.json();
            } else {
                console.error("Failed to delete bots")
            }
        })
    }


    return (
        <>
        <div className='army-container'>
            <p>Army</p>
            {bots.map(bot => (
                <div key={bot.id} className="bot-container">
                    <button onClick={()=>{dischargeButton(bot.id)}}>X</button>
                    <div className="bot-image">
                        <img src={bot.avatar_url} alt={bot.avatar_url} />
                    </div>
                    <div className="bot-info">
                        <h3>{bot.name}</h3>
                        <p>{bot.catchphrase}</p>
                        <p>Health: {bot.health} Damage: {bot.damage} Armor: {bot.armor}</p>
                    </div>
                </div>
            ))}
            </div>
        </>
    )
}

export default YourBotArmy;