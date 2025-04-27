
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';



type Settings = {
    siteName: string;
    favicon: string;
    logo: string;
    facebook: string;
    instagram: string;
    whatsapp: string;
    homeImg1: string;
    homeImg2: string;
    homeImg3: string;
    homeTxt1: string;
    homeTxt2: string;
    homeTxt3: string;
    description: string;
} | null;

type State = {
    settings: Settings;
    setSettings: (s: Settings) => void;
    loading: boolean;
}

export const useSettingsStore = create<State>()(
    persist(
        (set) => ({
            settings: null,
            setSettings: (s) => set({ settings: s }),
            loading: false,
        }),
        {
            name: 'settings-storage',
            storage: typeof window !== 'undefined' ? createJSONStorage(() => localStorage) : undefined
        }
    )
);