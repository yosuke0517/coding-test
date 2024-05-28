import Image from "next/image";
import dynamic from 'next/dynamic';

const KonvaImageComponent = dynamic(() => import('../app/components/EditableImage'), { ssr: false });

export default function Home() {
  return (
      <>
          <KonvaImageComponent />
      </>
  );
}
