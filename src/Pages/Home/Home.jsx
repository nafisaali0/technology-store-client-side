import Banner from './../Shared/Banner/Banner';
import CategoryCard from './../Shared/CategoryCard/CategoryCard';
import AboutUs from './../Shared/AboutUs/AboutUs';
import Contact from './../Shared/Contact/Contact';
import Footer from './../Shared/Footer/Footer';
import NavBar from './../Shared/NavBar/NavBar';

const Home = () => {

    return (
        <div>
            <h1>Home</h1>
            <NavBar></NavBar>
            <Banner></Banner>
            <CategoryCard></CategoryCard>
            <AboutUs></AboutUs>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;