import React, {useState} from 'react';
import { div } from 'three/webgpu';

const ImageUpload = ({onImageUpload}) =>{
    const[selectedImage, setSelectedImage] = useState(null);


    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if(file){
            setSelectedImage(URL.createObjectURL(file));
            onImageUpload(file);

        
        }
    };

    return(
        <div>

            <input type = 'file' accept = "image/*" onChange = {handleImageChange} />
            {selectedImage && (
                <img src = {selectedImage} alt = "Uploaded" style={{width: '200px', marginTop: '10px'}} />
            )}

        </div>
    );
};

export default ImageUpload;