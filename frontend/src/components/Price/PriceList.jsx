import React from 'react'
import './PriceList.css';

const PriceList = () => {

    
    return (
        <>
            <div className="container-fluid" id="pricecontainer">
                <h2>Choose your plan</h2>
                <div className="price-row">
                    <div className="price-col">
                        <p>Course Counseling</p>
                        {/* <!-- <h3>299 rupee<span>/month</span></h3> --> */}
                        <h3>299 rupee</h3>
                        <ul>
                            <li>1:1 Video Connect</li>
                            <li>Course Guidence</li>
                            <li>College Admission</li>
                            <li>Student Thoughts Solve</li>
                            <li>Scholership Base Admission</li>
                            <li className="nonvisible">College Guidence</li>
                            <li className="nonvisible">Students Thoughts Solve</li>
                            <li className="nonvisible">College Guidence</li>
                            {/* <!-- <li>Lorem ipsum dolor </li>         --> */}
                        </ul>
                        <a href="https://docs.google.com/forms/d/1hklEO5c_Tfh0jeDURtQpUoRCLoTy0c_qbh_LusdjEBE/edit" ><button>Buy Now</button></a>
                    </div>
                    <div className="price-col">
                        <p>Admission Support</p>
                        {/* <!-- <h3>19$ <span>/month</span></h3> --> */}
                        <h3>799 rupee</h3>
                        <ul>
                            <li>1:1 Video Connect</li>
                            <li>MPDTE Counseling</li>
                            <li>E-Pravesh Counseling</li>
                            <li>Course Guidence</li>
                            <li>College Guidence</li>
                            <li>Students Thoughts Solve</li>
                            <li className="nonvisible">College Guidence</li>
                            <li className="nonvisible">Students Thoughts Solve</li>
                        </ul>
                        <a href="https://docs.google.com/forms/d/1hrDPyA1bdNH9GyoNBkU1R5dp07HhF6wxEMbbJK1wcdE/edit" ><button>Buy Now</button></a>
                    </div>
                    <div className="price-col">
                        <p>Premium</p>
                        {/* <!-- <h3>19$ <span>/month</span></h3> --> */}
                        <h3>1399 rupee</h3>
                        <ul>
                            <li>1:1 Video Connect</li>
                            <li>College Admission</li>
                            <li>MPDTE Counseling</li>
                            <li>E-Pravesh Counseling</li>
                            <li>Career Guidence</li>
                            <li>Check college reality</li>
                            <li>Expert Connect</li>
                            <li>College Alumni Session</li>
                        </ul>
                        <a href="https://docs.google.com/forms/d/1HvOnX3ufniUYSbn9A0IaynMqv4svOgBuvIGlhWmtajA/edit" ><button>Buy Now</button></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PriceList

