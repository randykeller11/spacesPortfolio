import { Spinning, Floating, StandardEnvironment } from "spacesvr";
import TransparentFloor from "../ideas/TransparentFloor";
import CloudySky from "../ideas/CloudySky";
import Office from "../components/Office";

export default function Starter() {
  return (
    <StandardEnvironment>
      <ambientLight />
      <CloudySky color="white" />
      <TransparentFloor opacity={0.7} />
      <Office scale={[0.4, 0.3, 0.5]} />
    </StandardEnvironment>
  );
}
