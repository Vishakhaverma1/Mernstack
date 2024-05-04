
import React, { useEffect, useState } from 'react';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from "react-router-dom";
import Typed from 'typed.js'; // Import Typed.js library if not already imported
import Swal from "sweetalert2"
import "./Header.css";

const Header = () => {
    const navigate = useNavigate();

    const uservalidate = () => {
        var username = document.getElementById("username");
        var userdisplay = document.getElementById("userdisplay");

        if (username.value.trim() == "") {
            userdisplay.innerHTML = "Field Required";
            userdisplay.style.color = "red";
            return false;
        }
        else {
            var reg = /^[a-zA-Z\s-]+$/;
            if (reg.test(username.value)) {
                userdisplay.innerHTML = "Valid";
                userdisplay.style.color = "green";
                return true;
            }
            else {
                userdisplay.innerHTML = "Invalid";
                userdisplay.style.color = "red";
                return false;
            }
        }
    };

    const schoolvalidate = () => {
        var schoolname = document.getElementById("schoolname");
        var schoolnamedisplay = document.getElementById("schoolnamedisplay");

        if (schoolname.value.trim() == "") {
            schoolnamedisplay.innerHTML = "Field Required";
            schoolnamedisplay.style.color = "red";
            return false;
        }
        else {
            var reg = /^[a-zA-Z\s-]+$/;
            if (reg.test(schoolname.value)) {
                schoolnamedisplay.innerHTML = "Valid";
                schoolnamedisplay.style.color = "green";
                return true;
            }
            else {
                schoolnamedisplay.innerHTML = "Invalid";
                schoolnamedisplay.style.color = "red";
                return false;
            }
        }
    };

    const mobilevalidate = () => {
        var mobilenumber = document.getElementById("mobilenumber");
        var mobiledisplay = document.getElementById("mobiledisplay");

        if (mobilenumber.value.trim() == "") {
            mobiledisplay.innerHTML = "Field Required";
            mobiledisplay.style.color = "red";
            return false;
        }
        else {
            var reg = /^[6789][0-9]{8}$/;
            if (reg.test(mobilenumber.value)) {
                mobiledisplay.innerHTML = "Valid";
                mobiledisplay.style.color = "green";
                return true;
            }
            else {
                mobiledisplay.innerHTML = "Invalid";
                mobiledisplay.style.color = "red";
                return false;
            }
        }
    };

    const whatsappvalidate = () => {
        var whatsappnumber = document.getElementById("whatsappnumber");
        var whatsappdisplay = document.getElementById("whatsappdisplay");


        if (whatsappnumber.value.trim() == "") {
            whatsappdisplay.innerHTML = "Field Required";
            whatsappdisplay.style.color = "red";
            return false;
        }
        else {
            var reg = /^[6789][0-9]{8}$/;
            if (reg.test(whatsappnumber.value)) {
                whatsappdisplay.innerHTML = "Valid";
                whatsappdisplay.style.color = "green";
                return true;
            }
            else {
                whatsappdisplay.innerHTML = "Invalid";
                whatsappdisplay.style.color = "red";
                return false;
            }
        }
    };

    const tenpercentvalidate = () => {
        var tenpercante = document.getElementById("tenpercante");
        var tenpercentdisplay = document.getElementById("tenpercentdisplay");

        if (tenpercante.value.trim() == "") {
            tenpercentdisplay.innerHTML = "Field Required";
            tenpercentdisplay.style.color = "red";
            return false;
        }
        else {
            var reg = /^(100(?:\.0{1,2})?|\d{0,2}(?:\.\d{1,2})?)%?$/;
            if (reg.test(tenpercante.value)) {
                tenpercentdisplay.innerHTML = "Valid";
                tenpercentdisplay.style.color = "green";
                return true;
            }
            else {
                tenpercentdisplay.innerHTML = "Invalid";
                tenpercentdisplay.style.color = "red";
                return false;
            }
        }
    };

    const twelvepercentvalidate = () => {
        var twelthpercante = document.getElementById("twelthpercante");
        var twelvepercentdisplay = document.getElementById("twelvepercentdisplay");

        if (twelthpercante.value.trim() == "") {
            twelvepercentdisplay.innerHTML = "Field Required";
            twelvepercentdisplay.style.color = "red";
            return false;
        }
        else {
            var reg = /^(100(?:\.0{1,2})?|\d{0,2}(?:\.\d{1,2})?)%?$/;
            if (reg.test(twelthpercante.value)) {
                twelvepercentdisplay.innerHTML = "Valid";
                twelvepercentdisplay.style.color = "green";
                return true;
            }
            else {
                twelvepercentdisplay.innerHTML = "Invalid";
                twelvepercentdisplay.style.color = "red";
                return false;
            }
        }
    };

    const cityvalidate = () => {
        var city = document.getElementById("city");
        var citydisplay = document.getElementById("citydisplay");


        if (city.value.trim() == "") {
            citydisplay.innerHTML = "Field Required";
            citydisplay.style.color = "red";
            return false;
        }
        else {
            var reg = /^[a-zA-Z\s-]+$/;
            if (reg.test(city.value)) {
                citydisplay.innerHTML = "Valid";
                citydisplay.style.color = "green";
                return true;
            }
            else {
                citydisplay.innerHTML = "Invalid";
                citydisplay.style.color = "red";
                return false;
            }
        }
    };

    // State variables
    const [username, setUsername] = useState("");
    const [schoolname, setSchoolname] = useState("");
    const [mobilenumber, setMobilenumber] = useState("");
    const [whatsappnumber, setWhatsappnumber] = useState("");
    const [email, setEmail] = useState("");
    const [tennumber, setTennumber] = useState("");
    const [twelvenumber, setTwelvenumber] = useState("");
    const [city, setCity] = useState("");
    const [category, setCategory] = useState("");
    const [course, setCourse] = useState("");


    // Function to navigate to the Price route
    const navigateToPrice = () => {
        navigate("/Price");
    };

    const API = import.meta.env.VITE_Backend_URL;

    // Function to handle user registration
    const handleUserRegistration = async (e) => {
        e.preventDefault();
        try {
            const data = await axios.post(
                `${API}/register`,
                {
                    username,
                    schoolname,
                    mobilenumber,
                    whatsappnumber,
                    email,
                    tennumber,
                    twelvenumber,
                    city,
                    category,
                    course
                },
                {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    withCredentials: true,
                    timeout: 30000
                }
            );
            console.log(data);
            if (data.status === 200) {
                // If the response status is OK, show success message
                Swal.fire('Success!','Your regestration process complete now choose your career with us . Thank you!','success');
                // Reset form fields
                setUsername("");
                setSchoolname("");
                setMobilenumber("");
                setWhatsappnumber("");
                setEmail("");
                setTennumber("");
                setTwelvenumber("");
                setCity("");
                setCategory("");
                setCourse("");
            }
            navigateToPrice();
        } catch (error) {
            Swal.fire('warning!','All fields are neccessary to fill.','warning');
            console.log("Error:", error);
        }
    };

    // useEffect for Typed.js initialization
    useEffect(() => {
        const typed = new Typed(".auto-type", {
            strings: ["Expert Counselling", "Student Mentorship", "University Guidance"],
            typeSpeed: 150,
            backSpeed: 150,
            loop: true
        });
        
        return () => {
            typed.destroy();
        };
    }, []);
    const [show, setShow] = useState(false);

   useEffect(() => {
    const timer = setTimeout(() => {
        setShow(true);
    }, 10000);

    return () => clearTimeout(timer); // Clear timeout when component unmounts
}, []);

    // react bootstrap Modal 
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <section className="header" id="home">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-12" id="edu">
                            <h4>Choose...</h4>
                            <span data-text="Eduसहयोगी">Eduसहयोगी</span>
                        </div>
                        <div className="col-lg-4 col-sm-12" id="Counselling">
                            <h2>For <span className="auto-type"></span></h2>
                            <div className="d-flex justify-content-center justify-content-lg-start">
                                {/* <!-- Button trigger modal --> */}
                                <button variant="primary" onClick={handleShow} className='btn-get-started'>Get Counseling</button>
                                <a href="" className="glightbox btn-watch-video">
                                    <i className="fa-regular fa-circle-play"></i>
                                    <span>Watch Intro</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-12">
                            <img src="image/p1-removebg-preview.png" alt="" className="headerimg" />
                        </div>
                    </div>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" id="svg1" viewBox="0 0 1440 135">
                    <path fillOpacity="1"
                        d="M0,128L60,112C120,96,240,64,360,42.7C480,21,600,11,720,26.7C840,43,960,85,1080,90.7C1200,96,1320,64,1380,48L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">
                    </path>
                </svg>

            </section>

            {/* Modal */}
            <form>

                <Modal size="xl" show={show} onHide={handleClose} centered>
                    <Modal.Header closeButton>
                        <div id="regiter_div">
                            <img src="image/register_image.webp" alt="" />
                        </div>
                        <div id="register_heading">
                            <h4 style={{ fontWeight: '600' }}>Register Now To Apply</h4>
                            <p style={{ color: 'black', fontSize: 'large', fontWeight: '350' }}>career guidence & admission</p>
                        </div>
                    </Modal.Header>
                    <Modal.Body>
                    <p style={{ color: 'red' }}>It is necessary to fill all these fields otherwise your registration will not be successful.</p>
                                <div className="row">
                                    {/* <!-- Input Section --> */}
                                    <div className="col-md-7">
                                        <div id="registration_form">
                                            <div className="one">
                                                <input type="text" onKeyPress={uservalidate} className="form-control input1" value={username} onChange={(e) =>setUsername(e.target.value)}
                                                    placeholder="" id="username" name="username" />
                                                <div className="placeholder">
                                                    <i className="fa-solid fa-user"></i><span>Full Name</span><span
                                                        id="regspan">*</span>
                                                </div>
                                                <span id="userdisplay" style={{ marginTop: '20px', position: 'absolute' }}></span>
                                            </div>
                                            <div className="one">
                                                <input type="text" onKeyPress={schoolvalidate} className="form-control input2" value={schoolname} onChange={(e) =>setSchoolname(e.target.value)}
                                                    placeholder="" id="schoolname" name="schoolname" />
                                                <div className="placeholder">
                                                    <i className="fa-solid fa-school"></i><span>School Name</span><span
                                                        id="regspan">*</span>
                                                </div>
                                                <span id="schoolnamedisplay"
                                                    style={{ marginTop: '20px', position: 'absolute' }}></span>
                                            </div>
                                        </div>

                                        <div id="registration_form">
                                            <div className="one">
                                                <input type="text" onKeyPress={mobilevalidate} className="form-control input1" value={mobilenumber} onChange={(e) =>setMobilenumber(e.target.value)}
                                                    placeholder="" id="mobilenumber" name="mobilenumber" />
                                                <div className="placeholder">
                                                    <i className="fa-solid fa-phone"></i><span>Mobile number</span><span
                                                        id="regspan">*</span>
                                                </div>
                                                <span id="mobiledisplay" style={{ marginTop: '20px', position: 'absolute' }}></span>
                                            </div>
                                            <div className="one">
                                                <input type="text" onKeyPress={whatsappvalidate} className="form-control input2" value={whatsappnumber} onChange={(e) =>setWhatsappnumber(e.target.value)}
                                                    placeholder="" id="whatsappnumber" name="whatsappnumber" />
                                                <div className="placeholder">
                                                    <i className="fa-brands fa-whatsapp"></i><span>whatapp number</span><span
                                                        id="regspan">*</span>
                                                </div>
                                                <span id="whatsappdisplay" style={{ marginTop: '20px', position: 'absolute' }}></span>
                                            </div>
                                        </div>

                                        <div id="registration_form">
                                            <div className="one">
                                                <input type="email" className="form-control input1" value={email} onChange={(e) =>setEmail(e.target.value)}
                                                    placeholder="" id="email" name="email" />
                                                <div className="placeholder">
                                                    <i className="fa-solid fa-phone"></i><span>Email Id</span><span
                                                        id="regspan">*</span>
                                                </div>
                                                <span id="alterdisplay" style={{ marginTop: '20px', position: 'absolute' }}></span>
                                            </div>
                                            <div className="one">
                                                <input type="text" onKeyPress={tenpercentvalidate} className="form-control input2" value={tennumber} onChange={(e) =>setTennumber(e.target.value)}
                                                    placeholder="" id="tenpercante" name="tenpercante" />
                                                <div className="placeholder">
                                                    <i className="fa-solid fa-user-graduate"></i><span>10th %</span><span
                                                        id="regspan">*</span>
                                                </div>
                                                <span id="tenpercentdisplay"
                                                    style={{ marginTop: '20px', position: 'absolute' }}></span>
                                            </div>
                                        </div>

                                        <div id="registration_form">
                                            <div className="one">
                                                <input type="text" onKeyPress={twelvepercentvalidate} value={twelvenumber} onChange={(e) =>setTwelvenumber(e.target.value)}
                                                    className="form-control input1" placeholder="" id="twelthpercante"
                                                    name="twelthpercante" />
                                                <div className="placeholder">
                                                    <i className="fa-solid fa-user-graduate"></i><span>12th %</span><span
                                                        id="regspan">*</span>
                                                </div>
                                                <span id="twelvepercentdisplay"
                                                    style={{ marginTop: '20px', position: 'absolute' }}></span>
                                            </div>
                                            <div className="one">
                                                <input type="text" onKeyPress={cityvalidate} className="form-control input2" value={city} onChange={(e) =>setCity(e.target.value)}
                                                    placeholder="" id="city" name="city" />
                                                <div className="placeholder">
                                                    <i className="fa-solid fa-city"></i><span>City</span><span id="regspan">*</span>
                                                </div>
                                                <span id="citydisplay" style={{ marginTop: '20px', position: 'absolute' }}></span>
                                            </div>
                                        </div>

                                        <div id="registration_form">
                                            <div className="one">
                                                <select id="category" name="category" value={category} onChange={(e) =>setCategory(e.target.value)}>
                                                    <option value=" ">Choose Category</option>
                                                    <option value="OBC">OBC</option>
                                                    <option value="ST/SC">ST/SC</option>
                                                    <option value="General">General</option>
                                                </select>
                                            </div>
                                            {/* <!-- <span id="categorydisplay"></span> --> */}
                                            <div className="one">
                                                <select id="course" name="course" value={course} onChange={(e) =>setCourse(e.target.value)}>
                                                    <option value=" ">Choose Cources</option>
                                                    <option value="BA">BA-Bachlor of Arts</option>
                                                    <option value="BSC">BSc - Bachelor of Science</option>
                                                    <option value="BCom">BCom - Bachelor of Commerce</option>
                                                    <option value="BEng">4. BEng - Bachelor of Engineering</option>
                                                    <option value="BTech">BTech - Bachelor of Technology</option>
                                                    <option value="BCA">BCA - Bachelor of Computer Applications</option>
                                                    <option value="BBA">BBA - Bachelor of Business Administration</option>
                                                    <option value="BArch">BArch - Bachelor of Architecture</option>
                                                    <option value="BPharm">BPharm - Bachelor of Pharmacy</option>
                                                    <option value="BEd">BEd - Bachelor of Education</option>
                                                    <option value="BFA">BFA - Bachelor of Fine Arts</option>
                                                    <option value="BDes">BDes - Bachelor of Design</option>
                                                    <option value="BHM">BHM - Bachelor of Hotel Management</option>
                                                    <option value="BSc Nursing">BSc Nursing - Bachelor of Science in Nursing
                                                    </option>
                                                    <option value="BMM">BMM - Bachelor of Mass Media</option>
                                                    <option value="LLB">LLB - Bachelor of Laws</option>
                                                    <option value="BDS">BDS - Bachelor of Dental Surgery</option>
                                                    <option value="BAMS">BAMS - Bachelor of Ayurvedic Medicine and Surgery
                                                    </option>
                                                    <option value="BPT">BPT - Bachelor of Physiotherapy</option>
                                                    <option value="BSW">BSW - Bachelor of Social Work</option>

                                                </select>
                                            </div>
                                            {/* <!-- <span id="coursedisplay"></span> --> */}
                                        </div>

                                        <button type="button" onClick={handleUserRegistration} id="regbtn">Submit</button>
                                    </div>

                                    {/* <!-- Image Section --> */}
                                    <div className="col-md-5">
                                        <div id="registration_photo">
                                            <img src="image/p6.jpeg" id="registration_img" className="img-fluid" alt="" />
                                        </div>
                                    </div>
                                </div>

                    </Modal.Body>
                </Modal>
            </form>
        </>
    );
};

export default Header;
