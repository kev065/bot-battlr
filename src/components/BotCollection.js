import React from "react";
import BotCard from "./BotCard";

function BotCollection({ botCollection, addBotToBasket, dischargeBot }) {
    return (
        <div className="ui four column grid">
            <div className="row">
                {botCollection.map((bot) => {
                    return (
                        <BotCard
                            key={bot.id}
                            bot={bot}
                            handleBots={addBotToBasket}
                            dischargeBot={dischargeBot}
                        />
                    );
                })}
                Collection of all bots
            </div>
        </div>
    );
}

export default BotCollection;
