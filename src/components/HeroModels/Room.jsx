import React, { useMemo } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import * as THREE from 'three'

export function Room(props) {
  const group = React.useRef()
  const { nodes, materials, animations } = useGLTF('/models/optimized-room.glb')
  const { actions } = useAnimations(animations, group)

  // O material Rosa Neon (mantive igual)
  const pinkGlowMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color("#f4b4c2"),
      emissive: new THREE.Color("#ff0066"),
      emissiveIntensity: 4,
      toneMapped: false,
    })
  }, [])

  return (
      <group ref={group} {...props} dispose={null}>
        <group name="Sketchfab_Scene">
          <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
            <group name="07e8ba9162674e488df6dd56fc54b2e3fbx" rotation={[Math.PI / 2, 0, 0]} scale={0.04}>
              <group name="Object_2">
                <group name="RootNode">
                  <group name="Icosphere001" rotation={[-Math.PI / 2, 0, -2.734]} scale={100}>

                    {/* --- AJUSTE FINO DA QUANTIDADE DE ROSA --- */}

                    {/* 1. cor branca */}
                    <mesh
                        name="Icosphere001_Particle_2_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Icosphere001_Particle_2_0.geometry}
                        material={materials.Particle_2}
                    />

                    {/* 2. SÓ ESTE SERÁ ROSA */}
                    <mesh
                        name="Icosphere001_Particle_2_0_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Icosphere001_Particle_2_0_1.geometry}
                        material={pinkGlowMaterial}
                    />

                    {/* 3. branco */}
                    <mesh
                        name="Icosphere001_Particle_2_0_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Icosphere001_Particle_2_0_2.geometry}
                        material={materials.Particle_2}
                    />

                    {/* --- FIM DO GRUPO PARTICLE 2 --- */}


                    {/* resto branco*/}
                    <mesh name="Icosphere001_Particle_1_0" castShadow receiveShadow geometry={nodes.Icosphere001_Particle_1_0.geometry} material={materials.Particle_1} />
                    <mesh name="Icosphere001_Particle_1_0_1" castShadow receiveShadow geometry={nodes.Icosphere001_Particle_1_0_1.geometry} material={materials.Particle_1} />
                    <mesh name="Icosphere001_Particle_1_0_2" castShadow receiveShadow geometry={nodes.Icosphere001_Particle_1_0_2.geometry} material={materials.Particle_1} />

                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
  )
}

useGLTF.preload('/models/optimized-room.glb')