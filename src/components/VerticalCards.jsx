import React from 'react';
import { Container, Button } from 'react-bootstrap';

const VerticalCards = ({displayCards, handlePrev, startIndex, handleNext, data}) => {
    return (
        <div className='bx-wrapper bg-light py-4 my-4 shadow rounded py-3'>
        <div className='bx-viewport'>
          <div className='bxslider'>
            {displayCards()}
          </div>
          <div className="bx-controls">
            <div className="bx-controls-direction">
              <Button className='bx-prev' onClick={handlePrev} disabled={startIndex === 0}>

              <img src="./images/left_arrow.svg" alt="" />
              </Button>
               
              <Button className='bx-next' onClick={handleNext} disabled={startIndex + 4 >= data?.length}>
              <img src="./images/right_arrow.svg" alt="" />
              </Button>
               
            </div>
          </div>
        </div>
      </div>
    );
};

export default VerticalCards;