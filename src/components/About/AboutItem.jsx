/* eslint-disable react/prop-types */
const AboutItem = ({ image, icon, title, description}) => {
    return (
        <div className="p-6 transition duration-700 transform bg-white hover:scale-105 rounded-2xl hover:shadow-xl">
            {/* image  */}
            <div className="flex flex-grow overflow-hidden rounded-2xl">
                <img className="transition duration-700 transform hover:scale-125" src={image} alt={title} />
            </div>
            {/* other info  */}
            <div className="flex mt-6 space-x-3 ">
                {/* icon  */}
                <div>
                    <img src={icon} alt={title} className="w-36"/>
                </div>
                {/* description  */}
                <div className="flex flex-col space-y-3">
                    <h1 className="text-xl text-gray-800 poppins">{title}</h1>
                    <p className="text-sm text-gray-500 poppins">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default AboutItem
