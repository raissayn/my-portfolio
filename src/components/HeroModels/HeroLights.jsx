import * as THREE from 'three'
import React from 'react'

{/* Luzes da cena 3D */}
const HeroLights = () => {
    return (
        <>
            <spotLight
                position={[2, 5, 6]}
                angle={0.15}
                intensity={100}
                penumbra={0.2} // CORRIGIDO (era penubra)
                color="white"
            />

            <primitive
                object={new THREE.RectAreaLight('#A259FF', 10, 2, 2)}
                position={[0, 0, 5]}
            />
        </>
    )
}

export default HeroLights