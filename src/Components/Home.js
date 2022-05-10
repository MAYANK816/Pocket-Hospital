import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';


const Home = () => {
  const navigate = useNavigate();
  return <>

    <div className='Banner'>


      <div className='Banner_child_div_2'>
        <img src='/images/image 1.jpg' alt='mainImage'></img>
      </div>
      <div className='Banner_child_div'>
        <h3>A Great Place to</h3>
        <h3>Receive Care</h3>
        <p>Medical Recover is most focused in helping you
          discover your most beauiful smile</p>
        <button onClick={() => { navigate("/Find_Doctor") }}>Make An Appointment</button>
      </div>
    </div>
    <div class="Banner_stats" > </div>
    <div class="Banner_Experts" >
      <img src="/images/experts.jpg" alt="experts"></img>
    </div>
    <div class="Banner_Teams" >
      <img src="/images/team.jpg" alt='teams'></img>
    </div>
  </>;
}

export default Home;
