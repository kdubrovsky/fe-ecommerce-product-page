import { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/thumbs';

import css from "./ProductGallery.module.scss";

export default function ProductGallery({ galleryData }) {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const swiperSlides = galleryData.map(image => (
        <SwiperSlide
            className={css.slide}
            key={image.id}>
            <img src={image.src} alt={image.alt} />
        </SwiperSlide>
    ));

    const swiperThumbnails = galleryData.map(image => (
        <SwiperSlide
            className={css.thumbnail}
            key={image.id}>
            <img src={image.thumb} alt={image.alt + " Thumbnail"} />
        </SwiperSlide>
    ));

    return (
        <div className={css.gallery}>
            <Swiper
                modules={[Thumbs]}
                thumbs={{ swiper: thumbsSwiper }}
                spaceBetween={50}
                slidesPerView={1}
                className={css.slides}
            >
                {swiperSlides}
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                watchSlidesProgress={true}
                slidesPerView='auto'
                modules={[Thumbs]}
                className={css.thumbnails}
            >
                {swiperThumbnails}
            </Swiper>
        </div >
    )
}