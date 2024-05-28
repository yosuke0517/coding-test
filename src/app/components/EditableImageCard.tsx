import EditableImage from "@/app/components/EditableImage";

interface xxCardProps {
    title: string;
    description: string;
    imgSrc: string;
}

const EditableImageCard: React.FC<xxCardProps> = ({ title, description, imgSrc }) => {
    return (
        <div className="max-w-lg mx-auto my-5 shadow-lg rounded-lg h-120 flex flex-col">
            <EditableImage imgSrc={imgSrc}/>
            <div className="p-5 flex-1 flex flex-col overflow-hidden">
                <p className="my-2 font-bold text-lg">{title}</p>
                <div className="flex-1 overflow-y-auto">
                    <p className="text-gray-600">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default EditableImageCard;