import { useEffect } from "react";
import { StandardEnvironment } from "spacesvr";

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
