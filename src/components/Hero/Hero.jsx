import React, {useState, useRef,useEffect} from 'react';
import "./Hero.css";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux"
import { HiHeart } from "react-icons/hi";
import { getRemedy } from "../../actions/PostAction";

const Hero = () => {
  const dispatch = useDispatch();
  const ailment = useRef();
  const navigate = useNavigate();
  const { remedy, loading } = useSelector((state) => state.postReducer);  

  useEffect(() => {
    // Check if the remedy data has arrived
    if ((remedy.length === 0 || remedy === null) && !loading) {
      // Data has not arrived yet, you can show a message or do nothing
      return
    }
  }, [remedy, loading]);

  const handleSubmit = async (e) => {
      e.preventDefault();
      const userAilment = ailment.current.value.toLowerCase()
      dispatch(getRemedy(userAilment));
      navigate('/remedy');
  }

  return (
    <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">
            {/* left side */}
            <div className="flexColStart hero-left">
                <div className="hero-title">
                    <h1>Heal <br /> 
                    the Natural <br/> Way</h1>
                </div>
                <div className="flexColStart herodesc">
                    <span className="secondaryText">
                    Please describe your ailment in as few words as possible.
                    </span>
                    <span className="secondaryText">
                    For Example ('fever', 'sinus infection', 'gout')
                    </span>
                </div>
                <div className="flexCenter search-bar ">
                  <HiHeart color="var(--darkGreen)" size={25} />
                  <input type="text"
                    required
                    ref={ailment}
                  />
                  <button className="button" onClick={handleSubmit}>Search</button>
                </div>
            </div>
            {/* right side */}
            <div className="flexCenter hero-right">
                <div className="image-container">
                    <img src="./earth.png" alt="" />
                </div>
            </div>
        </div>
    </section>
  );
};

export default Hero;
