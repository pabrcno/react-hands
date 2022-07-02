import { MeshReflectorMaterial, Sphere } from "@react-three/drei";

type Props = {
  position: { x: number; y: number; z: number };
  handedness: "Left" | "Right";
};
const separationFactor = 15;
export const Dot = ({ position, handedness }: Props) => {
  return (
    <Sphere
      args={[0.05]}
      position={[
        position.x * -separationFactor,
        position.y * -separationFactor,
        position.z * separationFactor,
      ]}
    >
      <MeshReflectorMaterial
        blur={[0, 0]} // Blur ground reflections (width, heigt), 0 skips blur
        mixBlur={0} // How much blur mixes with surface roughness (default = 1)
        mixStrength={0} // Strength of the reflections
        mixContrast={0.2} // Contrast of the reflections
        resolution={256} // Off-buffer resolution, lower=faster, higher=better quality, slower
        mirror={0} // Mirror environment, 0 = texture colors, 1 = pick up env colors
        depthScale={0} // Scale the depth factor (0 = no depth, default = 0)
        minDepthThreshold={0.9} // Lower edge for the depthTexture interpolation (default = 0)
        maxDepthThreshold={1} // Upper edge for the depthTexture interpolation (default = 0)
        depthToBlurRatioBias={0.25} // Adds a bias factor to the depthTexture before calculating the blur amount [blurFactor = blurTexture * (depthTexture + bias)]. It accepts values between 0 and 1, default is 0.25. An amount > 0 of bias makes sure that the blurTexture is not too sharp because of the multiplication with the depthTexture
        reflectorOffset={0.2} // Offsets the virtual camera that projects the reflection. Useful when the reflective surface is some distance from the object's origin (default = 0)
        color={handedness === "Left" ? "#ff00ff" : "#ffffff"} // Color of the reflection
      />
    </Sphere>
  );
};
