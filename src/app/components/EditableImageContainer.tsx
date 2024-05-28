import EditableImage from '@/app/components/EditableImage';
import { FC } from 'react';

interface EditableImageContainerProps {
  title: string;
  description: string;
  imgSrc: string;
}

const EditableImageContainer: FC<EditableImageContainerProps> = ({
  title,
  description,
  imgSrc,
}) => {
  return (
    <div className='mx-auto my-5 h-120 sm:h-144 flex flex-col max-w-lg px-4'>
      <EditableImage imgSrc={imgSrc} />
      <div className='p-5 flex-1 flex flex-col overflow-hidden'>
        <p className='my-2 font-bold text-lg'>{title}</p>
        <div className='flex-1 overflow-y-auto'>
          <p className='text-gray-600'>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default EditableImageContainer;
