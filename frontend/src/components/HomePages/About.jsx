import React from 'react'
import "./About.css"
const About = () => {
    return (
        <>
            {/* <!-- ======= About Us Section ======= --> */}
            <section id="about" className="about">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>About Us</h2>
                    </div>

                    <div className="row content" style={{ backgroundColor: '#f2fafe', padding: '40px' }}>
                        <div className="col-lg-6">
                            <p>
                                Our mission is to transform the academic landscape by providing thorough education and
                                consulting
                                services.
                            </p>
                            <ul>
                                <li><i className="fa-solid fa-check-double"></i>The key factor that sets us apart is our commitment
                                    to
                                    transparency and integrity</li>
                                <li><i className="fa-solid fa-check-double"></i> We believe in being
                                    upfront and honest with our clients about their chances of admission to different colleges,
                                    and we work
                                    tirelessly to help them improve their applications and maximize their chances of success.
                                </li>
                                <li><i className="fa-solid fa-check-double"></i> With our expertise and resources, we empower
                                    students to
                                    achieve their goals and realize their full potential.</li>
                            </ul>
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0">
                            <p>
                                Our
                                team works closely with students to help them navigate their path towards the best universities.
                                We
                                believe
                                that every student deserves access to personalized guidance and support throughout their
                                educational
                                journey, and we strive to make this a reality.
                            </p>
                            <a href="#" className="btn-learn-more">Learn More</a>
                        </div>
                    </div>

                </div>
            </section>
            {/* <!-- End About Us Section --> */}
        </>
    )
}

export default About

