import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useWorkoutStore = create(
  persist(
    (set) => ({

      exercises: [],
      logs: [], 

      setExercises: (data) => set({ exercises: data }),
      
      addLog: (log) => set((state) => ({ 
        logs: [...state.logs, { ...log, id: Date.now(), date: new Date().toISOString() }] 
      })),

      deleteLog: (id) => set((state) => ({
        logs: state.logs.filter((log) => log.id !== id)
      })),

    }),

    {
      name: 'fitflow-storage', // LocalStorage
    }
  )
);