import React, { useRef, useState } from 'react';
import { Box, Image, Spacer, Text, SimpleGrid } from '@chakra-ui/react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link as Routerlink } from 'react-router-dom';
// Import Swiper styles
import 'swiper/css/bundle'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../Home-page/slider.css'


// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

export default function MySlider({ data }) {
    return (<>
        <Box
            m={10}
            h={'200px'}
        >
            <Text m={5} fontSize={"xl"}>Top Deals on Electronics</Text>

            {/* <SimpleGrid columns={[1, 1, 2, 3]} spacing={"40px"} w={'95%'} m={'auto'} > */}

            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{ delay: 5000 }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
                h={'200px'}
                m={10}
            >


                {data?.map((item) => {
                    if (item.category
                        == 'electronics') {

                        return (
                            <SwiperSlide key={item.id} h={'auto'}>
                                <Routerlink to={`/product/${item.id}`}>
                                    <Image src={item?.image} w={"50%"} h={'100px'} p={'50px'} />
                                </Routerlink>
                            </SwiperSlide >

                        )
                    }
                })}


            </Swiper>

            {/* </SimpleGrid> */}
        </Box>

    </>)
}
