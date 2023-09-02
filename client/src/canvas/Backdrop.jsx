import React, { useRef } from 'react'
import { easing } from 'maath'
import { useFrame } from '@react-three/fiber'
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';

const Backdrop = () => {
const shadows = useRef();

return (
    <AccumulativeShadows
    ref={shadows}
    temporal
    frames={69}
    alphaTest={0.9}
    scae={15}
    rotation={[Math.PI / 2, 0, 0]}
    position={[0, 0, -0.14]}
    >
    <RandomizedLight 
        amount={4}
        radius={4}
        intensity={1}
        ambient={.7}
        position={[6, 8, -10]}
    />
    <RandomizedLight 
        amount={4}
        radius={4}
        intensity={1.8}
        ambient={.8}
        position={[-5, 5, -11]}
    />
    </AccumulativeShadows>
)
}

export default Backdrop