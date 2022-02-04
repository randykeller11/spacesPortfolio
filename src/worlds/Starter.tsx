import { useEffect } from "react";
import { StandardEnvironment } from "spacesvr";
import Home from "../scenes/Home";
import Skills from "../scenes/Skills";
import useSceneStore from "../stores/sceneStore";

export default function Starter() {
  const sceneStore = useSceneStore();
  if (sceneStore.scene === 0) {
    return (
      <StandardEnvironment>
        <Home />
      </StandardEnvironment>
    );
  }
  if (sceneStore.scene === 1) {
    return (
      <StandardEnvironment>
        <Skills />
      </StandardEnvironment>
    );
  }
}
