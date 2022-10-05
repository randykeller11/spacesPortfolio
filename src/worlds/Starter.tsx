import { useEffect } from "react";
import { StandardEnvironment, HDRI } from "spacesvr";
import { Stats } from "@react-three/drei";

import Gallery from "../scenes/Gallery";

import useSceneStore from "../stores/sceneStore";

export default function Starter() {
  return (
    <StandardEnvironment
      dev={true}
      playerProps={{
        pos: [0, 0, 6], // initial position
      }}
    >
      <Stats />
      <HDRI
        src="/images/beach.hdr"
        disableBackground={false} // used to disable visual hdr (skybox)
        disableEnvironment={false} // used to disable environment map
      />
      <Gallery />
    </StandardEnvironment>
  );
}
