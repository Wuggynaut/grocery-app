import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import type { groceryItem } from "../types";
import { IconButton } from './IconButton';
import { IoMdTrash } from 'react-icons/io';

interface GroceryItemProps {
    item: groceryItem;
    onToggle: () => void;
    onDelete: (id: string) => void;
}

export function GroceryItem({ item, onToggle, onDelete }: GroceryItemProps) {

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({ id: item.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.5 : 1,
    };

    return (
        <div ref={setNodeRef}
            style={style}
            className="list-item"
            {...attributes}
            {...listeners}
        >
            <input
                type="checkbox"
                checked={item.checked}
                onChange={onToggle}
                className="circle-check"
            />
            <span className={item.checked ? "checked" : ""}>
                {item.name}
            </span>
            <IconButton onClick={() => onDelete} IconComponent={IoMdTrash} className='alert right' />
        </div >
    )
}