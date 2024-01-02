import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { IoIosStar } from 'react-icons/io';


function ReviewSlider() {
    const slides = [
        { text: 'I am thrilled with this electrical company. Impressed by their integrity and craftsmanship. Answered all questions and offered tailored options for our price range. Highly recommend for their outstanding service.', author: 'Uriah Cristiano' },
        { text: "Amazing service from Grounded Electric! Wyatt's 26 years of experience showed in his efficient and well-informed lighting installation. Appreciate the very reasonable pricing and feeling well taken care of.", author: 'Mindy Schwab' },
        { text: "I have had several electricians work on the house but none of them had this attention to detail and going above and beyond for the benefit of the client.", author: 'Rene Maldonado' },
        { text: 'We lost power to half of the house. We reached out and Wyatt responded promptly. He came out and was able to identify and fix the problem quickly. He was very nice and professional. Would definitely use him again.', author: 'Kolette Al-Jamal' },
        // { text: 'Very professional and does a great job! Friendly and quick.', author: 'Author 2' },
        { text: 'Exceptional. We have been struggling with flickering lights and the TV turning off when a near by door opens.. Grounded Electrical to the rescue. Great service, fair prices… if you need an electrician, look no further!!', author: 'Margaret Rockey' },
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
          <SwiperSlide key={index} className="!w-72 !h-72 bg-white rounded shadow-lg flex justify-center items-center text-black p-4 mb-2">
            <div className="flex flex-col justify-between h-full">
              <div className="text-center my-auto">
                <p>{slide.text.length > 200 ? `${slide.text.substring(0, 250)}` : slide.text}</p> {/* Truncate long text */}
              </div>
              <div className="flex flex-col items-center">
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <IoIosStar key={i} className="text-yellow-400" />
                  ))}
                </div>
                <p className="font-bold">{slide.author}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
          </Swiper>
        </div>
      );
    };

export default ReviewSlider