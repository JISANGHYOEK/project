import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware';
import axios from "axios";

export const useStore = create(
  persist(
    (set, get) => ({
      isLogin: false,
      logIn: async (data) => {
        try {
          const response = await axios.post("/api/login", data, { withCredentials: true });
          if (response.status === 200) {
            set({ isLogin: true });
          }
        } catch (error) {
          console.error(error);
        }
      },
      logOut: async () => {
        try {
          const response = await axios.post("/api/logout", { withCredentials: true });
          if (response.status === 200) {
            set({ isLogin: false });
          }
        } catch (error) {
          console.error(error);
        }
      },
    }),
    {
      name: 'login-storage',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
)

export const adminStore = create((set) => ({
  isAdmin: false,
  setAdmin: (state) => set({isAdmin: state})
}))