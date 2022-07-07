import { Sphere } from "@react-three/drei";

type Props = {
  position: { x: number; y: number; z: number };
  handedness: "Left" | "Right";
};
const separationFactor = 25;
export const Dot = ({ position, handedness }: Props) => {
  return (
    <Sphere
      args={[0.12]}
      position={[
        position.x * -separationFactor,
        position.y * -separationFactor,
        position.z * separationFactor,
      ]}
    >
      <meshBasicMaterial
        color={handedness === "Left" ? "#ff00ff" : "#ffffff"}
      />
    </Sphere>
  );
};
