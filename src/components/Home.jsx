import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUsername, setPhoneNumber, fetchData } from '../features/slices';
import Navbar from './Navbar';
import Carousel from './Carousel';
import axios from 'axios';
import { Card, Container } from 'react-bootstrap';
import Loader from '../ReusableComponents/Loader';
import ScrollAnimation from '../ReusableComponents/ScrollAnimation';
import VerticalCards from './VerticalCards';
import StickyCard from './StickyCard';


const Home = () => {
  const {cardData, loading} = useSelector((state) => state.todos);
  const username = useSelector(state => state.user.username);
  const phoneNumber = useSelector(state => state.phone.phoneNumber);
  const address = useSelector( state => state.address.address);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    name: "",
    age: null
  })
  const [datafromBackend, setDatafromBackend] = useState()

  const handleuserData = (e) => {
    const { name, value } = e.target;
    setUserData(pre => ({
      ...pre,
      [name]: value
    }))
  }

  const postData = async () => {
    let name = userData.name;
    let age = userData.age
    const res = await axios.post("http://localhost:5001/addUser", { name, age })
    if (res.status === 201) {
      alert('User added successfully!');
      getUsersgetUsers()
    }
 
  }


  const getDatafromBackend = async () => {
    const res = await axios.get("http://localhost:5001/getData")

    setDatafromBackend(res.data)
  }
  const getUsersgetUsers = async () => {
    const res = await axios.get("http://localhost:5001/getUsers")

    
  }
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
 

  useEffect(() => {
    getDatafromBackend()
  }, [])

  const [startIndex, setStartIndex] = useState(0);
  const displayCards = () => {
    return cardData?.slice(startIndex, startIndex + 5).map((item, index) => {
      return(
      <Card bg="light" key={index} text={'dark'} style={{ width: '16rem', height:"9rem", overflow:"hidden" }} className='item '>
        <Card.Header>Header</Card.Header>
        <Card.Body className=''>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            {item.title}
          </Card.Text>
        </Card.Body>
      </Card>
    )});
  };

  const handleNext = () => {
    if (startIndex + 4 < cardData.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };
  return (
    <div className='container'>
      <Navbar />

      <Carousel />
      <StickyCard />

      <div className=" gap-4 d-flex my-5 position-relative input_container_home">
        <label className='input_label_p1' htmlFor="name">Name</label>
        <input className='' id='name' name="name" type="text" onChange={handleuserData} />
        <label className='' htmlFor="age">Age</label>
        <input className='' id='age' name="age" type="text" onChange={handleuserData} />
        <button className='btn btn-outline-primary' onClick={postData}>Submit</button>
      </div>
      <div className=' p-3 text-success'>{datafromBackend}</div>
 
      <ScrollAnimation />

    <VerticalCards data={cardData} displayCards={displayCards} handlePrev={handlePrev} handleNext={handleNext} startIndex={startIndex}/>


      {loading && <Loader />}

      <p>Username: {username}</p>
      <button onClick={() => dispatch(setUsername('NewUsername'))}>Set Username</button>

      <p>Phone Number: {phoneNumber}</p>
      <button onClick={() => dispatch(setPhoneNumber('NewPhoneNumber'))}>Set Phone Number</button>
      <p>address: {address}</p>
      <button onClick={() => dispatch(setAddress('New address: 1-5-21, no-2 basthi, yellandu'))}>Set address</button>
    </div>
  );
};

export default Home;
