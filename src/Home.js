import React from 'react';
import "./Home.css";
import Product from "./Product";


function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <img  className= "home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=" " />

                <div className ="home__row">
                    <Product id= "12321341" title='The lean starup' price= {29.99} image = 'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
                    rating= {3}/>
                    <Product 
                    id = '49538094'
                    title= 'Kenwoog Kmix STand Mixer for Baking, Stylish Kitchen Mixer with k-beater'
                    price={239.0}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/51ylYty4qjL._AC_UL320_.jpg"
                    />
                </div>

                <div className ="home__row">
                    <Product 
                    id = '69282094'
                    title= 'Lenovo Flex 5 14" 2-in-1 Laptop, 14.0" FHD (1920 x 1080) Touch Display, AMD Ryzen 5 4500U Processor, 16GB DDR4, 256GB SSD, AMD Radeon Graphics'
                    price={595.0}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/81x+9uFY1QL._AC_UY218_.jpg"   
                    />
                    <Product 
                    id = '32182094'
                    title= 'PATPET Dog Training Collar- w/3 Training Modes, Beep, Vibration , Up to 1000 ft Remote Range.'
                    price={23.79}
                    rating={2}
                    image="https://images-na.ssl-images-amazon.com/images/I/71Ed3IKAAIL._AC_SL1500_.jpg"   
                    
                    />
                    <Product
                    id = '21830982'
                    title= 'Alcohol Ink Set - 24 Vibrant Colors Alcohol-based Ink for Resin Petri Dish Making, Epoxy Resin Painting.'
                    price={21.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81qqqXcyroL._AC_SL1500_.jpg" 
                    
                    />

                    
                </div>

                <div className ="home__row">
                    <Product 
                    id = '81833982'
                    title= 'Samsung Electronics UN32N5300AFXZA 32" 1080p Smart LED TV (2018), Black'
                    price={239.0}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/91UsHjAPTlL._AC_UY218_.jpg" 
                    
                    />
                    
                </div>

            </div>      
        </div>
    )
}

export default Home
