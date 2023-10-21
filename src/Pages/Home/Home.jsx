import Banner from './../Shared/Banner/Banner';
import AboutUs from './../Shared/AboutUs/AboutUs';
import Footer from './../Shared/Footer/Footer';
import NavBar from './../Shared/NavBar/NavBar';
import MapBrand from '../Shared/MapBrand/MapBrand';
import SubHeader from '../Shared/SubHeader/SubHeader';
import CountDown from '../Shared/CountDown/CountDown';



const Home = () => {

    return (
        <div>
            <SubHeader></SubHeader>
            <NavBar></NavBar>
            <Banner></Banner>
            <MapBrand></MapBrand>
            <CountDown></CountDown>
            <AboutUs></AboutUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;