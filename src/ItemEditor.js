import {useState} from "react";

export function ItemEditor(props) {
    const [text, setText] = useState(props.text)

    const updateText = (newText) => {
        setText(newText);
    }

    return (
        <>
            <input type="text"
                   value={text}
                   onChange={(e) => updateText(e.target.value)}
            />
            <button onClick={() => props.saveText(text)}>Save</button>
        </>
    );
}