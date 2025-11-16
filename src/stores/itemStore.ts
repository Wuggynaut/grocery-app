import { create } from 'zustand'
import type { groceryItem } from '../types';

type ItemState = {
    items: groceryItem[];
    addItem: (item: groceryItem) => void;
    deleteItem: (id: string) => void;
    toggleItem: (id: string) => void;
}

export const useItem = create<ItemState>((set) => ({
    items: [
        { id: '000', name: 'Banana', quantity: 5, checked: false },
        { id: '001', name: 'Bread', quantity: 1, checked: false },
        { id: '002', name: 'A little treat', quantity: 1, checked: false }
    ],
    addItem: (item) => set((state) => ({
        items: [...state.items, item]
    })),
    deleteItem: (id) => set((state) => ({
        items: state.items.filter(item => item.id !== id)
    })),
    toggleItem: (id) => set((state) => ({
        items: state.items.map(item =>
            item.id === id ? { ...item, checked: !item.checked } : item
        )
    }))
}))