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
      <Poster
        src="/images/githubLogo.png"
        rotation={[0, Math.PI / 2, 0]}
        position={[-16.4, 4.2, -23]}
        scale={[0.35, 0.35, 1]}
      />
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
      <Poster
        src="/images/linkedinLogo.jpeg"
        rotation={[0, Math.PI / 2, 0]}
        position={[-16.4, 4.2, -30]}
        scale={[0.35, 0.35, 1]}
      />
      <Poster
        src="/images/click.png"
        rotation={[0, Math.PI / 2, 0]}
        position={[-16.4, -0.5, -24]}
        scale={[1, 0.35, 1]}
      />
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
        src="/images/react.png"
        rotation={[0, -Math.PI / 2, 0]}
        position={[17.55, 3.85, -23.5]}
        scale={[1.15, 0.55, 1]}
      />

      <Poster
        src="/images/yarn.jpeg"
        rotation={[0, -Math.PI / 2, 0]}
        position={[17.55, 1.9, -23.5]}
        scale={[1.15, 0.55, 1]}
      />
      <Poster
        src="/images/typescript.png"
        rotation={[0, -Math.PI / 2, 0]}
        position={[17.55, 3.85, -18]}
        scale={[1, 0.5, 1]}
      />
      <Poster
        src="/images/nextjs.png"
        rotation={[0, -Math.PI / 2, 0]}
        position={[17.55, 2, -18]}
        scale={[1, 0.5, 1]}
      />
      <Poster
        src="/images/redux.png"
        rotation={[0, -Math.PI / 2, 0]}
        position={[17.55, 0, -18]}
        scale={[1, 0.5, 1]}
      />
      <Poster
        src="/images/material.png"
        rotation={[0, -Math.PI / 2, 0]}
        position={[17.55, 0, -29.25]}
        scale={[1, 0.5, 1]}
      />
      <Poster
        src="/images/three.png"
        rotation={[0, -Math.PI / 2, 0]}
        position={[17.55, 3.9, -29.25]}
        scale={[1, 0.5, 1]}
      />
      <Poster
        src="/images/figma.png"
        rotation={[0, -Math.PI / 2, 0]}
        position={[17.55, 2, -29.25]}
        scale={[1, 0.5, 1]}
      />
      <Poster
        src="/images/gitstuff.png"
        rotation={[0, -Math.PI / 2, 0]}
        position={[17.55, 0, -23.5]}
        scale={[1.18, 0.5, 1]}
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
