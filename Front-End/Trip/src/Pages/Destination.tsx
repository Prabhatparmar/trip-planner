import React, { useState } from 'react'
import './Destination.css'
import { useNavigate } from 'react-router-dom';
const Destination = () => {
    const navigate = useNavigate();
    const [formData , setformData] = useState({
        from : '',
        to : '',
        hotel: '',
        travellingfrom:'',
    });
    const handlechange =(e: { target: { name: any; value: any; }; }) =>{
        setformData({...formData,[e.target.name]: e.target.value});
    }
    const handleSumbit = () =>{
        navigate('/MywishList' , {state : formData});
    }

  return (
    <div>
        <div className="Destination-form">
            <h2>From</h2>
            <input type="text" name='from' onChange={handlechange} />
            <h2>to</h2>
            <input type="text" name='To' onChange={handlechange} />
            <h2>Hotel</h2>
            <input type="text" name='hotel' onChange={handlechange} />
            <h2>Tavelling From</h2>
            <input type="text" name='travellingfrom' onChange={handlechange} />
            <button onClick={handleSumbit}>Sumbit</button>

        </div>
    </div>
  )
}

export default Destination