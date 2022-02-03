import { Image, Floating, StandardEnvironment } from "spacesvr";
import TransparentFloor from "../ideas/TransparentFloor";
import CloudySky from "../ideas/CloudySky";
import Office from "../components/Office";
import Poster from "../components/Poster";

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
        position={[20.34, 3.05, -9.8]}
        scale={[2, 0.8, 1]}
      />
    </StandardEnvironment>
  );
}
