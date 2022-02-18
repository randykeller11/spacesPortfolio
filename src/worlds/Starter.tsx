import { useEffect } from "react";
import { StandardEnvironment } from "spacesvr";
import Home from "../scenes/Home";
import Skills from "../scenes/Skills";
import Gallery from "../scenes/Gallery";

import useSceneStore from "../stores/sceneStore";

export default function Starter() {
  const sceneStore = useSceneStore();
  if (sceneStore.scene === 0) {
    return (
      <StandardEnvironment
        playerProps={{
          pos: [16, 0, -9], // initial position
          rot: -1, // initial rotation,
          speed: 3.2, // meters per second (~1.4 walking, ~2.2 jogging)
        }}
      >
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
  if (sceneStore.scene === 2) {
    return (
      <StandardEnvironment
        playerProps={{
          pos: [0, 0, 6], // initial position
        }}
      >
        <Gallery />
      </StandardEnvironment>
    );
  }
}
