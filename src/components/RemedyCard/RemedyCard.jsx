import React , { useEffect, useState } from 'react'
import "./RemedyCard.scss";
import { Link, useNavigate} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import { getHerb } from "../../actions/PostAction";
import ReactCardFlip from 'react-card-flip';
import { capFirstLetter} from '../../utils/Helper'
import { HerbData } from "../../utils/HerbData";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const RemedyCard = ({ item }) => {
  const [show, setShow] = useState(false);
  const [herb, setHerb] = useState(null);
  const { herbList } = useSelector((state) => state.postReducer);
 
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleFlip = async (e) => {
    e.preventDefault();
    let herbName = e.target.innerText.toLowerCase().trim();

    console.log(herbName)

    let herbData = herbList.filter((herb) => herb.name.includes(herbName))
  
    setHerb(herbData.pop())

    handleShow();
  };

  const getRandomImage = () =>{
    let randomNumber = Math.floor(Math.random() * 10) +1
    
    return `./herb${randomNumber}.png`
  }

  return (
    <div>
      <div className="gigCard">
        <img src= {getRandomImage()} alt="" />
        <div className="info">
          <p>Ailment: {capFirstLetter(item.symptom)}</p>
          <p>Herbs (Click on herb name for more info)</p>
          <ul className="secondaryText">
            {
              item.herbs.map((herb)=>{
                return(
                  <li type="button" className='herbLink' onClick={handleFlip}>
                    {capFirstLetter(herb)} 
                  </li>
              ) 
              })
            }
          </ul>
          <p>Instructions: {item.instructions.replace(";", ".")}</p>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            {herb == null ?"Fetching Herb Name" : capFirstLetter(herb.name) }
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {herb == null ?"Fetching Herb Information" : herb.description}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>      
  </div>
);
};

export default RemedyCard;
