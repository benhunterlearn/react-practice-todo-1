import {useState} from "react";
import {ItemEditor} from "./ItemEditor";

export function Item(props) {
    const [editing, setEditing] = useState(false);

    const handleEditItem = () => {
        setEditing(true);
    };

    const handleSaveItem = (newText) => {
        setEditing(false);
        props.updateItemText(props.id, newText);
    };

    const renderViewOrEditItem = () => {
        if (editing) {
            return (
                <ItemEditor text={props.text}
                            saveText={(newText) => handleSaveItem(newText)}
                />
            );
        } else {
            return (
                <>
                    <input
                        type='checkbox'
                        checked={props.completed}
                        onChange={() => props.toggleCompletedItem(props.id, props.completed)}
                    />
                    {props.completed ? <del>{props.text}</del> : props.text}
                    <button onClick={() => handleEditItem()}>Edit</button>
                    <button onClick={() => props.deleteItem(props.id)}>X</button>
                </>);
        }
    }

    return (
        <li>
            {renderViewOrEditItem()}
        </li>
    );
}