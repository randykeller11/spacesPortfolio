import CoolGallery from "../components/CoolGallery";
import Galaxy from "../components/Galaxy";
import AvatarTyping from "../components/AvatarTyping";
import { useGLTF } from "@react-three/drei";
import LowPolyDesk from "../components/LowPolyDesk";
import Poster from "../components/Poster";

function DeskChair({ ...props }) {
  const { scene } = useGLTF("/deskChair.glb");
  return <primitive object={scene} {...props} />;
}

export default function Gallery() {
  return (
    <>
      <Galaxy position={[0, 14, -9]} scale={[5, 2, 5]} />
      <ambientLight />
      <AvatarTyping />
      <LowPolyDesk
        rotation={[0, Math.PI, 0]}
        scale={[0.4, 0.35, 0.35]}
        position={[-5.1, -0.1, -14.2]}
      />
      <Poster
        src="/images/aboutMe2.png"
        rotation={[0, Math.PI / 2, 0]}
        position={[-9.35, 1, -12.5]}
        scale={[2, 1, 1]}
      />
      <DeskChair position={[-5, 0, -15]} rotation={[0, -Math.PI / 2, 0]} />
      <CoolGallery position={[0, -1, 0]} />
    </>
  );
}
