import React, { useState } from 'react';
import pic from '/flower.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation,  Parallax} from 'swiper/modules';

function App() {

  const [next, setNext] = useState(false)

  return (
    <>
    {/* className="w-screen h-screen flex flex-col justify-center items-center bg-slate-700" */}
      <div className='py-50  bg-black'>
        <div className='w-[80%] mx-auto border border-red-500'>
          <div className='w-full h-[300px] bg-teal-700'></div>
        </div>


        <div className="w-[80%] mx-auto border border-red-500">
          <div className='flex item-center gap-3'>
             <button onClick={()=>setNext(true)} className='swiper-button-next py-2 px-4 bg-teal-700 text-white font-medium rounded-lg'>Next</button>
             <button onClick={()=>setNext(false)} className='swiper-button-prev py-2 px-4 bg-teal-700 text-white font-medium rounded-lg'>Prev</button>
          </div>
        </div>
        <div className={` ${next ? 'w-[100%] transition-all' : ''} w-[90%] ml-auto border border-red-500`}>
        <div className='w-full overflow-hidden pt-8'>
           <div className="flex justify-between items-center gap-[30px]">
          <Swiper
        rewind={true}
        slidesPerView={4.2}
        initialSlide={0}
        spaceBetween={30}
        // style={{
        //   'paddingLeft': '180px',
        // }}
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


      <div className='w-[80%] mx-auto border border-red-500'>
          <div className='w-full h-[300px] bg-blue-700'></div>
        </div>
 </div> 
    </>
  )
}

export default App


