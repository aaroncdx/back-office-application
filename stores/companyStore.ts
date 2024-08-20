import { defineStore, skipHydrate } from 'pinia';

export const useCompanyStore = defineStore('auth', () => {
    // State
    const company = ref([]); // ref is used to make 'user' reactive
    const employee = ref([]);

    // Getters
    // const isAuthenticated = () => user.value.length > 0; // Example getter
  
    // Actions
    const setCompany = (companyData: any) => {
        company.value = companyData;
    };
  
    const clearCompany = () => {
        company.value = [];
    };

    const setEmployee = (employeeData: any) => {
        employee.value = employeeData;
    };
  
    const clearEmployee = () => {
        employee.value = [];
    };
  
    return {
      company,
      employee,
      setCompany,
      clearCompany,
      setEmployee,
      clearEmployee
    };
  });