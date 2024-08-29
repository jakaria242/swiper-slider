import React from 'react';
import pic from '/flower.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation,  Parallax} from 'swiper/modules';

function App() {

  return (
    <>
      <div className="min-w-screen min-h-screen flex flex-col justify-center items-center bg-slate-700">
        <div className="w-[1440px] mx-auto">
          <div className='flex item-center gap-3'>
             <button className='swiper-button-next py-2 px-4 bg-teal-700 text-white font-medium rounded-lg'>Next</button>
             <button className='swiper-button-prev py-2 px-4 bg-teal-700 text-white font-medium rounded-lg'>Prev</button>
          </div>
        </div>
           <div className='w-full pt-8'>
           <div className="flex justify-between items-center gap-[30px]">
          <Swiper
        rewind={true}
        slidesPerView={4.2}
        initialSlide={0}
        spaceBetween={30}
        style={{
          'paddingLeft': '200px',
        }}
        loop={true}
        // centeredSlides={false}
        grabCursor={true}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }}
        modules={[Navigation, Pagination, Parallax]}
        className="mySwiper"
      >
        {
          [0,1,2,3,4,5,6].map((item, index)=>(
            <SwiperSlide key={index} className="h-[450px] w-[380px] overflow-hidden ">
            <img src={pic} alt="Not Found" className="h-full w-full object-cover" />
          </SwiperSlide>
          ))
        }
          </Swiper>
        </div>
      </div>
 </div> 
    </>
  )
}

export default App
