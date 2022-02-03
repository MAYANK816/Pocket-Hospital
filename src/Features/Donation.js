import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import './FeatureForm.css'
import swal from 'sweetalert';
const Donation = () => {
const [product, setproduct] = useState({name:'Donation for needy Ones',price:'',address:'',email:'',id:'',number:''});

const registerCreds = (e) => {
  setproduct({
      ...product,
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

function handleToken(token,address){
  console.log("token",token);
  axios.post('https://pockethospitalbackend.herokuapp.com/checkout', {
    email:token.email,
    name:product.name,
    number:product.number,
    id:token.id,
    price:product.price,
    address:product.address
}).then(function (response) {
        resetData();
        swal("Good job!", "Data Submitted !", "success");
        
    });
}
  return <>
     <h4 style={{padding:"25px"}}>Donation for needy Ones</h4>
          <br>
          </br>
          <div className='Form_main'>
        <div className='Form_body'> 
        <div className='Form_body_img'>
          <img src="/images/donation.jpg" alt="formimage" />
        </div>
        <div className='Form_body_Feilds'>
          
          <label>Customer Number :</label>
               <input type="number" name="number" placeholder="Your Number" onChange={registerCreds}  id="form_usernumber"></input>
               <label>Donation Amount:</label>
               <input type="number" name="price"  placeholder="Donation Amount" onChange={registerCreds}  id="form_usernumber"></input>

                
        </div>
        <div className='Form_body_Feilds'>

          <label>Customer Name :</label>
               <input type="text" name="name" placeholder="Your Name" onChange={registerCreds}  id="form_usernumber"></input>
               <label>Address :</label>
               <input onChange={registerCreds}  type="text" name="address"  placeholder="Your Address" id="form_usernumber"></input>
        </div>
        
        </div>

    <StripeCheckout

        token={handleToken}
        stripeKey="pk_test_51KOyxOSAA6LbWVNh5GYyAcANb1jV4RK4YolJXmOAsRxiQxOpRfr2v20El6Dxm4WTOSmeIsOjuyXrGeD2s9lMey7d00rrOho5x4"
        billingAddress
        shippingAddress
        currency='inr'
        amount={product.price*100}
        name={product.name}
      />

        </div>
  </>;
};

export default Donation;
