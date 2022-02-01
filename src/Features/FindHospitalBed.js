import axios from 'axios';
import React,{useState} from 'react';
import './FeatureForm.css'
import swal from 'sweetalert';
const FindHospitalBed = () => {
  const [formData, setformData] =
   useState({ number: '', quantity: '', need: '' ,name:'',emergency:'',address:''});

   const registerCreds = (e) => {
    setformData({
        ...formData,
        [e.target.name]: e.target.value
    });

}
const registerData=()=>{
  axios.post('http://localhost:8001/hospitalbeds', {
    number: formData.number,
    quantity: formData.quantity,
    need: formData.need,
    name:formData.name,
    emergency:formData.emergency,
    address:formData.address
}).then(function (response) {
        if(response.status===200)
      { 
        swal("Good job!", "Data Submitted !", "success");}
    });
}
  return <>
   <h4 style={{padding:"25px"}}>Find Hospital Beds</h4>
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
               <label>Quantity Need:</label>
               <input type="number" name="quantity"  placeholder="Quantity Need" onChange={registerCreds}  id="form_usernumber"></input>
               <label>Your Need:</label>
               <input type="text" name="need" onChange={registerCreds}   placeholder="Why You Need" id="form_usernumber"></input>
                
        </div>
        <div className='Form_body_Feilds'>

          <label>Customer Name :</label>
               <input type="text" name="name" placeholder="Your Name" onChange={registerCreds}  id="form_usernumber"></input>
               <label>Emergency :</label>
               <input onChange={registerCreds}  type="text" name="emergency"  placeholder="Yes / No" id="form_usernumber"></input>
               <label>Your Address :</label>
               <input onChange={registerCreds}  type="text" name="address"  placeholder="Your Address" id="form_usernumber"></input>
        </div>
        
        </div>
        <button value="Login" id="submit_btn"  onClick={registerData} data-dismiss="modal">Submit</button>
        </div>
     </>;
};

export default FindHospitalBed;
