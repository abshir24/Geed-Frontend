import React, { useRef, useState, useEffect } from "react";
import "./RemedySearch.scss";
import { useSelector, useDispatch } from "react-redux";
import { getRemedy, getAllHerbs } from "../../actions/PostAction";
import RemedyCard from "../RemedyCard/RemedyCard";
import { PostsData } from "../../utils/PostsData";
import StoreCards from "../StoreCards/StoreCards";
import { useNavigate } from 'react-router-dom';
import { HiHeart } from "react-icons/hi";
import GridLoader from "react-spinners/GridLoader";

function RemedySearch() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ailment = useRef();
  const { remedy, loading, error} = useSelector((state) => state.postReducer);  


  const handleSubmit = async (e) => {
    e.preventDefault();
    const userAilment = ailment.current.value;
    dispatch(getRemedy(userAilment))
  }

  if(loading){
    return (
      <div className = "loading-icon">
          <GridLoader
            color={ "var(--darkGreen)" }
            loading={loading}
            size={40}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          <h2 className="primaryColor"> Fetching remedies...</h2>
      </div>
    ) 
  }
  if(error){
      return (
        <div className="gigs">
          <div className="container">
            <span className="breadcrumbs">Daawo</span>
            <h1>Search Results</h1>
            <p>
              Please describe your ailment in as few words as possible. For Example ('fever', 'sinus infection', 'gout')
            </p>
            <div className="flexCenter gig-search-bar ">
              <HiHeart color="var(--darkGreen)" size={25} />
              <input
                type="text"
                required
                ref = {ailment}
              />
              <button className="button" onClick={handleSubmit}>Search</button>
            </div>
            <div>
              <h1 className="greenText">No results found. Try searching for a different ailment.</h1>
            </div>
          </div>
        </div>
      ) 
  }

  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">Daawo</span>
        <h1>Search Results</h1>
        <p>
          Please describe your ailment in as few words as possible. For Example ('fever', 'sinus infection', 'gout')
        </p>
        <div className="flexCenter gig-search-bar ">
          <HiHeart color="var(--darkGreen)" size={25} />
          <input
            type="text"
            required
            ref = {ailment}
          />
          <button className="button search-button" onClick={handleSubmit}>Search</button>
        </div>
        <div className="cards">
          {
            remedy.map((remedy, i) => (
              <RemedyCard key={i} item={remedy} />
            ))
          }     
        </div>
      </div>
    </div>
  );
}

export default RemedySearch;
