import axios from 'axios';
import React,{useState} from 'react';
import './FeatureForm.css'
import swal from 'sweetalert';
const NeedDoctor = () => {
  const [formData, setformData] =
   useState({ number: '', time: '', problem: '' ,name:'',emergency:'',address:''});

   const registerCreds = (e) => {
    setformData({
        ...formData,
        [e.target.name]: e.target.value
    });

}
const resetData=()=>{
  console.log("called");
  var inputs=document.querySelectorAll('#form_usernumber');
  inputs.forEach((input)=>{
      input.value='';
  })
}
const registerData=()=>{
  axios.post('https://pockethospitalbackend.herokuapp.com/needdoctor', {
    number: formData.number,
    time: formData.time,
    problem: formData.problem,
    name:formData.name,
    emergency:formData.emergency,
    address:formData.address
}).then(function (response) {
        resetData();
        swal("Good job!", "Data Submitted !", "success");
        
    });
}
  return <>
   <h4 style={{padding:"25px"}}>Find Perfect Doctor at Perfect Time</h4>
          <br>
          </br>
          <div className='Form_main'>
        <div className='Form_body'> 
        <div className='Form_body_img'>
          <img src="/images/oxygencylinder.jpg" alt="formimage"/>
        </div>
        <div className='Form_body_Feilds'>
          
          <label>Customer Number :</label>
               <input type="number" name="number" placeholder="Your Number" onChange={registerCreds}  id="form_usernumber"></input>
               <label>Preferred Appointment Time:</label>
               <input type="time" name="time"  placeholder="Preferred Appointment Time" onChange={registerCreds}  id="form_usernumber"></input>
               <label>Your Problem:</label>
               <input type="text" name="problem" onChange={registerCreds}   placeholder="describe Your Problem" id="form_usernumber"></input>
                
        </div>
        <div className='Form_body_Feilds'>

          <label>Customer Name :</label>
               <input type="text" name="name" placeholder="Your Name" onChange={registerCreds}  id="form_usernumber"></input>
               <label>Emergency :</label>
               <input onChange={registerCreds}  type="text" name="emergency"  placeholder="Yes / No" id="form_usernumber"></input>
               <label>Address :</label>
               <input onChange={registerCreds}  type="text" name="address"  placeholder="Your Address" id="form_usernumber"></input>
        </div>
        
        </div>
        <button value="Login" id="submit_btn"  onClick={registerData} data-dismiss="modal">Submit</button>
        </div>
     </>;
};

export default NeedDoctor;
