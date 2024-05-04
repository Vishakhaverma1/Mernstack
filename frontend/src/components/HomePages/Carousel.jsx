import React from 'react'
import "./Carousel.css"

const Carousel = () => {
  return (
    <>
            {/* <!-- carousel --> */}
            <div id="carouseldiv">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="image/s1.png" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="image/s2.png" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="image/s3.png" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="image/s4.png" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

            </div>
            {/* <!--End of carousel --> */}
            {/* <!-- ======= Why Us Section ======= --> */}
            <section id="why-us" className="why-us section-bg">
                <div className="container-fluid" data-aos="fade-up">

                    <div className="row">

                        <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">

                            <div className="content">
                                <h3>Why us? <strong>What you can expect from us?</strong></h3>
                                <p>
                                    At Edusahyogi, we are committed to providing students with personalized help that is
                                    tailored to their
                                    unique
                                    needs and goals based on their ranks and qualifications.
                                </p>
                            </div>
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            <span>01</span>
                                            <p>Trustworthy and authentic </p>
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p> Students trust edusahyogi for its unbaised counselling and our genuine results..
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            <span>02</span>
                                            <p>Support and advice</p>
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p> Edusahyogi team guide you and provides support for your future </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            <span>03</span>
                                            <p>Unbaised experts</p>
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>
                                                Edusahyogi has a expert team of unbiased counsellors that guide you throughout,
                                                till your end
                                                results.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-5 align-items-stretch order-1 order-lg-2 img">
                            <img src="image/why-us.png" alt="" />
                        </div>
                    </div>

                </div>
            </section>
            {/* <!-- End Why Us Section --> */}

            <div className="btwwhyandservice">
            </div>
    </>
  )
}

export default Carousel
