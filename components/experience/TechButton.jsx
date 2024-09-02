const TechButton = ({ tech, icon: Icon, color }) => (
    <div className="inline-flex items-center bg-gray-700 text-white rounded-full px-2 py-1 text-xs mr-1 mb-1 sm:px-3 sm:py-1 sm:text-sm sm:mr-2 sm:mb-2">
        <Icon style={{ color }} className="mr-1 text-xs sm:text-sm" />
        <span className="ml-1">{tech}</span>
    </div>
);

export default TechButton;