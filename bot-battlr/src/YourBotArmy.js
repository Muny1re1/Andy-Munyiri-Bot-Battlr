import React from 'react';

function YourBotArmy(bot) {

    return (
        <>
        {bots.map(bot => (
                <div key={bot.id} className="bot-container">
                    <div className="bot-image">
                        <img onClick={() => handleImageClick(bot)} src={bot.avatar_url} alt={bot.avatar_url} />
                    </div>
                    <div className="bot-info">
                        <h3>{bot.name}</h3>
                        <p>{bot.catchphrase}</p>
                        <p>Health: {bot.health} Damage: {bot.damage} Armor: {bot.armor}</p>
                    </div>
                </div>
            ))}
        </>
    )
}

export default YourBotArmy;