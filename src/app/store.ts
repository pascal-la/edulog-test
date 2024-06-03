import { create } from "zustand";

interface AuthStore {
  tokenName: string;
  isLoggedIn: boolean;
  login: (token: string) => void;
  logout: () => void;
}

const TOKEN_NAME = "edulog_token";

const getToken =
  typeof window !== "undefined" && !!localStorage.getItem(TOKEN_NAME);

const useAuthStore = create<AuthStore>((set) => ({
  tokenName: TOKEN_NAME,
  isLoggedIn: getToken,
  login: (token) => {
    set({ isLoggedIn: true });
    localStorage.setItem(TOKEN_NAME, token);
  },
  logout: () => {
    set({ isLoggedIn: false });
    localStorage.removeItem(TOKEN_NAME);
  },
}));

export default useAuthStore;

export const tokenName = useAuthStore.getState().tokenName;
