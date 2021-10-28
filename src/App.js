import './App.css';
import {useEffect, useState} from "react";
import {TodoCreator} from "./TodoCreator";
import {Items} from "./Items";

function App() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        loadItems();
    }, []);

    function loadItems() {
        // Update items in state to display the new item
        fetch("http://localhost:3001/api/items")
            .then((response) => response.json())
            .then((items) => setItems(items));
    }

    const addTodo = (newTodoText) => {
        fetch("http://localhost:3001/api/items", {
            method: "POST",
            body: JSON.stringify({content: newTodoText}),
            headers: {
                'Content-Type': 'application/json',
            }
        })
            // Update items in state to display the new item
            .then((response) => loadItems());
    }

    const toggleCompletedItem = (itemId, itemCompleted) => {
        // POST to update item
        // update state of that item
        fetch("http://localhost:3001/api/items/" + itemId.toString(), {
            method: "PATCH",
            body: JSON.stringify({completed: !itemCompleted}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => loadItems());
    }

    const deleteItem = (itemId) => {
        // Send DELETE request to back end.
        fetch("http://localhost:3001/api/items/" + itemId.toString(), {
            method: "DELETE",
        })
            .then(response => loadItems());
    };

    const updateItemText = (itemId, itemText) => {
        // Send PATCH to back end with the updated itemText.
        fetch("http://localhost:3001/api/items/" + itemId.toString(), {
            method: "PATCH",
            body: JSON.stringify({content: itemText}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => loadItems());
    };

    return (
        <div className="App">
            <h1>Todoer</h1>
            <TodoCreator handleAddTodo={(newTodoText) => addTodo(newTodoText)}/>
            <Items
                itemList={items}
                toggleCompletedItem={(itemId, itemCompleted) => toggleCompletedItem(itemId, itemCompleted)}
                deleteItem={(itemId) => deleteItem(itemId)}
                updateItemText={(itemId, itemText) => updateItemText(itemId, itemText)}
            />
        </div>
    );
}

export default App;