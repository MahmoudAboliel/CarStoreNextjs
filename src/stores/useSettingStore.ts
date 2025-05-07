
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { SettingsApiResponse } from "@/lib/Dto"

type State = {
    settings: SettingsApiResponse['data'] | null;
    setSettings: (s: SettingsApiResponse['data']) => void;
    loading: boolean;
    setLoading: (st: boolean) => void;
}

export const useSettingsStore = create<State>()(
    persist(
        (set) => ({
            settings: null,
            setSettings: (s) => set({ settings: s, loading: false }),
            loading: false,
            setLoading: (st) => set({ loading: st })
        }),
        {
            name: 'settings-storage',
            storage: typeof window !== 'undefined' ? createJSONStorage(() => localStorage) : undefined,
            skipHydration: true,
        }
    )
);