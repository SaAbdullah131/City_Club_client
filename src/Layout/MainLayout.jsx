import React from 'react';
import Banner from '../Pages/Home/Banner/Banner';
import PopularSession from '../Pages/Home/PopularSession/PopularSession';
import PopularCoaches from '../Pages/Home/PopularCoaches/PopularCoaches';
import FamousStudent from '../Pages/Home/FamousStudent/FamousStudent';

const MainLayout = () => {
    
    return (
        <div className='mt-5 mb-5'>
            <Banner></Banner>
            <PopularSession></PopularSession>
            <PopularCoaches></PopularCoaches>
            <FamousStudent></FamousStudent>
        </div>
    );
};

export default MainLayout;