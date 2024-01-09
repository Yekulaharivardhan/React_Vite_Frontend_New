import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const ScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);


const petimage = [
    {text:"8",title:"Kyl",src:"https://cc-prod.scene7.com/is/image/CCProdAuthor/adobe-firefly-marquee-text-to-image-0-mobile-600x600?$pjpeg$&jpegSize=100&wid=600"},
    {text:"6",title:"Tom",src :"https://s3-media0.fl.yelpcdn.com/bphoto/xH3FbGfyKgXh55fjPzYXsg/1000s.jpg",},
    {text:"3",title:"Jim",src:"https://yourdost-blog-images.s3-ap-southeast-1.amazonaws.com/wp-content/uploads/2016/01/03165939/Dogs.jpg"},
]

  useEffect(() => {
    const handleScroll = () => {
      // Get the current scroll position
      const scrollY = window.scrollY || window.pageYOffset;

      // Define the offset at which you want the animation to trigger
      const triggerOffset = 300;

      // Check if the scroll position is below the trigger offset
      setIsVisible(scrollY > triggerOffset);
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div className={`animated-element container ${isVisible ? 'visible' : ''}`}>
       
     <div>
        <Row className='justify-content-evenly bg-light p-4 rounded shadow '>
     <h2 className='fw-bold pb-3'>Get a dog for you</h2>
       {petimage.map(i=>(

        <div className="card dog_card" style={{ width: "18rem"}}>
  <img src={i.src} className="w-100 h-100 card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title fw-bold">{i.title}</h5>
    <p className="card-text">{"age : "+i.text +" months"}</p>
    <a href="#" className="btn btn-outline-primary">Get me</a>
  </div>
</div>
))}
        </Row>
     </div>
     



    </div>
  );
};

export default ScrollAnimation;
