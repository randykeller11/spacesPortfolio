import { Fragment } from "react";
import { Interactable } from "spacesvr";

// import CoolGallery from "../components/CoolGallery";
// import Galaxy from "../components/Galaxy";
import AvatarTyping from "../components/AvatarTyping";
import { useGLTF } from "@react-three/drei";
import LowPolyDesk from "../components/LowPolyDesk";
import Poster from "../components/Poster";
import Lobby from "../components/Lobby";

function DeskChair({ ...props }) {
  const { scene } = useGLTF("/deskChair.glb");
  return <primitive object={scene} {...props} />;
}

export default function Gallery() {
  return (
    <Fragment>
      {/* <Galaxy position={[0, 14, -9]} scale={[5, 2, 5]} /> */}
      <ambientLight />
      <AvatarTyping />
      <LowPolyDesk
        rotation={[0, Math.PI, 0]}
        scale={[0.4, 0.35, 0.35]}
        position={[-1, -0.1, -5.2]}
      />

      <Poster
        src="/images/aboutMe2.png"
        rotation={[0, Math.PI / 2, 0]}
        position={[-16.41, 2, 0.5]}
        scale={[2.5, 1.5, 1]}
      />
      <Poster
        src="/images/cavs.jpg"
        rotation={[0, Math.PI / 2, 0]}
        position={[-16.41, 2, -6.75]}
        scale={[2.25, 1.5, 1]}
      />
      <Interactable
        onClick={() =>
          window.location.assign("http://github.com/randykeller11")
        }
      >
        <Poster
          src="/images/github.png"
          rotation={[0, Math.PI / 2, 0]}
          position={[-16.41, 2, -20.1]}
          scale={[2.5, 1.5, 1]}
        />
      </Interactable>
      <Interactable
        onClick={() =>
          window.location.assign("http://www.linkedin.com/in/randykeller1193")
        }
      >
        <Poster
          src="/images/Linkedin.png"
          rotation={[0, Math.PI / 2, 0]}
          position={[-16.41, 2, -27.4]}
          scale={[2.25, 1.5, 1]}
        />
      </Interactable>
      <Interactable
        onClick={() => window.location.assign("http://www.groovejones.com")}
      >
        <Poster
          src="/images/grooveJones.png"
          rotation={[0, -Math.PI / 2, 0]}
          position={[17.55, 2, 0.75]}
          scale={[2.25, 1.5, 1]}
        />
      </Interactable>

      <Poster
        src="/images/intract.png"
        rotation={[0, -Math.PI / 2, 0]}
        position={[17.55, 2, -6.5]}
        scale={[2.25, 1.5, 1]}
      />

      <Poster
        src="/images/grooveJonesRes.png"
        rotation={[0, -Math.PI / 2, 0]}
        position={[17.55, 1.75, -18.7]}
        scale={[1.6, 1.5, 1]}
      />

      <Poster
        src="/images/intractRes.png"
        rotation={[0, -Math.PI / 2, 0]}
        position={[17.55, 1.75, -23.6]}
        scale={[1.6, 1.5, 1]}
      />
      <Poster
        src="/images/muse.png"
        rotation={[0, -Math.PI / 2, 0]}
        position={[17.55, 1.75, -28.5]}
        scale={[1.6, 1.5, 1]}
      />

      <DeskChair position={[-1, 0, -6]} rotation={[0, -Math.PI / 2, 0]} />
      <Lobby
        position={[0, -1, 0]}
        scale={[3, 2.5, 3]}
        rotation={[0, Math.PI / 2, 0]}
      />
    </Fragment>
  );
}
