import AboutItem from './AboutItem'

const AboutUs = () => {
    return (
        <div className="flex flex-col items-center max-w-screen-xl px-6 mx-auto my-12 mb-20 text-center" id='about'>
            <h1 className="pb-4 text-4xl poppins">Why you choose us</h1>
            <p className="text-sm text-gray-500 lg:w-2/4 poppins">Barton waited twenty always repair in within we do. AN delighted offending curiosity my is dashwoods at. Boy prosperous increasing surrounded.</p>

            {/* about us cards  */}
            <div className="grid grid-cols-1 gap-10 mt-8 md:grid-cols-2 lg:grid-cols-3">
                <AboutItem
                    description={"Keep your systems in sync with automated web hook bases notifications each tume link is paid and how we dream about our future."}
                    icon={"https://red-onion-restaurant-41dbe.web.app/assets/ICON/Group%20204.png"}
                    image={"https://red-onion-restaurant-41dbe.web.app/assets/Image/adult-blur-blurred-background-687824.png"}
                    title={"Fast Delivery"} />
                <AboutItem
                    description={"Keep your systems in sync with automated web hook bases notifications each tume link is paid and how we dream about our future."}
                    icon={"https://red-onion-restaurant-41dbe.web.app/assets/ICON/Group%20204.png"}
                    image={"https://red-onion-restaurant-41dbe.web.app/assets/Image/chef-cook-food-33614.png"}
                    title={"A Good Auto Responder"} />
                <AboutItem
                    description={"Keep your systems in sync with automated web hook bases notifications each tume link is paid and how we dream about our future."}
                    icon={"https://red-onion-restaurant-41dbe.web.app/assets/ICON/Group%20245.png"}
                    image={"https://red-onion-restaurant-41dbe.web.app/assets/Image/architecture-building-city-2047397.png"}
                    title={"Home Delivery"} />
            </div>
        </div>
    )
}

export default AboutUs
