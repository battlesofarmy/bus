import { create } from "zustand";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  User,
  onAuthStateChanged,
} from "firebase/auth";
import auth from "@/lib/fireBase.Config"; // Make sure this path is correct

// Define Auth State Type
type AuthState = {
  user: User | null;
  loading: boolean;
  signUp: (email: string, password: string) => Promise<void>;
  signInUser: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  initAuth: () => () => void; // Correct type for cleanup
  setUser: (user: User | null) => void; // Add this
};

// Zustand Store
const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: true,

  // Initialize Firebase Auth Listener
  initAuth: () => {

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      set({
        user: currentUser || null,
        loading: false,
      });
      console.log("User updated:", currentUser);
    });

    return unsubscribe; // Cleanup function
  },

  setUser: (user) => set({ user }),

  // Sign Up
  signUp: async (email, password) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    localStorage.setItem("user", JSON.stringify(user));
    set({ user });
  },

  // Sign In
  signInUser: async (email, password) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    localStorage.setItem("user", JSON.stringify(user));
    set({ user });
  },

  // Logout
  logout: async () => {
    await signOut(auth);
    localStorage.removeItem("user");
    set({ user: null });
  },
}));

export default useAuthStore;