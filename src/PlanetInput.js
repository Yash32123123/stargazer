import React, {useState} from 'react';

const PlanetInput = ({onPlanetSubmit}) =>{
    const [planetData, setPlanetData] = useState({
        name: '',
        type: 'terrestrial',
        size: 1,
        distance: 1
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setPlanetData((prev) => ({...prev, [name]: value}));
    
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onPlanetSubmit(planetData);
    };
    return (
        <form onSubmit={handleSubmit}>
            <h3>Add a Planet</h3>
            <label>
                Planet Name:
                <input type="text" name="name" value={planetData.name} onChange={handleChange} required />
            </label>
            <label>
                Planet Type:
                <select name="type" value={planetData.type} onChange={handleChange}>
                    <option value="Terrestrial">Terrestrial</option>
                    <option value="Gas Giant">Gas Giant</option>
                    <option value="Ice Giant">Ice Giant</option>
                </select>
            </label>
            <label>
                Size (in Earth Radii):
                <input type="number" name="size" value={planetData.size} onChange={handleChange} min="0.1" step="0.1" />
            </label>
            <label>
                Orbit Distance (arbitrary units):
                <input type="number" name="distance" value={planetData.distance} onChange={handleChange} min="0.1" step="0.1" />
            </label>
            <button type="submit">Add Planet</button>
        </form>
    );
};

export default PlanetInput;