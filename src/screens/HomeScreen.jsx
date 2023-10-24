import AboutUs from '../components/About/AboutUs';
import Foods from '../components/Foods Showcase/Foods';
import Footer from '../components/Footer/Footer';
import Banner from '../components/Header/Banner';
import Pricing from '../components/Pricing/Pricing';

const HomeScreen = () => {
    return (
        <>
            <Banner />
            <Foods />
            <Pricing />
            <AboutUs />
            <Footer />
        </>
    )
}

export default HomeScreen
