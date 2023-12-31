import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ botBasket, removeBotFromBasket, dischargeBot }) {
    
    return (
        <div className="ui segment inverted olive bot-army">
            <div className="ui five column grid">
                <div className="row bot-army-row">
                    {
                        botBasket.map((bot) => {
                            return (
                                <BotCard
                                    key={`${bot.name}${bot.id}`}
                                    bot={bot}
                                    handleBots={removeBotFromBasket}
                                    dischargeBot={dischargeBot}
                                />
                            )
                        })
                    }
                    Your Bot Army
                </div>
            </div>
        </div>
    );
}

export default YourBotArmy;
