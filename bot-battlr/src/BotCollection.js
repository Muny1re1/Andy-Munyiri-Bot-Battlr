import React from 'react';
import { Link } from 'react-router-dom';
import YourBotArmy from './YourBotArmy.js';

function BotCollection({ bots, army, setArmy }) {

    function addToArmy(bot) {
        if (!army.some(existingBot => existingBot.bot_class === bot.bot_class)) {
            setArmy(prevArmy => [...prevArmy, bot]);
        } else {
            alert(`A bot of class ${bot.bot_class} is already in the army. Select a bot from another class.`);
        }
    }

    return (
        <>
        <YourBotArmy army={army} setArmy={setArmy} />
            <div className='bot-container'>
                <div className='bot-grid'>
                {bots.map(bot => (
                    <div key={bot.id} className='bot'>
                        <div className="bot-image" onClick={() => addToArmy(bot)}>
                            <img src={bot.avatar_url} alt={bot.avatar_url} />
                        </div>
                        <Link to={`/botSpecs/${bot.id}`}>
                            <div className="bot-info">
                                <h3>{bot.name}</h3>
                                <p>{bot.catchphrase}</p>
                                <p>Health: {bot.health} Damage: {bot.damage} Armor: {bot.armor}</p>
                            </div>
                        </Link>
                    </div>
                ))}
                {army.length === 0 && <p>You have no bots in your army</p>}
            </div>
            </div>
            
        </>
    );
}

export default BotCollection;