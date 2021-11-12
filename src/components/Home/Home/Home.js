import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import FeaturedCameras from '../FeaturedCamera/FeaturedCamera';
import HomeAccessories from '../HomeAccessories/HomeAccessories';
// import Article from '../Article/Article';
// // import Article from '../Article/Article';
// import Banner from '../Banner/Banner';
// import FeaturedSpots from '../FeaturedSpots/FeaturedSpots';
// import Guides from '../Guides/Guides';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <FeaturedCameras></FeaturedCameras>
            <HomeAccessories></HomeAccessories>
            <Footer></Footer>
            {/* <Banner></Banner>
            <FeaturedSpots></FeaturedSpots>
            <Article></Article>
            <Guides></Guides> */}
        </div>
    );
};

export default Home;