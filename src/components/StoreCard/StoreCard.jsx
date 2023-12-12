import React from 'react'
import './StoreData.css'
import { StoreData } from '../../utils/StoreData'
import ReactStars from "react-rating-stars-component"

const FollowersCard = () => {
  return (
    <div className="FollowersCard">
        <div className="follower">
          <h4>Herb Shops Near You:</h4>   
        </div>
        
        {StoreData.map((store)=>{
            return(
                <div className="follower">
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
            )
        })}
    </div>
  )
}

export default FollowersCard