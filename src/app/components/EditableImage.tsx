'use client';

import { useRef, useEffect, useState } from 'react';
import { Stage, Layer, Image as KonvaImage, Transformer } from 'react-konva';
import useImage from 'use-image';

const IMAGE_WIDTH = 150;
const IMAGE_HEIGHT = 150;

interface EditableImageProps {
    imgSrc: string;
}

const EditableImage: React.FC<EditableImageProps> = ({ imgSrc }) => {
    const [image] = useImage(imgSrc);
    const imageRef = useRef<any>(null);
    const transformerRef = useRef<any>(null);
    const stageRef = useRef<any>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [imageWidth, setImageWidth] = useState(IMAGE_WIDTH);
    const [imageHeight, setImageHeight] = useState(IMAGE_HEIGHT);
    const [stageSize, setStageSize] = useState({ width: 400, height: 300 });

    useEffect(() => {
        const updateImageSize = () => {
            if (image && imageRef.current) {
                const img = imageRef.current;
                img.width(imageWidth);
                img.height(imageHeight);
                // レイヤーを再描画
                // NOTE: これをしないと画像が変更が反映されない
                img.getLayer().batchDraw();
            }
        };

        const updateTransformer = () => {
            const transformer = transformerRef.current;
            const stage = stageRef.current;
            if (transformer && stage) {
                transformer.nodes([imageRef.current]);
                // トランスフォーマーの位置を調整（今回の場合はアンカー表示の調整）
                transformer.getLayer().batchDraw();
            }
        };

        const handleResize = () => {
            if (containerRef.current) {
                const width = containerRef.current.clientWidth;
                const height = containerRef.current.clientHeight;
                setStageSize({ width, height });
            }
        };

        // 初回レンダリング時と依存するステートやプロパティが変化したときの処理
        updateImageSize();
        updateTransformer();
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [image, imageWidth, imageHeight]);

    return (
        <div ref={containerRef} className="flex justify-center items-center bg-slate-300 w-full rounded-t-lg">
            <Stage width={stageSize.width} height={stageSize.height} ref={stageRef}>
                <Layer>
                    <KonvaImage
                        image={image}
                        x={50}
                        y={50}
                        ref={imageRef}
                        draggable
                    />
                    <Transformer
                        ref={transformerRef}
                        enabledAnchors={['top-left', 'top-right', 'bottom-left', 'bottom-right']}
                        rotateEnabled={false}
                    />
                </Layer>
            </Stage>
        </div>
    );
};

export default EditableImage;