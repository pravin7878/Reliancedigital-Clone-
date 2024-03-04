import React, { useRef, useState } from 'react';
import { Image, Spacer } from '@chakra-ui/react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/bundle'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './slider.css'

let ImageSlider1 = [
  'https://www.reliancedigital.in/medias/Ajio-Coupon-Communication-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3wxMjMyMjl8aW1hZ2UvanBlZ3xpbWFnZXMvaDdlL2gzNy8xMDExNTYxMzE5NjMxOC5qcGd8MTYzOTAzOGFmN2Q0N2JiNGIxYTgzYThhZDcxMjU2OWE5MTAyN2UyZmJjYmRkN2MzZGM5NzhiNjllM2FmYTEyNg', 'https://www.reliancedigital.in/medias/Noise-SmartWatch-Grab-or-Gone-Deals-Banner-D-1-.jpg?context=bWFzdGVyfGltYWdlc3wxMTU1OTJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDYwL2g1Ni8xMDExNTYyNjkyNjExMC5qcGd8NDU4MjAxNWUzZjdjOWZlNDJhMTY5YTA2ODY3NGU4ZTlhMjlmZGI1ZjIxMmU0YTc0YzgxZTJkNmNhZDFiZTU0ZQ'
]

let ImageSlider2 = [
  'https://www.reliancedigital.in/medias/digital-Mobile-Days-March-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3wxMTMxMTV8aW1hZ2UvanBlZ3xpbWFnZXMvaDZhL2g3ZS8xMDExNTYxMjIxMzI3OC5qcGd8OWMyMTA0YTIyYTRmYzNlZjhjNDc2OTc5ZTBkZjcxNjRlYmMzOGMyYjIxYjk0YzhmNWU0OTdjNTMxMzhiZWYyMQ', 'https://www.reliancedigital.in/medias/Mobile-Accessories-Fiesta-Carousel-Banner-D-rev-1-1-.jpg?context=bWFzdGVyfGltYWdlc3wxMjU0NDZ8aW1hZ2UvanBlZ3xpbWFnZXMvaDUzL2hhNi8xMDExNTIzMDc2MDk5MC5qcGd8ZTE0ZTRjMjc2MzdiMDgyNTlhOGEzYzc5ZDJlMzgwYjFlZmU3ZmQwOTBjZGRiZGVhODIzZjE4NzRkMmJkNjQxMA', 'https://www.reliancedigital.in/medias/New-Launches-AC-Banner-D-rev-4.jpg?context=bWFzdGVyfGltYWdlc3wxMzU5NDF8aW1hZ2UvanBlZ3xpbWFnZXMvaDk5L2gxYy8xMDExNDY5OTg1Mzg1NC5qcGd8MWZjYmYwYmMyYzdkOTA3OWFhMzM3NDRjNDc2NTgxNjNmZDk3NWEyNzEzMTQwMTRiZmJlY2I2ZGEwM2UyOGE5ZQ', 'https://www.reliancedigital.in/medias/Smart-TV-Never-Before-Prices-Banner-D-2-.jpg?context=bWFzdGVyfGltYWdlc3wxNzg4NDV8aW1hZ2UvanBlZ3xpbWFnZXMvaGE2L2hiNy8xMDExNTYxNDk5ODU1OC5qcGd8OTI1NTM2MjUwZGNlZTMyZmNkNDE4YzI2YjAxYTZjZTQ4MzYzNGFlN2YyMDUzMWVmMDE3NGFiYmZmMmQ1NzMxNw', 'https://www.reliancedigital.in/medias/Summer-Ready-Sale-Banner-D-rev-1-1-.jpg?context=bWFzdGVyfGltYWdlc3wxNTA0NTd8aW1hZ2UvanBlZ3xpbWFnZXMvaGFkL2gwNy8xMDExNTIwNDI1MTY3OC5qcGd8MjIzZjExY2ZlNTQ1YmNkNzFjMzc0ZDkxMjhhNzljOTcwY2VkMTA1NzNkN2U4NTY1OWJhYTFkOTNiYjBjMTk0NA', 'https://www.reliancedigital.in/medias/JioAirFiber-1365-260-2-1-.jpg?context=bWFzdGVyfGltYWdlc3wzMDc4MDB8aW1hZ2UvanBlZ3xpbWFnZXMvaGIxL2gxNS8xMDExNDY4NjMyMDY3MC5qcGd8OThiMGExMjlhMWE0Yjc3ZDc5MzkxZTMyMmFkZWY3NGMzMjgzZDdhYTdiMDExMGY4ZTA5NjRkNGE5ZjM1OTk4ZA', 'https://www.reliancedigital.in/medias/Premium-Audio-Banner-1365x260px.jpg?context=bWFzdGVyfGltYWdlc3wxNTY5OTF8aW1hZ2UvanBlZ3xpbWFnZXMvaDVkL2g5NC8xMDExMjkyMzEwNzM1OC5qcGd8Zjc4N2YxMjBiNzM4MTE2MWM5MGU5OWEzNmMxZDkwYjY1ODM2NmFhODllOThjMmQyY2MxZTJjNzUwZDQ3OTI0Nw', 'https://www.reliancedigital.in/medias/Soundbar-Never-Before-Prices-Banner-D-2-.jpg?context=bWFzdGVyfGltYWdlc3wxMzE3Mzd8aW1hZ2UvanBlZ3xpbWFnZXMvaDBiL2g0ZC8xMDExNTYxNTEyOTYzMC5qcGd8ZDg1YTYwODkzYmMyMzZkMjRjOWM2OWFjOWM2NDQ2MTY2ZDA3MzgxY2EyYzhiY2E4MDRiNTg4ZDQxZDNjZWMwOQ'
]


// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

export default function MyCrausel({data, deleytime, slidesPerview}) {
  return (
    <>
      <Swiper
        slidesPerView={slidesPerview}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: deleytime }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {data?.map((image, ind) => {
          return <SwiperSlide key={ind}><Image src={image} /></SwiperSlide>
        })
        }
      </Swiper>
    </>
  );
}
