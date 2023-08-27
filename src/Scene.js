/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: FFeller (https://sketchfab.com/FFeller)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/hand-for-vr-bee4147a048e41aeb70158f430178009
title: Hand for VR
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import handUrl from "./assets/hand_for_vr.glb";

export default function Hand(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF(handUrl);
  return (
    <group ref={group} {...props} dispose={null} scale={[0.1, 0.1, 0.1]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
            <primitive object={nodes._rootJoint} />
            <skinnedMesh
              geometry={nodes.Object_27.geometry}
              material={materials.skin}
              skeleton={nodes.Object_27.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(handUrl);