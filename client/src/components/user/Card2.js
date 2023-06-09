import React from 'react';
import "../../styles/card2.css"


const Card2 = ({items}) => {
    const {images,eventName}=items

  return (
    <div>
    <div className='card2-text'>My albums</div>
    <div className='card2-albums'>
       {
        images.map((img)=>(
          <>
           <img className='card2-img' src={`https://eventproposalpage-0e8x.onrender.com/proposal/images/${img}`} alt={eventName}/>
          </>
        ))
       }
    </div>
    </div>
  )
}

export default Card2