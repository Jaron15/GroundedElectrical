import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper';

function ReviewSlider() {
    const reviews = [
        { text: 'Review 1', author: 'Author 1' },
        { text: 'Review 2', author: 'Author 2' },
        // ... more reviews
      ];
    
      return (
        <>
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
            className="mySwiper"
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="p-4 bg-white rounded shadow">
                  <p className="text-gray-600">{review.text}</p>
                  <p className="text-gray-800 font-semibold">{review.author}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      );
    }
    

export default ReviewSlider