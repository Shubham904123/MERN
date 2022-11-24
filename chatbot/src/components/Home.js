import { Alert, Avatar } from '@mui/material';
import { blue } from '@mui/material/colors';
import React from 'react'
import chat from '../img/chat.jpg'

function Home(){
    return(
      <div className='col-lg-12 cntr'>
      <div className='col-lg-4 grd1'> 
     
        <div className='row head'>
          <h2>ChatBot</h2>
    
          {/* <Avatar className='avtar'  src={chat}  />         */}
        </div>
        <hr/>
        <div className='row content'>

        </div>

        <div className='dv2'>
        <input type='text' className='form-control inpt' placeholder='Enter your Query Here'></input>
       <button className='btn'><span className='glyphicon glyphicon-send'></span>  </button> 
      </div>   
      </div>
      </div>
    );
}

export default Home;