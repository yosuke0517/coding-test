'use client';

import { useRef, useEffect, useState, FC } from 'react';
import { Stage, Layer, Image as KonvaImage, Transformer } from 'react-konva';
import useImage from 'use-image';
import Konva from 'konva';

const IMAGE_WIDTH = 150;
const IMAGE_HEIGHT = 150;
const INITIAL_STAGE_WIDTH = 400;
const INITIAL_STAGE_HEIGHT = 300;

interface EditableImageProps {
  imgSrc: string;
}

const EditableImage: FC<EditableImageProps> = ({ imgSrc }) => {
  const [image] = useImage(imgSrc);
  const imageRef = useRef<any>(null);
  const transformerRef = useRef<any>(null);
  const stageRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [imageWidth, setImageWidth] = useState(IMAGE_WIDTH);
  const [imageHeight, setImageHeight] = useState(IMAGE_HEIGHT);
  const [stageSize, setStageSize] = useState({
    width: INITIAL_STAGE_WIDTH,
    height: INITIAL_STAGE_HEIGHT,
  });

  useEffect(() => {
    const updateTransformer = () => {
      const transformer = transformerRef.current;
      if (transformer && imageRef.current) {
        transformer.nodes([imageRef.current]);
      }
    };

    const handleResize = () => {
      if (containerRef.current) {
        const width = containerRef.current.clientWidth;
        const height = containerRef.current.clientHeight;
        setStageSize({ width, height });
      }
    };

    // 初回レンダリング時および依存するステートやプロパティが変化したときの処理
    if (image) {
      updateTransformer();
    }
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [image, imageWidth, imageHeight]);

  /**
   * マウスオーバー時にカーソルのスタイルを変更します。
   * @param {Konva.KonvaEventObject<MouseEvent>} e - マウスイベントオブジェクト。
   * NOTE: 設定で解消するかもしれないがざっと調べてわからなかったので関数でスタイルを変更している
   */
  const handleMouseOver = (e: Konva.KonvaEventObject<MouseEvent>) => {
    const stage = e.target.getStage();
    if (stage) {
      stage.container().style.cursor = 'pointer';
    }
  };

  /**
   * マウスアウト時にカーソルのスタイルをデフォルトに戻します。
   * @param {Konva.KonvaEventObject<MouseEvent>} e - マウスイベントオブジェクト。
   * NOTE: 設定で解消するかもしれないがざっと調べてわからなかったので関数でスタイルを変更している
   */
  const handleMouseOut = (e: Konva.KonvaEventObject<MouseEvent>) => {
    const stage = e.target.getStage();
    if (stage) {
      stage.container().style.cursor = 'default';
    }
  };

  return (
    <div ref={containerRef} className='flex justify-center items-center bg-slate-300 w-full'>
      <Stage width={stageSize.width} height={stageSize.height} ref={stageRef}>
        <Layer>
          <KonvaImage
            image={image}
            x={50}
            y={50}
            ref={imageRef}
            draggable
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
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
