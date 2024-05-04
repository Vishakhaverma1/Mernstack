import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2"
import './Footer.css'

const Footer = () => {
    const navigate = useNavigate();
    const[name ,setname] = useState("");
    const[email ,setemail] = useState("");
    const[subject ,setsubject] = useState("");
    const[msg ,setmessage] = useState("");

    const navigateToPrice = () => {
        navigate("/");
    };
    const API = import.meta.env.VITE_Backend_URL;

    const msgsend = async(e)=>{
        try{
            
            const data = await axios.post(
                `${API}/msg`,
                {name,email,subject,msg},
                {
                    headers : {
                        "Content-Type" : "application/json"
                    },
                    withCredentials : true,
                    timeout:30000  // Increase timeout to 10 seconds (adjust as needed)
                }
            )
            console.log(data);
            navigateToPrice();
            // resetFormFields();
            if (data.status === 200) {
                // If the response status is OK, show success message
                Swal.fire('Success!','Your message has been sent. Thank you!','success');
                // Reset form fields
                setname("");
                setemail("");
                setsubject("");
                setmessage("");
            }
        }catch(error){
            // Toast.error(error);
            Swal.fire('warning!','All fields are neccessary to fill.','warning');
            console.log("Error : ",error);
        }
    };
    
  return (

    <>
      {/* <!-- ======= Contact Section ======= --> */}
      <section id="contact" className="contact">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Contact</h2>
                        <p>---</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-5 d-flex align-items-stretch">
                            <div className="info">
                                <div className="address">
                                    <i className="fa-solid fa-location-dot"></i>
                                    <h4>Location:</h4>
                                    <p>101, Ranawat Trade Center, MP SH 27, Bhanwar Kuwa, Indore, Madhya Pradesh 452014</p>
                                </div>

                                <div className="email">
                                    <i className="fa-solid fa-envelope"></i>
                                    <h4>Email:</h4>
                                    <p>edusahyogi@gmail.com</p>
                                </div>

                                <div className="phone">
                                    <i className="fa-solid fa-phone"></i>
                                    <h4>Call:</h4>
                                    <p>+91 88188 22890</p>
                                </div>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.9454581413597!2d75.86502797518307!3d22.693074228544194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd2425a73051%3A0xcb452345ad5a27c6!2sEdusahyogi!5e0!3m2!1sen!2sin!4v1684585398835!5m2!1sen!2sin"
                                    frameBorder="0" style={{ border:'0', width: '100%', height: '290px'}} allowFullScreen></iframe>
                            </div>
                        </div>
                        <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                            <form method="post" role="form" className="php-email-form">
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="name">Your Name</label>
                                        <input type="text" name="name" className="form-control" id="name" required value={name} onChange={(e) =>setname(e.target.value)}/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="name">Your Email</label>
                                        <input type="email" className="form-control" name="email" id="email" required  value={email} onChange={(e) =>setemail(e.target.value)}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Subject</label>
                                    <input type="text" className="form-control" name="subject" id="subject" required value={subject} onChange={(e) =>setsubject(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Message</label>
                                    <textarea className="form-control" name="message" rows="10" required value={msg} onChange={(e) =>setmessage(e.target.value)}></textarea>
                                </div>
                                <div className="my-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                                <div className="text-center"><button type="button" onClick={msgsend}>Send Message</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!--End Contact Section-- > */}
            <div style={{ height: '100px', backgroundColor: 'whitesmoke' }}>
            </div>
            <footer>
                <div className="row footerrow">
                    <div className="col fottercol">
                        <img src="image/Edusahyogi .jpg" className="logo" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quidem.</p>
                    </div>
                    <div className="col fottercol">
                        <h4>Office <div className="underline"><span> </span></div>
                        </h4>
                        <p>Address, ipsum.</p>
                        <p>Lorem, ipsum dolor.</p>
                        <p>Lorem, ipsum dolor.</p>
                        <p className="email-id">email</p>
                        <h6>+91 phone number</h6>
                    </div>
                    <div className="col fottercol">
                        <h4>Links <div className="underline"><span> </span></div>
                        </h4>
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Contact</a></li>
                            <li><a href="">Services</a></li>
                            <li><a href="">Blog</a></li>
                        </ul>
                    </div>
                    <div className="col fottercol">
                        <h4>Newsletter <div className="underline"><span> </span></div>
                        </h4>
                        <form action="" id="footerform">
                            <i className="fa-regular fa-envelope"></i>
                            <input type="email" placeholder="Enter your email id" required />
                            <button type="submit"><i className="fa-solid fa-arrow-right"></i></button>
                        </form>
                        <div className="social-icons">
                            <a href=""><i className="fa-brands fa-twitter"></i></a>
                            <a href=""><i className="fa-brands fa-facebook"></i></a>
                            <a href=" https://www.instagram.com/edusahyogi?igsh=ODBtc3BxaWc3Ynhy"><i
                                className="fa-brands fa-square-instagram"></i></a>
                            <a href=""><i className="fa-brands fa-square-whatsapp"></i></a>
                            <a href=""><i className="fa-brands fa-linkedin"></i></a>
                            <a href=" https://youtube.com/@Studentsahyogi?si=F_2gGWbz_rCgpHRv"><i
                                className="fa-brands fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="container-fluied" style={{backgroundColor: 'rgba(40, 58, 90, 0.9)', height: '50px'}}>
                <p className="copyright">Edusahyogi @ 2024 - All Rights Reserved</p>
            </div>
    </>
  )
}

export default Footer
