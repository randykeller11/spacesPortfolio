import { usePlayer } from "spacesvr";
import CloudySky from "../ideas/CloudySky";
import Office from "../components/Office";
import Poster from "../components/Poster";
export default function Starter() {
  return (
    <>
      <ambientLight />
      <CloudySky color="white" />
      <Office scale={[0.4, 0.35, 0.5]} position={[0, -0.6, 0]} />
      <Poster
        src="/images/githubPhoto.jpg"
        rotation={[0, Math.PI, 0]}
        scale={[0.75, 1, 1]}
        position={[15, 2, 3.71]}
      />
      <Poster
        src="/images/aboutMe2.png"
        rotation={[0, -Math.PI / 2, 0]}
        position={[20.34, 2.3, -9.85]}
        scale={[2, 1, 1]}
      />
    </>
  );
}
