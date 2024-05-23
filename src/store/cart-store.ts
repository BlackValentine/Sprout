import { create } from 'zustand';

interface ICartState {
  isOpen: boolean;
  setIsOpen: () => void;
}

export const useCartStore = create<ICartState>()((set) => ({
  isOpen: false,
  setIsOpen: () => set((state) => ({ ...state, isOpen: !state.isOpen })),
}));
