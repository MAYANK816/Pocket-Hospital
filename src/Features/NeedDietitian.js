import axios from 'axios';
import React,{useState} from 'react';
import './FeatureForm.css'
import swal from 'sweetalert';
const NeedDietitian = () => {

  const [formData, setformData] =
   useState({ number: '', Address: '', issues: '' ,name:'',emergency:'',Appointment_time:''});

   const registerCreds = (e) => {
    setformData({
        ...formData,
        [e.target.name]: e.target.value
    });

}

const registerData=()=>{
          axios.post('https://pockethospitalbackend.herokuapp.com/needDietitian', {
            number: formData.number,
            Address: formData.Address,
            issues: formData.issues,
            name:formData.name,
            emergency:formData.emergency,
            Appointment_time:formData.Appointment_time
        }).then(function (response) {
                if(response.status===200)
              { 
                resetData();
                swal("Good job!", "Data Submitted !", "success");
                
              }

            });

}
const resetData=()=>{
  console.log("called");
  var inputs=document.querySelectorAll('#form_usernumber');
  inputs.forEach((input)=>{
      input.value='';
  })
}
  return <>
   <h4 style={{padding:"25px"}}>Need Proper Diet ?</h4>
          <br>
          </br>
          <div className='Form_main'>
        <div className='Form_body'> 
        <div className='Form_body_img'>
          <img src="/images/ambulance.jpeg" alt="formimage"/>
        </div>
        <div className='Form_body_Feilds'>
          
          <label>Customer Number :</label>
               <input type="number" name="number" placeholder="Your Number" onChange={registerCreds}  id="form_usernumber"></input>
               <label>Address :</label>
               <input type="text" name="Address"  placeholder="Address" onChange={registerCreds}  id="form_usernumber"></input>
               <label>Any other issues:</label>
               <input type="text" name="issues" onChange={registerCreds}   placeholder="like Diabeties, BP etc." id="form_usernumber"></input>
                
        </div>
        <div className='Form_body_Feilds'>

          <label>Customer Name :</label>
               <input type="text" name="name" placeholder="Your Name" onChange={registerCreds}  id="form_usernumber"></input>
               <label>Medical issues :</label>
               <input onChange={registerCreds}  type="text" name="emergency"  placeholder="Brief Medical issues" id="form_usernumber"></input>
               <label>Appointment Time :</label>
               <input onChange={registerCreds}  type="time" name="Appointment_time"  placeholder="Departure Time" id="form_usernumber"></input>
        </div>
        
        </div>
        <button value="Login" id="submit_btn"  onClick={registerData} data-dismiss="modal">Submit</button>
        </div>
     </>;
};

export default NeedDietitian;
