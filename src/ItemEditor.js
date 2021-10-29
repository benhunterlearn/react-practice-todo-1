import {useState} from "react";

export function ItemEditor(props) {
    const [text, setText] = useState(props.text)

    const updateText = (newText) => {
        setText(newText);
    }

    const handleSaveText = (event) => {
        event.preventDefault();
        props.saveText(text);
    }

    return (
        <form onSubmit={(event) => handleSaveText(event)}>
            <input type="text"
                   value={text}
                   onChange={(e) => updateText(e.target.value)}
            />
            <button type="submit">Save</button>
        </form>
    );
}