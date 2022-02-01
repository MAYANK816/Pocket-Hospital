import React, { useState, useEffect } from 'react';
import './Login.css'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import swal from 'sweetalert';

const NavBar = () => {

    const navigation = useNavigate();
    const [people, setpeople] = useState([]);
    const [loginCred, setloginCred] = useState({ email: '', password: '' });
    const [registerCred, setregisterCred] = useState({ email: '', password: '', cpassword: '' })

    useEffect(() => {
        async function fetchMoviesJSON() {
            const response = await fetch('https://pockethospitalbackend.herokuapp.com/SignIn');
            const movies = await response.json();
            setpeople(movies);
        }
        fetchMoviesJSON();
    }, []);

    //Checking up the Registration credentials values

    const registerCredsData = () => {
        if (registerCred.email && registerCred.cpassword && registerCred.password) {
            axios.post('https://pockethospitalbackend.herokuapp.com/userCreate', {
                email: registerCred.email,
                password: registerCred.password,
                cpassword: registerCred.cpassword
            }).then(function (response) {
                    window.localStorage.setItem("state", "true");
                    swal("Good job!", "Registration Successful !", "success");
                    navigation('/');
                });
        }
        else {
            swal("Please Check your details!", "Registration Failed!", "error");
        }

    }
      //setting up the Login credentials values
    const loginCreds = (e) => {
        setloginCred({
            ...loginCred,
            [e.target.name]: e.target.value
        });
    }
          //setting up the registration credentials values
    const registerCreds = (e) => {
        setregisterCred({
            ...registerCred,
            [e.target.name]: e.target.value
        });

    }

    const logoutData = () => {
        if (window.localStorage.getItem("state") === "true") {
            window.localStorage.setItem("state", "false")
            navigation("/");
        }
    }

    const loginData = () => {
             //api call for login
        console.log("click");
        if (loginCred.email && loginCred.password) {
            console.log("rew", people);
            people.map((person) => {
                if (person.email === loginCred.email && person.password === loginCred.password) {
                    window.localStorage.setItem("state", "true");
                    swal("Good job!", "Login Successful !", "success");
                    navigation("/");
                }
                return true;
            })
        }
        else { 
            swal("Please Check your details!", "Login Failed!", "error");
         }

    }

    const NavComponent = () => {


        if (window.localStorage.getItem("state") === "true") {
            return (
                <>

                    <Nav.Link href="/">Home</Nav.Link>
                    <NavDropdown title="Features" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/Find_Oxygen">Find Oxygen Cylinders</NavDropdown.Item>
                        <NavDropdown.Item href="/Find_Doctor">Need Doctor</NavDropdown.Item>
                        <NavDropdown.Item href="/Find_Medicine">Find Medicine</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/Find_Bed">Find Hospital Bed</NavDropdown.Item>
                        <NavDropdown.Item href="/Donation">Donation</NavDropdown.Item>
                        <NavDropdown.Item href="/Need_Ambulance">Need Ambulance</NavDropdown.Item>
                        <NavDropdown.Item href="/Need_Dietitian">Need Dietitian</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/About">AboutUs</Nav.Link>
                    <Nav.Link href="/Emergency">Emergency</Nav.Link>
                    <Nav.Link href="/ContactUs">ContactUs</Nav.Link>
                    <Nav.Link href="/Logout" type="button" data-toggle="modal" data-target="#logoutModule">LogOut</Nav.Link>


                </>
            );
        }
        else {
            return (
                <>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="/About">AboutUs</Nav.Link>
                    <Nav.Link href="/Emergency">Emergency</Nav.Link>
                    <Nav.Link href="#link">ContactUs</Nav.Link>
                    <Nav.Link href="/Signin" type="button" data-toggle="modal" data-target="#exampleModal">SignIn</Nav.Link>
                    <Nav.Link href="/signup" type="button" data-toggle="modal" data-target="#exampleModal2">SignUp</Nav.Link>

                </>
            )
        }

    }
    return <>
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Pocket Hospital</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavComponent />
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">

                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div className='login_component'>
                            <h2>LogIn </h2>
                            <p>TO ACCESS THE PORTAL</p>
                            <div className='login_form'>
                                <img src="https://image.freepik.com/free-vector/www-concept-illustration_114360-2143.jpg" alt="company logo"></img>
                                <div className='login_form_fields'>
                                    <h4>SIGN IN </h4>
                                    <h6>To Access The Portal</h6>
                                    <label>User Email :</label>
                                    <input type="text" name="email" placeholder="User Email Address" onChange={loginCreds} id="usernumber"></input>
                                    <label>Password :</label>
                                    <input type="passwordcd" name="password" onChange={loginCreds} placeholder="User Password" id="userpass"></input>
                                    <button value="Login" id="login_btn" onClick={loginData} data-dismiss="modal">Login</button>
                                </div>
                            </div>
                        </div >
                    </div>

                </div>
            </div>
        </div>

        <div class="modal fade" id="logoutModule" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">

                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div className='login_component'>
                            <div className='login_form'>
                                <img src="https://image.freepik.com/free-vector/www-concept-illustration_114360-2143.jpg" alt="company logo"></img>
                                <div className='login_form_fields'>
                                    <img src="/images/user.jpg" alt="login_image" />
                                    <h5>Logout Your Account</h5>
                                    <button value="Login" id="login_btn" onClick={logoutData} data-dismiss="modal">Logout</button>
                                </div>
                            </div>
                        </div >
                    </div>

                </div>
            </div>
        </div>
        <div class="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">

                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div className='login_component'>
                            <h2>SignUp </h2>
                            <p>TO ACCESS THE PORTAL</p>
                            <div className='login_form'>
                                <img src="https://image.freepik.com/free-vector/www-concept-illustration_114360-2143.jpg" alt="company logo"></img>
                                <div className='login_form_fields'>
                                    <h4>SIGNUP</h4>
                                    <label>Phone No :</label>
                                    <input type="text" name="email" placeholder="User Email Address" onChange={registerCreds} id="usernumber"></input>
                                    <label>Password :</label>
                                    <input type="password" name="password" placeholder="Enter Password" onChange={registerCreds} id="userpass"></input>
                                    <label>Confirm Password :</label>
                                    <input type="password" name="cpassword" placeholder="Confirm Your Password" onChange={registerCreds} id="userpass"></input>
                                    <button value="Login" id="login_btn" onClick={registerCredsData} data-dismiss="modal">Register me!</button>

                                </div>
                            </div>
                        </div >
                    </div>

                </div>
            </div>
        </div>
    </>;
};

export default NavBar;
