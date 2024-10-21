import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import StarInput from './StarInput';
import PlanetInput from './PlanetInput';
import StarSystem from './StarSystem';
import StarryBackground from './starrysky';
import './styles/App.css';

function App() {
    const [star, setStar] = useState(null);
    const [planets, setPlanets] = useState([]);

    const handleStarSubmit = (starData) => {
        setStar(starData);
    };

    const handlePlanetSubmit = (planetData) => {
        setPlanets((prev) => [...prev, planetData]);
    };

    return (
        <div className="container">
            <h1>Create Your Star System</h1>
            
            {/* Star Input is shown when no star is set */}
            {!star && <StarInput onStarSubmit={handleStarSubmit} />}

            {star && (
                <div>
                    <h2>{star.name} Star System</h2>
                    <PlanetInput onPlanetSubmit={handlePlanetSubmit} />
                </div>
            )}

            {/* Always render Canvas */}
            <Canvas>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                
                {/* Conditionally render StarSystem, not the Canvas */}
                {star && <StarSystem star={star} planets={planets} />}

                <OrbitControls 
                    enableZoom={true}
                    enablePan={false}
                    maxPolarAngle={Math.PI / 2}
                />
                <StarryBackground />
            </Canvas>
        </div>
    );
}

export default App;
