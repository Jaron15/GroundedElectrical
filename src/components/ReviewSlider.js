import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';


function ReviewSlider() {
    const slides = [
        { text: 'I have had several electricians work on the house but none of them had this attention to detail and going above and beyond for the benefit of the client. Wyatt was able to not only find the cause of the lights out he took steps to prevent it fro. Happening on other circuits', author: 'Author 1' },
        { text: 'We lost power to half of the house. We reached out and Wyatt responded promptly. He came out and was able to identify and fix the problem quickly. He was very nice and professional. Would definitely use him again.', author: 'Author 2' },
        { text: 'I am thrilled to share my exceptional experience with this electrical company. Their unwavering integrity, combined with craftsmanship that exceeded expectations, left us thoroughly impressed. They patiently answered all our questions and offered multiple options tailored to our project goals and budget. Highly recommend this company for their professionalism and outstanding service.', author: 'Author 2' },
        { text: 'Grounded Electric is amazing! Wyatt came out and installed my lighting around the house in a timely manner and informed me every step of the way. He has 26 years experience and it was obvious. I also like that the pricing is VERY reasonable. It&aposs always my worry that I will be “taken for a ride” but instead, I felt taken care of. Thank you!!!', author: 'Author 2' },
        { text: 'Very professional and does a great job! Friendly and quick.', author: 'Author 2' },
        { text: 'Exceptional. We have been struggling with flickering lights and the TV turning off when a near by door opens.. Grounded Electrical to the rescue. Great service, fair prices… if you need an electrician, look no further… 10 stars!!', author: 'Author 2' },
        // ... more reviews
      ];
    
    
      return (
        <div className="w-full  h-full flex justify-center items-center ">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="w-full max-w-6xl"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index} className="!w-72 !h-72 bg-white rounded shadow-lg flex justify-center items-center text-black">
            <div>
                <p>{slide.text}</p>
                <p>{slide.author}</p>
            </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      );
    };

export default ReviewSlider