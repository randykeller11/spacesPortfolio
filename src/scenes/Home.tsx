import { Interactable, Text, usePlayer } from "spacesvr";
import { useFrame } from "@react-three/fiber";
import Office from "../components/Office";
import Poster from "../components/Poster";
import Galaxy from "../components/Galaxy";
import useSceneStore from "../stores/sceneStore";
import AvatarTyping from "../components/AvatarTyping";
import LowPolyDesk from "../components/LowPolyDesk";
import { useGLTF } from "@react-three/drei";

function DeskChair({ ...props }) {
  const { scene } = useGLTF("/deskChair.glb");
  return <primitive object={scene} {...props} />;
}

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
        position={[20.34, 2.2, -9.85]}
        scale={[2, 1, 1]}
      />
      <AvatarTyping />
      <LowPolyDesk
        position={[18.35, -0.2, -12]}
        rotation={[0, Math.PI, 0]}
        scale={[0.4, 0.4, 0.4]}
      />
      <DeskChair
        position={[18.45, -0.2, -12.7]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.8, 0.8, 0.8]}
      />
      <Interactable
        onClick={() => {
          sceneStore.setScene(1);
        }}
      >
        <Text
          text="Click Me"
          position={[3, 1, -3]}
          color="black"
          vAlign="center" // vertical align relative to the y component
          hAlign="center"
          size={3}
        />
      </Interactable>
    </>
  );
}
