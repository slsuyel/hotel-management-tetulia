import React from 'react';
import HotelHeader from './_components/HotelHeader';
import NavigationTabs from './_components/NavigationTabs';
import AboutSection from './_components/AboutSection';
import RoomsSection from './_components/RoomsSection';

const page = () => {
    return (
        <div className=' py-6 md:py-12 bg-gray-100'>
            <HotelHeader />
            <NavigationTabs />
            <AboutSection />
            <RoomsSection />
        </div>
    );
};

export default page;