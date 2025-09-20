const EducationCard = ({ data }) => {
    return (
        <div className="w-3/4 lg:w-3/5 text-gray-500 shadow-lg p-6 flex flex-col justify-start">
            <h3 className="text-black text-base md:text-lg font-medium">{data.title}</h3>
            <h3 className="text-gray-800 text-sm md:text-base">{data.institute}</h3>
        </div>
    );
};

export default EducationCard;
