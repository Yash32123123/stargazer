import React, {useState} from 'react';

const StarInput = ({onStarSubmit}) => {
    const [starData, setStarData] = useState({
        name: '',
        type: 'Main Sequence',
        size: 1,
        brightness: 1
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setStarData((prev) => ({...prev, [name]: value}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onStarSubmit(starData);
    };
    return (
        <form onSubmit={handleSubmit}>
            <h3>Create a Star</h3>
            <label>
                Star Name:
                <input type="text" name="name" value={starData.name} onChange={handleChange} required />
            </label>
            <label>
                Star Type:
                <select name="type" value={starData.type} onChange={handleChange}>
                    <option value="Main Sequence">Main Sequence</option>
                    <option value="Red Dwarf">Red Dwarf</option>
                    <option value="Neutron Star">Neutron Star</option>
                    <option value="Supergiant">Supergiant</option>
                </select>
            </label>
            <label>
                Size (in Solar Radii):
                <input type="number" name="size" value={starData.size} onChange={handleChange} min="0.1" step="0.1" />
            </label>
            <label>
                Brightness (Luminosity):
                <input type="number" name="brightness" value={starData.brightness} onChange={handleChange} min="0.1" step="0.1" />
            </label>
            <button type="submit">Create Star</button>
        </form>
    );
};

export default StarInput;