import type { groceryItem } from "../types";

interface GroceryItemProps {
    item: groceryItem;
    onToggle: () => void;
}

export function GroceryItem({ item, onToggle }: GroceryItemProps) {

    return (
        <div className="list-item">
            <input
                type="checkbox"
                checked={item.checked}
                onChange={onToggle}
                className="circle-check"
            />
            <span className={item.checked ? "checked" : ""}>
                {item.name}
            </span>
        </div>
    )
}