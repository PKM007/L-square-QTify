import React, { useEffect } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import styles from './Carousel.module.css';

// 1. Reset Swiper to slide 0 when data changes
const Controls = ({ data }) => {
  const swiper = useSwiper();
  useEffect(() => {
    swiper.slideTo(0, 1000);
  }, [data, swiper]);
  return null;
};

// 2. Left Navigation Arrow Sub-Component
const CarouselLeftNavigation = () => {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = React.useState(swiper.isBeginning);

  useEffect(() => {
    swiper.on('slideChange', () => {
      setIsBeginning(swiper.isBeginning);
    });
  }, [swiper]);

  return (
    <div className={styles.leftNavigation}>
      {!isBeginning && (
        <button onClick={() => swiper.slidePrev()} aria-label="Previous Slide">
          ❮
        </button>
      )}
    </div>
  );
};

// 3. Right Navigation Arrow Sub-Component
const CarouselRightNavigation = () => {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = React.useState(swiper.isEnd);

  useEffect(() => {
    swiper.on('slideChange', () => {
      setIsEnd(swiper.isEnd);
    });
  }, [swiper]);

  return (
    <div className={styles.rightNavigation}>
      {!isEnd && (
        <button onClick={() => swiper.slideNext()} aria-label="Next Slide">
          ❯
        </button>
      )}
    </div>
  );
};

// 4. Main Carousel Component
function Carousel({ data, renderComponent }) {
  return (
    <div className={styles.wrapper}>
      <Swiper
        style={{ padding: '0px 20px' }}
        initialSlide={0}
        modules={[Navigation]}
        slidesPerView={'auto'}
        spaceBetween={40}
        allowTouchMove
      >
        <Controls data={data} />
        <CarouselLeftNavigation />
        <CarouselRightNavigation />
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            {renderComponent(item)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;