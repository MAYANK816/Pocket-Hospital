import axios from 'axios';
import React,{useState} from 'react';
import './FeatureForm.css'
import swal from 'sweetalert';
const NeedAmbulance = () => {

  const [formData, setformData] =
   useState({ number: '', Address: '', need: '' ,name:'',emergency:'',Depart_time:''});

   const registerCreds = (e) => {
    setformData({
        ...formData,
        [e.target.name]: e.target.value
    });

}

const registerData=()=>{
          axios.post('http://localhost:8001/needAmbulance', {
            number: formData.number,
            Address: formData.Address,
            need: formData.need,
            name:formData.name,
            emergency:formData.emergency,
            Depart_time:formData.Depart_time
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
   <h4 style={{padding:"25px"}}>Need Ambulance</h4>
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
               <label>From Where :</label>
               <input type="text" name="Address"  placeholder="Departure Address" onChange={registerCreds}  id="form_usernumber"></input>
               <label>Your Need:</label>
               <input type="text" name="need" onChange={registerCreds}   placeholder="Why You Need" id="form_usernumber"></input>
                
        </div>
        <div className='Form_body_Feilds'>

          <label>Customer Name :</label>
               <input type="text" name="name" placeholder="Your Name" onChange={registerCreds}  id="form_usernumber"></input>
               <label>Emergency :</label>
               <input onChange={registerCreds}  type="text" name="emergency"  placeholder="Yes / No" id="form_usernumber"></input>
               <label>Departure Time :</label>
               <input onChange={registerCreds}  type="time" name="Depart_time"  placeholder="Departure Time" id="form_usernumber"></input>
        </div>
        
        </div>
        <button value="Login" id="submit_btn"  onClick={registerData} data-dismiss="modal">Submit</button>
        </div>
     </>;
};

export default NeedAmbulance;
