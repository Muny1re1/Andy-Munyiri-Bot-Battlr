import React from 'react';

function YourBotArmy({ army, setArmy }) {

function removeFromArmy(){
    const updatedArmy = army.filter(bot => bot.id!== bot.id);
    setArmy(updatedArmy);
}

    function dischargeButton(selectedId) {
        const updatedArmy = army.filter(bot => bot.id !== selectedId);
        setArmy(updatedArmy);

        fetch(`http://localhost:3000/bots/${selectedId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        .then(r => {
            if (!r.ok) {
                console.error("Failed to delete bot");
            }
        });
    }

    return (
        <div className='army-container'>
            <p>Army</p>
            {army.map(bot => (
                <div key={bot.id} className="bot-container">
                    <button onClick={() => dischargeButton(bot.id)}>X</button>
                    <div className="bot-image" onClick={removeFromArmy}>
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
    );
}

export default YourBotArmy;