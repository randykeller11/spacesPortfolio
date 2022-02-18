import create from "zustand";
interface storeState {
  scene: number;
  setScene: (newScene: number) => void;
}

let useSceneStore = create<storeState>((set) => ({
  scene: 2,

  setScene: (newScene: number) =>
    set((state) => ({
      scene: newScene,
    })),
}));

export default useSceneStore;
