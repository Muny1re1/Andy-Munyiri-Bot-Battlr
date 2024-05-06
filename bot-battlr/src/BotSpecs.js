import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function BotSpecs({ bots, setArmy }) {
    const navigate = useNavigate();
    const bot = bots.find(bot => bot.id === bot.id);

    function enlist() {
        if (bot) {
            console.log(bot);
            setArmy(prevArmy => (prevArmy ? [...prevArmy, bot] : [bot]));
            navigate('/');
        } else {
            console.error("Bot not found.");
        }
    }

    if (!bot) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className='specs-container'>
                <div className="bot-specs">
                    <h2>{bot.name}</h2>
                    <h3>Bot Specs</h3>
                    <img src={bot.avatar_url} alt={bot.name} />
                    <p>Class: {bot.class}</p>
                    <p>Health: {bot.health}</p>
                    <p>Damage: {bot.damage}</p>
                    <p>Armor: {bot.armor}</p>
                </div>
                <Link to="/">
                    <button>Go back</button>
                </Link>
                <button onClick={enlist}>Enlist</button>
            </div>
        </>
    )
}

export default BotSpecs;