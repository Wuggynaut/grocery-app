import { IoSend } from "react-icons/io5";
import { useItem } from "../stores/itemStore";
import { GroceryItem } from "./GroceryItem";
import { IconButton } from "./IconButton";
import { useState } from "react";
import type { groceryItem } from "../types";
import {
    DndContext,
    KeyboardSensor,
    PointerSensor,
    closestCenter,
    useSensor,
    useSensors,
    type DragEndEvent
} from "@dnd-kit/core";
import { SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from "@dnd-kit/sortable";

export function GroceryList() {
    const [itemName, setItemName] = useState('');
    const { items, toggleItem, addItem, deleteItem, reorderItems } = useItem();

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                delay: 150,
                tolerance: 5
            }
        }),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    function handleDragEnd(event: DragEndEvent) {
        const { active, over } = event;

        if (over && active.id !== over.id) {
            const oldIndex = items.findIndex((item) => item.id === active.id);
            const newIndex = items.findIndex((item) => item.id === over.id);

            reorderItems(oldIndex, newIndex);
        }
    }

    const handleAdd = (event: React.FormEvent) => {
        event.preventDefault();
        if (!itemName.trim()) {
            return;
        }

        const item: groceryItem = {
            id: crypto.randomUUID(),
            name: itemName,
            quantity: 1,
            checked: false
        }
        addItem(item);
        setItemName('');
    };

    const handleDelete = (id: string) => {
        deleteItem(id);
    }

    return (
        <div>
            <div className="list">
                <DndContext
                    sensors={sensors}
                    collisionDetection={closestCenter}
                    onDragEnd={handleDragEnd}
                >
                    <SortableContext items={items} strategy={verticalListSortingStrategy}>
                        {items.map(i =>
                            <GroceryItem
                                key={i.id}
                                item={i}
                                onToggle={() => toggleItem(i.id)}
                                onDelete={() => handleDelete(i.id)}
                            />
                        )}
                    </SortableContext>
                </DndContext>
            </div>
            <form onSubmit={handleAdd}>
                <div className="input-container">
                    <input
                        className="input-bar"
                        type="text"
                        id="add"
                        placeholder="Add item..."
                        onChange={event => setItemName(event.target.value)}
                        value={itemName}
                    />
                    <IconButton type="submit" IconComponent={IoSend} />
                </div>
            </form>
        </div>
    )
}