
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export type User = {
    id: string;
    fullName: string;
    email: string;
    city: string;
    phoneNumber: string;
    profileImage: string;
    
} | null;

type State = {
    user: User
    setUser: (user: User) => void
    removeUser: () => void
}

export const useUserStore = create<State>()(
    persist(
        (set) => ({
            user: null,
            setUser: (user) => set({ user }),
            removeUser: () => set( { user: null })
        }),
        {
            name: 'User-Store',
            storage: typeof window !== 'undefined' ? createJSONStorage(() => localStorage) : undefined,
            skipHydration: true,
        }
    )
);