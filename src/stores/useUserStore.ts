
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export type User = {
    userName: string;
    email: string;
    city: string;
    phoneNumber: string;
    profileImage: string;
} | null;

type State = {
    user: User;
    setUser: (user: User) => void;
}

export const useUserStore = create<State>()(
    persist(
        (set) => ({
            user: null,
            setUser: (user) => set({ user })
        }),
        {
            name: 'user-storage',
            storage: createJSONStorage(() => localStorage)
        }
    )
);