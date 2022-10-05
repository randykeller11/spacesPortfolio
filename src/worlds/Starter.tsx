import { useEffect } from "react";
import { StandardEnvironment } from "spacesvr";
import Home from "../scenes/Home";
import Skills from "../scenes/Skills";
import Gallery from "../scenes/Gallery";

import useSceneStore from "../stores/sceneStore";

export default function Starter() {
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
