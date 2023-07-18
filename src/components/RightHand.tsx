import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
type HandPositions = {
  [key: string]: THREE.Vector3;
};
type RightHandProps = JSX.IntrinsicElements["group"] & {
  handPositions?: HandPositions;
};

type GLTFResult = GLTF & {
  nodes: {
    Object_5: THREE.SkinnedMesh;
    Bone: THREE.Bone;
    Bone001: THREE.Bone;
    Bone015: THREE.Bone;
  };
  materials: {
    ["Material_46.002"]: THREE.MeshStandardMaterial;
  };
};
export const RightHand = ({ handPositions, ...props }: RightHandProps) => {
  const { nodes, materials } = useGLTF("/hand_right.glb") as GLTFResult;
  const skeleton = nodes.Object_5.skeleton;

  if (handPositions) {
    skeleton.bones.forEach((bone) => {
      if (handPositions[bone.name]) {
        bone.position.copy(handPositions[bone.name]);
      }
    });
  }

  return (
    <group {...props} dispose={null}>
      <group>
        <skinnedMesh
          geometry={nodes.Object_5.geometry}
          material={materials["Material_46.002"]}
          skeleton={nodes.Object_5.skeleton}
        />
      </group>
    </group>
  );
};
