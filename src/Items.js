import {Item} from "./Item";

export function Items(props) {
    return (
        <ul>
            {props.itemList.map((item) => {
                return (<Item key={item.id}
                              id={item.id}
                              text={item.content}
                              completed={item.completed}
                              toggleCompletedItem={props.toggleCompletedItem}
                              deleteItem={props.deleteItem}
                              updateItemText={props.updateItemText}
                />);
            })}
        </ul>
    );
}