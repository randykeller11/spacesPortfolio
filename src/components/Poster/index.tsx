import { useEffect, useMemo } from "react";
import * as THREE from "three";
import { GroupProps, useLoader } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
export type PosterProps = {
  src: string;
} & GroupProps;

export default function Poster(props: PosterProps) {
  const { src, ...rest } = props;
  const texture = useTexture(src);

  return (
    <group {...rest}>
      <mesh>
        <planeBufferGeometry attach="geometry" args={[3, 3]} />
        <meshBasicMaterial attach="material" map={texture} />
      </mesh>
    </group>
  );
}
