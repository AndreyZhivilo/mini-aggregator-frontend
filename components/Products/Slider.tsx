import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Lazy } from 'swiper'
import VideoModal from './VideoModal'
import { IGallery } from '../../interfaces/apiResponce'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/lazy'

interface SliderProps {
  video: string | null
  gallery: IGallery
}

const Slider: React.FC<SliderProps> = ({ video, gallery }) => {
  return (
    <>
      <div className="w-full lg:h-auto rounded overflow-hidden md:w-1/2 xl:w-1/3 mb-3">
        <Swiper
          slidesPerView={1}
          modules={[Pagination, Lazy]}
          pagination={{ clickable: true }}
          preloadImages={false}
          lazy={true}
          className="card-slider aspect-[12/10]"
        >
          {video && (
            <SwiperSlide>
              <VideoModal video={video} />
            </SwiperSlide>
          )}
          {gallery.data.map((slide) => {
            return (
              <SwiperSlide key={slide.id}>
                <img
                  alt={slide.attributes.hash}
                  className="object-cover object-center w-full h-full swiper-lazy"
                  data-src={slide.attributes.url}
                />
                <div className="swiper-lazy-preloader"></div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </>
  )
}
export default Slider
