

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div>
            <div className="text-center w-[40%] mx-auto mb-5">
                <p className="text-yellow-700 mb-2">--- {heading} ---</p>
                <h3 className="text-4xl uppercase border-y-4 border-b-4 py-4">{subHeading}</h3>
            </div>
        </div>
    );
};

export default SectionTitle;