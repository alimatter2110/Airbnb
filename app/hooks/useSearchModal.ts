"use client";
import { create } from "zustand";

interface searchModalStore {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}
const useSearchModal = create<searchModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useSearchModal;
