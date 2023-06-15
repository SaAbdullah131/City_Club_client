import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

const Banner = () => {
    
    return (
        <div className='flex'>
            <div className="w-1/2">
                <h2>Welcome To City Club Areana</h2>
            </div>
            <div className="w-1/2">
            <Swiper
                effect={"cube"}
                grabCursor={true}
                cubeEffect={{
                  shadow: true,
                  slideShadows: true,
                  shadowOffset: 20,
                  shadowScale: 0.94,
                }}
                pagination={true}
                modules={[EffectCube, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="https://img.freepik.com/free-photo/green-grass_1417-1636.jpg?size=626&ext=jpg&ga=GA1.1.1302347427.1683146888&semt=sph" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src=" https://img.freepik.com/free-photo/man-playing-padel_657883-308.jpg?size=626&ext=jpg&ga=GA1.1.1302347427.1683146888&semt=sph" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://img.freepik.com/free-photo/cricket-player-holding-leather-ball_53876-63344.jpg?size=626&ext=jpg&ga=GA1.1.1302347427.1683146888&semt=sph" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://img.freepik.com/free-photo/cricketer-field-action_53876-63345.jpg?size=626&ext=jpg&ga=GA1.1.1302347427.1683146888&semt=sph" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://img.freepik.com/free-photo/front-view-girls-running-track_23-2148268086.jpg?size=626&ext=jpg&ga=GA1.2.1302347427.1683146888&semt=sph" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg?size=626&ext=jpg&ga=GA1.2.1302347427.1683146888&semt=sph" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://img.freepik.com/free-photo/young-boy-as-soccer-football-player-sportwear-making-feint-kick-with-ball-goal-white_155003-27516.jpg?size=626&ext=jpg&ga=GA1.2.1302347427.1683146888&semt=sph" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://img.freepik.com/free-photo/man-playing-golf_1286-128.jpg?size=626&ext=jpg&ga=GA1.2.1302347427.1683146888&semt=sph" />
                </SwiperSlide>
                <SwiperSlide><img src="https://img.freepik.com/free-photo/running-track-with-grass-field-sunny-day_23-2148267963.jpg?size=626&ext=jpg&ga=GA1.1.1302347427.1683146888&semt=sph&ga=GA1.1.1302347427.1683146888&semt=sph" /></SwiperSlide>
            </Swiper>
            </div>
        </div>
    )
};

export default Banner;