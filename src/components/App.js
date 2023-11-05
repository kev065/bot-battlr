import {useState, useEffect} from "react";
import BotsPage from "./BotsPage";

function App() {
    const [botCollection, setBotCollection] = useState([]);
    const [botCollectionState, setBotCollectionState] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        fetch("http://localhost:3000/bots", { signal: controller.signal })
            .then((res) => res.json())
            .then((bots) => {
                console.log(bots);
                setBotCollection(bots);
            })
            .catch((err) => {
                console.log(err.message);
            });
        return () => {
            controller.abort();
        };
    }, [botCollectionState]);

    return (
        <div className="App">
            <BotsPage
                botCollection={botCollection}
                setBotCollection={setBotCollection}
                setBotCollectionState={setBotCollectionState}
            />
        </div>
    );
}
export default App;
