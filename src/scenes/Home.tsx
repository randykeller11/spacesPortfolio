import { Interactable, Text } from "spacesvr";
import CloudySky from "../ideas/CloudySky";
import Office from "../components/Office";
import Poster from "../components/Poster";
import useSceneStore from "../stores/sceneStore";

export default function Home() {
  const sceneStore = useSceneStore();
  return (
    <>
      <ambientLight />
      <CloudySky color="white" />
      <Office scale={[0.4, 0.35, 0.5]} position={[0, -0.6, 0]} />
      <Poster
        src="/images/githubPhoto.jpg"
        rotation={[0, Math.PI, 0]}
        scale={[0.3, 0.3, 0.3]}
        position={[15, 2, 3.71]}
      />
      <Poster
        src="/images/aboutMe2.png"
        rotation={[0, -Math.PI / 2, 0]}
        position={[20.34, 2.3, -9.85]}
        scale={[2, 1, 1]}
      />
      <Interactable
        onClick={() => {
          sceneStore.setScene(1);
        }}
      >
        <Text
          text="Click Me"
          position={[0, 1, 0]}
          color="black"
          vAlign="center" // vertical align relative to the y component
          hAlign="center"
          size={3}
        />
      </Interactable>
    </>
  );
}
