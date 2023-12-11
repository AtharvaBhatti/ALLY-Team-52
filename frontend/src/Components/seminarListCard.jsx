import React,{useState} from 'react';
import ScrollDialog from './seminarDetailsPopup';
const SeminarListItem = ({ title, description, date, imageUrl }) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleClick = () => {
        setIsDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setIsDialogOpen(false);
    };


    return (
        <div className="max-w-xs rounded overflow-hidden shadow-lg mx-3 my-3">
            <img className="w-full" src={imageUrl} alt={title} />

            <div className="px-6 py-2">
                <div className="font-bold  text-xl ">{title}</div>
                <div className="text-gray-700 text-sm">{description}</div>
                <div className="text-gray-600 text-sm mt-2">&#8226; {date}</div>
            </div>

            <div className="px-6 py-4">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={handleClick}
                >
                    Know More
                </button>
            </div>
            {isDialogOpen && (
                <ScrollDialog onClose={handleCloseDialog} seminarDetails={{ title, description, date }} />
            )}

        </div>
    );
};

export default SeminarListItem;
