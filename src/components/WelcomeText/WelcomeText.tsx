import { Text } from "@react-three/drei/core/Text";

export const WelcomeText = () => {
  return (
    <group position={[0, 0, 0]}>
      <Text fontSize={0.3}>
        Show me your hands!
        <meshNormalMaterial />
      </Text>
      <Text fontSize={0.2} position={[0, -0.5, 0]}>
        Orbit controls are ON!
        <meshNormalMaterial />
      </Text>
      <Text fontSize={0.15} position={[0, -1, 0]}>
        You might have to wait a couple of seconds for the camera to load
        <meshNormalMaterial />
      </Text>
    </group>
  );
};
