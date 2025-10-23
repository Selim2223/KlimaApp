import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Answers } from '@data/factors';

type State = {
  answers: Answers;
  setAnswer: <K extends keyof Answers>(key: K, value: Answers[K]) => void;
  reset: () => void;
};

const initial: Answers = {
  flightHours: 0,
  meatPerWeek: 0,
  fishPerWeek: 0,
  dieselKmPerYear: 0,
  heatingKgPerYear: 0,
};

export const useCalcStore = create<State>()(
  persist(
    (set) => ({
      answers: initial,
      setAnswer: (key, value) =>
        set((s) => ({ answers: { ...s.answers, [key]: value } })),
      reset: () => set({ answers: initial }),
    }),
    { name: 'calc-store' }
  )
);
