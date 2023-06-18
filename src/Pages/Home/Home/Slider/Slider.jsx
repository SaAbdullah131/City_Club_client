import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import SliderItem from './SliderItem';

const Slider = () => {

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };
    return (
        <>
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <SliderItem
                        heading={'Explore The New Area of SportsmanShip'}
                        subHeading={"Unleash Your  Potentiality and Connect With the World"}
                        img={'https://img.freepik.com/free-vector/soccer-ball-grass-background_1284-8507.jpg?size=626&ext=jpg&ga=GA1.1.1302347427.1683146888&semt=ais'}
                    ></SliderItem>
                </SwiperSlide>
                <SwiperSlide>
                    <SliderItem
                        heading={'Explore The New Area of SportsmanShip'}
                        subHeading={"Unleash Your  Potentiality and Connect With the World"}
                        img={'https://img.freepik.com/free-vector/realistic-soccer-football-stadium-illustration_52683-60377.jpg?size=626&ext=jpg&ga=GA1.1.1302347427.1683146888&semt=sph'}
                    ></SliderItem>
                </SwiperSlide>
                <SwiperSlide>
                    <SliderItem
                        heading={'Be YourSelf Through Taken MasterClass'}
                        subHeading={"Unleash Your  Potentiality and Connect With the World"}
                        img={'https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg?size=626&ext=jpg&ga=GA1.1.1302347427.1683146888&semt=sph'}
                    ></SliderItem>
                </SwiperSlide>
                <SwiperSlide>
                    <SliderItem
                        heading={'Explore The New Area of SportsmanShip'}
                        subHeading={"Unleash Your  Potentiality and Connect With the World"}
                        img={'https://img.freepik.com/free-vector/green-cricket-sports-background-with-illustration-players-golden-trophy-cup_1302-5494.jpg?size=626&ext=jpg&ga=GA1.1.1302347427.1683146888&semt=sph'}
                    ></SliderItem>
                </SwiperSlide>
                <SwiperSlide>
                    <SliderItem
                        heading={'Explore The New Area of SportsmanShip'}
                        subHeading={"Unleash Your  Potentiality and Connect With the World"}
                        img={'https://img.freepik.com/free-vector/soccer-ball-grass-background_1284-8507.jpg?size=626&ext=jpg&ga=GA1.1.1302347427.1683146888&semt=ais'}
                    ></SliderItem>
                </SwiperSlide>
                <SwiperSlide>
                    <SliderItem
                        heading={'Unlock the World Wander Waited For You'}
                        subHeading={"Unleash Your  Potentiality and Connect With the World"}
                        img={'https://img.freepik.com/free-photo/soccer-players-action-professional-stadium_654080-1752.jpg?size=626&ext=jpg&ga=GA1.1.1302347427.1683146888&semt=sph'}
                    ></SliderItem>
                </SwiperSlide>
                <SwiperSlide>
                    <SliderItem
                        heading={'Explore The New Area of SportsmanShip'}
                        subHeading={"Unleash Your  Potentiality and Connect With the World"}
                        img={'https://img.freepik.com/free-photo/medium-shot-female-friends-playing-basketball_23-2150209903.jpg?size=626&ext=jpg&ga=GA1.2.1302347427.1683146888&semt=sph'}
                    ></SliderItem>
                </SwiperSlide>
               

                
            </Swiper>
        </>
    )
};

export default Slider;