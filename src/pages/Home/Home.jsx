import { Helmet } from "react-helmet-async";
import Banner from "./banner/Banner";
import Category from "./categroy/Category";
import Features from "./feature/Features";
import PopularMenu from "./popularMenu/PopularMenu";
import Testimonial from "./testimonial/Testimonial";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro | Home</title>
            </Helmet>
            <Banner />
            <Category />
            <PopularMenu />
            <Features />
            <Testimonial />
        </div>
    );
};

export default Home;