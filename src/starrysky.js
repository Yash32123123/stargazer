import React from 'react';
import { useFrame } from '@react-three/fiber';

const StarryBackground = () => {
    const stars = Array.from({ length: 500 }).map(() => [
        (Math.random() - 0.5) * 50,  // x position
        (Math.random() - 0.5) * 50,  // y position
        (Math.random() - 0.5) * 50,  // z position
    ]);

    return (
        <>
            {stars.map((position, index) => (
                <mesh key={index} position={position}>
                    <sphereGeometry args={[0.05, 16, 16]} />
                    <meshStandardMaterial 
                    color="white" 
                    emissive={'white'}
                    emissiveIntensity={0.5}
                    />
                </mesh>
            ))}
        </>
    );
};

export default StarryBackground;