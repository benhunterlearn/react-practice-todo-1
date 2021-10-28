import './App.css';
import {useEffect, useState} from "react";
import {TodoCreator} from "./TodoCreator";
import {Items} from "./Items";

function App() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/api/items")
            .then((response) => response.json())
            .then((items) => setItems(items));
    });

    return (
        <div className="App">
            Todoer

            <TodoCreator />

            <Items />

        </div>
    );
}

export default App;
