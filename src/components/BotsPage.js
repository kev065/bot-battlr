import {useState} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage({ botCollection, setBotCollection, setBotCollectionState }) {
    const [botBasket, setBotBasket] = useState([]);

    const addBotToBasket = (bot) => {
        const botInBasket = botBasket.find((item) => item.id === bot.id);
        if (!botInBasket) {
            setBotBasket([...botBasket, bot]);
        }
    };
    const removeBotFromBasket = (bot) => {
        const botInBasket = botBasket.find((item) => item.id === bot.id);
        if (botInBasket) {
            setBotBasket(
                botBasket.filter((filteredBot) => filteredBot.id !== bot.id)
            );
        }
    };
    function dischargeBot(bot) {
        setBotCollection(botCollection.filter((item) => item.id !== bot.id));
        removeBotFromBasket(bot)
        fetch(`http://localhost:3000/bots/${bot.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
        setBotCollectionState(true);

    }
    return (
        <div>
            <YourBotArmy
                botBasket={botBasket}
                removeBotFromBasket={removeBotFromBasket}
                dischargeBot={dischargeBot}
            />
            <BotCollection
                botCollection={botCollection}
                addBotToBasket={addBotToBasket}
                dischargeBot={dischargeBot}
            />
        </div>
    );
}

export default BotsPage;

