import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const Particles = ({ count = 150 }) => {
    const mesh = useRef()

    // Cria as posições iniciais das partículas apenas uma vez
    const particlesPosition = useMemo(() => {
        const positions = new Float32Array(count * 3)

        for (let i = 0; i < count; i++) {
            // X: Posição aleatória horizontal (-10 a 10)
            positions[i * 3] = (Math.random() - 0.5) * 20
            // Y: Posição aleatória vertical (0 a 10 - começa do alto)
            positions[i * 3 + 1] = Math.random() * 10
            // Z: Profundidade aleatória (-10 a 10)
            positions[i * 3 + 2] = (Math.random() - 0.5) * 10
        }

        return positions
    }, [count])

    // Animação quadro a quadro (loop)
    useFrame((state, delta) => {
        if (!mesh.current) return

        // Acessa as posições atuais
        const positions = mesh.current.geometry.attributes.position.array

        for (let i = 0; i < count; i++) {
            // O índice Y é sempre i * 3 + 1
            const yIndex = i * 3 + 1

            // Faz a partícula cair (diminui o Y)
            // Ajuste o 0.5 para mudar a velocidade da queda
            positions[yIndex] -= delta * 0.8

            // Se a partícula passar do chão (y < -3), joga ela lá pro teto de novo
            if (positions[yIndex] < -3) {
                positions[yIndex] = 7 // Reinicia altura
                // Opcional: Reinicia X e Z aleatoriamente para não parecer repetitivo
                positions[i * 3] = (Math.random() - 0.5) * 20
                positions[i * 3 + 2] = (Math.random() - 0.5) * 10
            }
        }

        // Avisa o Three.js que as posições mudaram e precisam ser redesenhadas
        mesh.current.geometry.attributes.position.needsUpdate = true
    })

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={particlesPosition}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.08} // Tamanho da bolinha
                color="#ffffff" // Cor branca
                transparent
                opacity={0.6} // Um pouco transparente
                sizeAttenuation={true} // Fica menor se estiver longe
                depthWrite={false}
            />
        </points>
    )
}

export default Particles