import {create} from 'zustand';

const useThemeStore = create((set) => ({
  theme: 'light',
  setTheme: (arg) => set(() => ({theme: arg})),
}));

export default useThemeStore;
