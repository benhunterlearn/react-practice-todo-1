import React, {useState} from "react";

export function TodoCreator(props) {
    const [newTodoText, setNewTodoText] = useState("");

    const textInputRef = React.createRef();

    const handleChangeNewTodoText = (event) => {
        setNewTodoText(event.target.value);
    }

    const handleAddTodo = (e) => {
        e.preventDefault();
        if (newTodoText.length > 0) {
            props.handleAddTodo(newTodoText);
            setNewTodoText('');

            // either set the input text box 'value' to newTodoText or use the ref
            // textInputRef.current.value = '';
        }
    }

    return (<div>
        <h2>Todo Creator</h2>
        <form onSubmit={(e) => handleAddTodo(e)}>
            <input
                type="text"
                placeholder="New todo"
                onChange={(event) => handleChangeNewTodoText(event)}
                // ref={textInputRef}
                value={newTodoText}
            />
            <button type="submit"
                    // onClick={(e) => handleAddTodo(e)}  // form catches onSubmit
            >Add
            </button>
        </form>
    </div>);
}