const Banner = () => {
    return (
        <section className="w-full header-banner h-[50vh] lg:h-[60vh] bg-yellow-50">
            <div className="flex flex-col items-center justify-center h-full">
                <h1 className="text-3xl font-semibold text-center text-gray-700 lg:w-1/3 md:text-2xl lg:text-5xl poppins">Craving a home-cooked 🍱 meal? We{"'"}ve got you covered!</h1>

                <div className="flex items-center p-1 mt-8">
                    <button className="px-6 py-3 text-lg text-white transition duration-300 transform rounded-full bg-primary poppins ring-red-300 focus:ring-4 hover:scale-105">Order Your Meal</button>
                </div>
            </div>
        </section>
    )
}

export default Banner
