import { useItem } from "../stores/itemStore";
import { GroceryItem } from "./GroceryItem";

export function GroceryList() {
    const { items, toggleItem } = useItem();

    return (
        <div>
            <div className="list">
                {items.map(i => <GroceryItem key={i.id} item={i} onToggle={() => toggleItem(i.id)} />)}
            </div>
            <div className="input-container">
                <input className="input-bar" type="text" id="add" placeholder="Add item..." />
            </div>
        </div>
    )
}