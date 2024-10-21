import React, { useState } from 'react';
import { useFrame } from '@react-three/fiber';

const StarSystem = ({ star, planets }) => {
    const [hoveredPlanet, setHoveredPlanet] = useState(null);

    const [angles, setAngles] = useState(planets.map(() => 0));

    useFrame((state) => {
        // Update angles for orbital motion
        setAngles((prevAngles) => 
            prevAngles.map((angle, index) => angle + (0.01 * (index + 1))) // Adjust speed based on index
        );
    });
    // Ensure that the star object is defined and has a color, or fall back to a default value
    const starColor = star?.color || "yellow"; // Fallback to 'yellow' if star or color is undefined

    return (
        <>
            {/* Render the star */}
            <mesh position={[0, 0, 0]}>
                <sphereGeometry args={[0.5, 32, 32]} />
                <meshStandardMaterial 
                    color={starColor} // Use fallback color
                    emissive={starColor} // Make the main star emissive
                    emissiveIntensity={1} // Adjust intensity as needed
                />
            </mesh>

            {/* Render each planet with hover effect */}
            {planets.map((planet, index) => (
                <mesh 
                    key={index} 
                    position={[planet.distance, 0, 0]} 
                    onPointerOver={() => setHoveredPlanet(index)} // Set hovered planet
                    onPointerOut={() => setHoveredPlanet(null)} // Reset hovered planet
                >
                    <sphereGeometry args={[planet.size * 0.1, 16, 16]} />
                    <meshStandardMaterial 
                        color={hoveredPlanet === index ? "orange" : "blue"} // Change color on hover
                    />
                </mesh>
            ))}
        </>
    );
};

export default StarSystem;
