import { Suspense } from "react";
import { StandardEnvironment } from "spacesvr";
import TransparentFloor from "../ideas/TransparentFloor";
import CloudySky from "../ideas/CloudySky";
import Office from "../components/Office";
import Poster from "../components/Poster";
import AvatarTyping from "../components/AvatarTyping";

export default function Starter() {
  return (
    <StandardEnvironment>
      <ambientLight />
      <CloudySky color="white" />
      <TransparentFloor opacity={0.7} />
      <Office scale={[0.4, 0.3, 0.5]} />
      <Poster
        src="/images/aboutMe2.png"
        rotation={[0, -Math.PI / 2, 0]}
        position={[20.34, 2.3, -9.85]}
        scale={[2, 1, 1]}
      />
      <AvatarTyping />
    </StandardEnvironment>
  );
}
