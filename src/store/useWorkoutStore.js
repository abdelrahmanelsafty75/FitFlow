import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useWorkoutStore = create(
  persist(
    (set) => ({

      exercises: [],
      logs: [], // exercises that user engaged with, with date and time

      setExercises: (data) => set({ exercises: data }),
      
      addLog: (log) => set((state) => ({ 
        logs: [...state.logs, { ...log, id: Date.now(), date: new Date().toISOString() }] 
      })),
    }),

    {
      name: 'fitflow-storage', // LocalStorage
    }
  )
);