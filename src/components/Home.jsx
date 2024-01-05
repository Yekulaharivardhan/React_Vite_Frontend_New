import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUsername, selectUsername, setPhoneNumber, selectPhoneNumber, selectAddress, setAddress } from '../features/slices';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Carousel from './Carousel';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import Loader from '../ReusableComponents/Loader';


const Home = () => {

  const [userData, setUserData] = useState({
    name:"",
    age:null
  })
  const [data, setData] = useState()
  const [datafromBackend, setDatafromBackend] = useState()
  const [loading, setLoading] = useState(false)

  const handleuserData =(e)=>{
    const {name, value} = e.target;
    setUserData(pre => ({...pre,
      [name]:value
    }))
  }
  
  console.log(userData)
  const postData = async( )=>{
    let name = userData.name;
    let age = userData.age
    const res = await axios.post("http://localhost:5001/addUser", {name, age})
    if (res.status === 201) {
      alert('User added successfully!');
      getUsersgetUsers()
    }
    console.log(res,'33')
 
  
 

  }


  const getDatafromBackend = async()=>{
    const res = await axios.get("http://localhost:5001/getData")
     
    setDatafromBackend(res.data)
  }
  const getUsersgetUsers = async()=>{
    const res = await axios.get("http://localhost:5001/getUsers")
     
    console.log(res.data,'54 responswe')
  }



  const getData = async()=>{
    setLoading(true)
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos/")
    .then(res => 
      {setLoading(false)
    setData(res.data)
  })
  }
  const username = useSelector(selectUsername);
  const phoneNumber = useSelector(selectPhoneNumber);
  const address = useSelector(selectAddress);
  const dispatch = useDispatch();

useEffect(() => {
  getData()
  getDatafromBackend()
}, [])


  return (
    <div >
    <Navbar />

    <Sidebar/>
 
<Carousel/>

<div className="container">
<label htmlFor="name">Name</label>
  <input id='name' name="name" type="text" onChange={handleuserData}/>
<label htmlFor="age">Age</label>
  <input id='age' name="age" type="text" onChange={handleuserData}/>
  <button onClick={postData}>Submit</button>
</div>
<div className='container p-3 text-success'>{datafromBackend}</div>
    
{data && <Container >
  <table className="table table-light table-striped rounded">
  <thead>
      <tr>
        <th>
          Title
        </th>
        <th>
          ID
        </th>
      </tr>
  </thead>
    <tbody>
  {data?.map(i=>{
    if(i.title.length >= 65)
    return(
  <tr>
  
          <td>{i.title}</td>
          <td>{i.id}</td>
  </tr>
  
  )})}
    </tbody>
  </table>
</Container>}


{loading && <Loader/>}

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
