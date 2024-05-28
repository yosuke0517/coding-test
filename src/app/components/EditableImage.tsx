'use client';

import { useRef } from 'react';
import { Stage, Layer, Image as KonvaImage } from 'react-konva';
import useImage from 'use-image';

const EditableImage = () => {
    const [image] = useImage('https://konvajs.org/assets/lion.png');
    const imageRef = useRef(null);

    return (
        <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer>
                <KonvaImage
                    image={image}
                    x={50}
                    y={50}
                    width={500}
                    height={500}
                    ref={imageRef}
                />
            </Layer>
        </Stage>
    );
};

export default EditableImage;