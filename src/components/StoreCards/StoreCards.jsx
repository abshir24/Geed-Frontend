import React from "react";
import { StoreData } from "../../utils/StoreData";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "./StoreCards.css";
import { sliderSettings } from "../../utils/common";
import ReactStars from "react-rating-stars-component"

const StoreCards = () => {
  return (
    <div id="trending" className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="flexColStart r-head">
        <h2 style={{color: 'var(--darkGreen)'}}>Find Herbs: </h2>
        </div>
        <Swiper {...sliderSettings}>
          <SlideNextButton />
          {/* slider */}
          {StoreData.map((store, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart r-card">
                <img src='./herb.png' alt="home" />
                <div>
                  <div className="name">
                      <span>{store.storename}</span>
                      <div>
                      <ReactStars
                        count={store.rating}
                        size={18}
                        activeColor="#ffd700"
                        color= "#ffd700"
                      />
                      ({store.totalratings})
                      </div>
                      <span>{store.storehours}</span>
                      <span>{store.location}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default StoreCards;

const SlideNextButton = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()} className="r-prevButton">
        &lt;
      </button>
      <button onClick={() => swiper.slideNext()} className="r-nextButton">
        &gt;
      </button>
    </div>
  );
};
