import { defineStore, skipHydrate } from 'pinia';

export const useAuthStore = defineStore('auth', () => {
    // State
    const user = ref([]); // ref is used to make 'user' reactive
  
    // Getters
    const isAuthenticated = () => user.value.length > 0; // Example getter
  
    // Actions
    const setUser = (userData: any) => {
      user.value = userData;
    };
  
    const logout = () => {
      user.value = [];
    };
  
    return {
      user,
      isAuthenticated,
      setUser,
      logout,
    };
  });