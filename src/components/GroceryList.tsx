import { IoSend } from "react-icons/io5";
import { useItem } from "../stores/itemStore";
import { GroceryItem } from "./GroceryItem";
import { IconButton } from "./IconButton";

export function GroceryList() {
    const { items, toggleItem } = useItem();

    const handleAdd = () => {

    }

    return (
        <div>
            <div className="list">
                {items.map(i => <GroceryItem key={i.id} item={i} onToggle={() => toggleItem(i.id)} />)}
            </div>
            <div className="input-container">
                <input className="input-bar" type="text" id="add" placeholder="Add item..." />
                <IconButton onClick={handleAdd} IconComponent={IoSend} />
            </div>
        </div>
    )
}