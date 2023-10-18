import Banner from './../Shared/Banner/Banner';
// import CategoryCard from './../Shared/CategoryCard/CategoryCard';
import AboutUs from './../Shared/AboutUs/AboutUs';
import Contact from './../Shared/Contact/Contact';
import Footer from './../Shared/Footer/Footer';
import NavBar from './../Shared/NavBar/NavBar';

const Home = () => {

    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Contact></Contact>  
            <Footer></Footer>          
            {/* 
            <CategoryCard></CategoryCard>          
             */}
        </div>
    );
};

export default Home;