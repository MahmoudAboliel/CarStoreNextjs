
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type Settings = {
    siteName: string;
    favicon: string;
    logo: string;
    facebookUrl: string;
    instagramUrl: string;
    whatsappNumber: string;
    homeImage1: string;
    homeImage2: string;
    homeImage3: string;
    homeText1: string;
    homeText2: string;
    homeText3: string;
    description: string;
} | null;

type State = {
    settings: Settings;
    setSettings: (s: Settings) => void;
}

export const useSettingsStore = create<State>()(
    persist(
        (set) => ({
            settings: null,
            setSettings: (s) => set({ settings: s })
        }),
        {
            name: 'settings-storage',
            storage: createJSONStorage(() => localStorage)
        }
    )
);