import { Interactable, Text } from "spacesvr";
import Office from "../components/Office";
import Poster from "../components/Poster";
import Galaxy from "../components/Galaxy";
import useSceneStore from "../stores/sceneStore";
import AvatarTyping from "../components/AvatarTyping";

export default function Home() {
  const sceneStore = useSceneStore();
  return (
    <>
      <ambientLight />
      <Office scale={[0.4, 0.35, 0.5]} position={[0, -1.2, 0]} />
      <Galaxy position={[6, 4.5, -3.5]} />
      <Poster
        src="/images/githubPhoto.jpg"
        rotation={[0, Math.PI, 0]}
        scale={[0.7, 1, 1]}
        position={[18.6, 1.7, -6.33]}
      />
      <Poster
        src="/images/aboutMe2.png"
        rotation={[0, -Math.PI / 2, 0]}
        position={[20.34, 1.75, -9.85]}
        scale={[2, 1, 1]}
      />
      <AvatarTyping />
      {/* <Interactable
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
      </Interactable> */}
    </>
  );
}
