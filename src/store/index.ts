import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface AppState {
  // Add your state types here
}

interface AppActions {
  // Add your action types here
}

const useStore = create<AppState & AppActions>(
  devtools(
    persist(
      (set) => ({
        // Initial state and actions
      }),
      {
        name: 'app-storage',
      }
    )
  )
);

export default useStore;
