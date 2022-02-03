import React from 'react';
import './Home.css'
const Home = () => {
  return <>
        <div className='Banner'></div>
        <div className='Banner_2'>
            <img src="/images/Home_Banner_3.jpg" alt="images"/>
      
            <p style={{fontSize:"20px"}}>
              <b>
          24/7 available for your service , help people to get door to door services like people can find medicines , oxygen cylinders , need guidance from dietitian , need immediate doctor assistance , we also provide ambulance for patients and last but not the least patients can book hospital beds at various hospitals. 
          </b>
            </p>
        </div>
        <div className='Banner_2'>
           
            <p style={{fontSize:"20px"}}>
              <b>
             Buy medicines at budget friendly rate , in just one click and get door to door delivery .
             </b>
            </p>
            <img src="/images/banner_3.jpg" alt="images"/>
        </div>      
  </>;
};

export default Home;
