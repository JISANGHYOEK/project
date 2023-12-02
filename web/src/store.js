import { create } from "zustand";
import axios from "axios";

const useStore = create((set) => ({
  isLogin: false,
  logIn: async (data) => {
    try {
      const response = await axios.post("/api/login", data, {
        withCredentials: true,
      });
      if (response.status === 200) {
        set({ isLogin: true });
      }
    } catch (error) {
      console.error(error);
    }
  },
  logOut: async () => {
    try {
      const response = await axios.post("/api/logout");
      if (response.status === 200) {
        set({ isLogin: false });
      }
    } catch (error) {
      console.error(error);
    }
  },
}));

export default useStore;
