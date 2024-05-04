import React from 'react'
import "./Services.css"

const Services = () => {
  return (
    <div>
      
            {/* <!-- ======= Services Section ======= --> */}
            <section id="services" className="services section-bg">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Services</h2>
                        <p>Edusahyogi offers many services regarding college counselling, placements assistance and technical
                            course
                            bootcamps.</p>
                    </div>

                    <div className="row">
                        <div className="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                            <div className="icon-box">
                                <div className="icon"><i className="fa-solid fa-person-circle-check"></i></div>
                                <h4><a href="">Personalised admission assistance</a></h4>
                                <p>Get Personalized Admission Assistance</p>
                                <p>Examination Reminders & notification in each step</p>
                                <p>Course and college selection guidence</p>
                            </div>
                        </div>

                        <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in"
                            data-aos-delay="200">
                            <div className="icon-box">
                                <div className="icon"><i className="fa-regular fa-thumbs-up"></i></div>
                                <h4><a href="">Placement assistance</a></h4>
                                <p>Our team will help student in getting placement in top MNC's.</p>
                                <p>Get in direct touch with students who already cracked placement from 8LP to 1 Crore+ per
                                    annum </p>
                            </div>
                        </div>

                        <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in"
                            data-aos-delay="300">
                            <div className="icon-box">
                                <div className="icon"><i className="fa-brands fa-edge"></i></div>
                                <h4><a href="">College Counseling</a></h4>
                                <p>Get complete overview and depth knowledge about colleges</p>
                                <p>Get guidance from faculty, alumni & industry professionals</p>
                                <p>Dedicated College Search Advisor</p>
                            </div>
                        </div>

                        <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in"
                            data-aos-delay="400">
                            <div className="icon-box">
                                <div className="icon"><i className="fa-solid fa-signal"></i></div>
                                <h4><a href="">Explore Carrer Options</a></h4>
                                <p>Over 100+ career options</p>
                                <p>Identify which career match your interest and abilities with Govt. approved psychometric test
                                </p>
                                <p>Career counselling at zero cost</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
            {/* <!-- End Services Section --> */}
            <div className="btwwhyandservice">
            </div>
    </div>
  )
}

export default Services
