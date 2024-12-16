"use client";
export interface User {
    id: number;
    name: string;
    email: string;
    age: number;
  }
  
 export const generateMockData = (): User[] => {
  return Array.from({ length: 1000 }, (_, i) => ({
    id: i + 1,
    name: `Usuario ${i + 1}`,
    email: `usuario${i + 1}@example.com`,
    age: Math.floor(Math.random() * 60) + 18, // Edad entre 18 y 78
  }));
};

  