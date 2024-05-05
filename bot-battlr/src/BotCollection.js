import React, { useState } from 'react';
import YourBotArmy from './YourBotArmy';
function BotCollection({ bots }) {
    const [army, setArmy] = useState([]);

    function displayYourArmy(bot) {
        setArmy(army.concat(bot));
    }
    console.log(army);

    return (
        <>
        <div className='army-container'>
            <h1>Your Army.</h1>
            < YourBotArmy bots={army}/>
        </div>
            <div className='bot-container'>
                {bots.map((bot) =>
                    <div key={bot.id}>
                        <div className="bot-image">
                            <img onClick={() => displayYourArmy(bot)} src={bot.avatar_url} alt={bot.avatar_url} />
                        </div>
                        <div className="bot-info">
                            <h3>{bot.name}</h3>
                            <p>{bot.catchphrase}</p>
                            <p>Health:{bot.health} Damage:{bot.damage} Armor:{bot.armor}</p>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
};

export default BotCollection;