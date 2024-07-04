import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import headerImage from '../Assets/images/header.png';
import about1 from '../Assets/images/T5.png'
import about2 from '../Assets/images/T4.png'
import class1 from '../Assets/images/T2.png'
import class2 from '../Assets/images/T3.png'
import class3 from '../Assets/images/T1.png'
import team1 from '../Assets/images/AI1.png'
import team2 from '../Assets/images/AI3.png'
import team3 from '../Assets/images/AI4.png'
import team4 from '../Assets/images/AI2.png'
import blog1 from '../Assets/images/blog-1.jpg'
import blog2 from '../Assets/images/blog-2.jpg'
import blog3 from '../Assets/images/blog-3.jpg'
import logo from '../Assets/images/schoolLogo.png'


function Home() {
    const [open, setOpen] = useState(false);
    const [isZoomed, setIsZoomed] = useState(false);
    let gotoTop = (secID) => {
        const element = document.getElementById(secID);
        const navbarElement = document.querySelector('.navbar>.container-fluid');

        if (navbarElement) {
            var navHeight = navbarElement.clientHeight;
        }
        console.log(element)
        if (element) {
            const topPosition = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top: topPosition - navHeight, behavior: 'smooth' });
        }
    }
    const handleZoom = () => {
        setIsZoomed(!isZoomed);
    };
    gotoTop();

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className='overflow-hidden'>

            {/* nav sec */}
            <div className="container-fluid bg-light shadow nav-name">
                <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0 px-lg-5">
                    {/* <a href="/" className="navbar-brand font-weight-bold text-secondary" style={{ fontSize: '50px' }}>
                        <i className="flaticon-043-teddy-bear"></i>
                        <span className="text-primary">Learnfast</span>
                    </a> */}
                    <a class="navbar-brand " href="index.html">
                        <img src={logo} alt="logo" class="logo1" /></a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse"
                        aria-controls="navbarCollapse"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav font-weight-bold mx-auto py-0">
                            <a href="#home" className="nav-item nav-link">Home</a>
                            <a href="#about" className="nav-item nav-link" onClick={() => gotoTop('about')}>About</a>
                            <a href="#classes" className="nav-item nav-link" onClick={() => gotoTop('classes')}>Classes</a>
                            <a href="#teacher" className="nav-item nav-link" onClick={() => gotoTop('teacher')}>Teachers</a>
                            {/* <a href="#blog" className="nav-item nav-link" onClick={() => gotoTop('blog')}>Blog</a> */}
                            <a href="#contact" className="nav-item nav-link" onClick={() => gotoTop('contact')}>Contact</a>
                        </div>
                        <a href="#" className="btn btn-primary px-4">Join Class</a>
                    </div>
                </nav>
            </div>

            {/* header sec */}
            <div className="container-fluid bg-primary px-0 px-md-5 my-5 pt-5 pt-lg-0" id='home'>
                <div className="row align-items-center px-3">
                    <div className="col-lg-6 text-center text-lg-left">
                        <h4 className="text-white mb-4 mt-5 mt-lg-0">Kids Learning Center</h4>
                        <h1 className="display-3 font-weight-bold text-white">New Approach to Kids Education</h1>
                        <p className="text-white mb-4">Ditch the textbooks and embrace the thrill of discovery at LearnFast! Our innovative approach to education sparks
                            a love of learning in curious young minds. We go beyond the basics, fostering confident learners through a
                            dynamic curriculum that ignites creativity and celebrates individuality. Let your child blossom at LearnFast –
                            where every day is an exciting adventure!</p>
                        <a href="" className="btn btn-secondary bg-dark mt-1 py-3 px-5">Learn More</a>
                    </div>
                    <div className="col-lg-6 text-center text-lg-right">
                        <img className="img-fluid mt-5" src={headerImage} alt="Header" />
                    </div>
                </div>
            </div>

            {/* Facilities sec */}
            <div className="container-fluid pt-5">
                <div className="container pb-3">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 pb-1">
                            <div className="d-flex bg-light shadow-sm border-top rounded mb-4" style={{ padding: '30px' }}>
                                <i className="flaticon-050-fence h1 font-weight-normal text-primary mb-3"></i>
                                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="" fill="currentColor" class="bi bi-radioactive" viewBox="0 0 16 16">
                                    <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8" />
                                    <path d="M9.653 5.496A3 3 0 0 0 8 5c-.61 0-1.179.183-1.653.496L4.694 2.992A5.97 5.97 0 0 1 8 2c1.222 0 2.358.365 3.306.992zm1.342 2.324a3 3 0 0 1-.884 2.312 3 3 0 0 1-.769.552l1.342 2.683c.57-.286 1.09-.66 1.538-1.103a6 6 0 0 0 1.767-4.624zm-5.679 5.548 1.342-2.684A3 3 0 0 1 5.005 7.82l-2.994-.18a6 6 0 0 0 3.306 5.728ZM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
                                </svg>
                                <div className="pl-4">
                                    <h4>Play Ground</h4>
                                    <p className="m-0">Fun-filled learning adventures begin at our playground!..</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 pb-1">
                            <div className="d-flex bg-light shadow-sm border-top rounded mb-4" style={{ padding: '30px' }}>
                                <i className="flaticon-022-drum h1 font-weight-normal text-primary mb-3"></i>
                                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="" fill="currentColor" class="bi bi-radioactive" viewBox="0 0 16 16">
                                    <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8" />
                                    <path d="M9.653 5.496A3 3 0 0 0 8 5c-.61 0-1.179.183-1.653.496L4.694 2.992A5.97 5.97 0 0 1 8 2c1.222 0 2.358.365 3.306.992zm1.342 2.324a3 3 0 0 1-.884 2.312 3 3 0 0 1-.769.552l1.342 2.683c.57-.286 1.09-.66 1.538-1.103a6 6 0 0 0 1.767-4.624zm-5.679 5.548 1.342-2.684A3 3 0 0 1 5.005 7.82l-2.994-.18a6 6 0 0 0 3.306 5.728ZM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
                                </svg>
                                <div className="pl-4">
                                    <h4>Arts & Crafts</h4>
                                    <p className="m-0">Get creative and explore at LearnFast's Arts & Crafts!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 pb-1">
                            <div className="d-flex bg-light shadow-sm border-top rounded mb-4" style={{ padding: '30px' }}>
                                <i className="flaticon-030-crayons h1 font-weight-normal text-primary mb-3"></i>
                                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="" fill="currentColor" class="bi bi-radioactive" viewBox="0 0 16 16">
                                    <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8" />
                                    <path d="M9.653 5.496A3 3 0 0 0 8 5c-.61 0-1.179.183-1.653.496L4.694 2.992A5.97 5.97 0 0 1 8 2c1.222 0 2.358.365 3.306.992zm1.342 2.324a3 3 0 0 1-.884 2.312 3 3 0 0 1-.769.552l1.342 2.683c.57-.286 1.09-.66 1.538-1.103a6 6 0 0 0 1.767-4.624zm-5.679 5.548 1.342-2.684A3 3 0 0 1 5.005 7.82l-2.994-.18a6 6 0 0 0 3.306 5.728ZM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
                                </svg>
                                <div className="pl-4">
                                    <h4>Safe Transportation</h4>
                                    <p className="m-0">Worry-free drop-off and pick-up: Safe and reliable transportation available.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 pb-1">
                            <div className="d-flex bg-light shadow-sm border-top rounded mb-4" style={{ padding: '30px' }}>
                                <i className="flaticon-017-toy-car h1 font-weight-normal text-primary mb-3"></i>
                                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="" fill="currentColor" class="bi bi-radioactive" viewBox="0 0 16 16">
                                    <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8" />
                                    <path d="M9.653 5.496A3 3 0 0 0 8 5c-.61 0-1.179.183-1.653.496L4.694 2.992A5.97 5.97 0 0 1 8 2c1.222 0 2.358.365 3.306.992zm1.342 2.324a3 3 0 0 1-.884 2.312 3 3 0 0 1-.769.552l1.342 2.683c.57-.286 1.09-.66 1.538-1.103a6 6 0 0 0 1.767-4.624zm-5.679 5.548 1.342-2.684A3 3 0 0 1 5.005 7.82l-2.994-.18a6 6 0 0 0 3.306 5.728ZM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
                                </svg>
                                <div className="pl-4">
                                    <h4>Healthy food</h4>
                                    <p className="m-0">Fueling young minds and bodies: Nutritious meals and healthy snacks served daily.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 pb-1">
                            <div className="d-flex bg-light shadow-sm border-top rounded mb-4" style={{ padding: '30px' }}>
                                <i className="flaticon-025-sandwich h1 font-weight-normal text-primary mb-3"></i>
                                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="" fill="currentColor" class="bi bi-radioactive" viewBox="0 0 16 16">
                                    <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8" />
                                    <path d="M9.653 5.496A3 3 0 0 0 8 5c-.61 0-1.179.183-1.653.496L4.694 2.992A5.97 5.97 0 0 1 8 2c1.222 0 2.358.365 3.306.992zm1.342 2.324a3 3 0 0 1-.884 2.312 3 3 0 0 1-.769.552l1.342 2.683c.57-.286 1.09-.66 1.538-1.103a6 6 0 0 0 1.767-4.624zm-5.679 5.548 1.342-2.684A3 3 0 0 1 5.005 7.82l-2.994-.18a6 6 0 0 0 3.306 5.728ZM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
                                </svg>
                                <div className="pl-4">
                                    <h4>Educational Tour</h4>
                                    <p className="m-0">Expanding young minds beyond the classroom: Engaging educational tours spark real-world
                                        curiosity!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 pb-1">
                            <div className="d-flex bg-light shadow-sm border-top rounded mb-4" style={{ padding: '30px' }}>
                                <i className="flaticon-047-backpack h1 font-weight-normal text-primary mb-3"></i>
                                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="" fill="currentColor" class="bi bi-radioactive" viewBox="0 0 16 16">
                                    <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8" />
                                    <path d="M9.653 5.496A3 3 0 0 0 8 5c-.61 0-1.179.183-1.653.496L4.694 2.992A5.97 5.97 0 0 1 8 2c1.222 0 2.358.365 3.306.992zm1.342 2.324a3 3 0 0 1-.884 2.312 3 3 0 0 1-.769.552l1.342 2.683c.57-.286 1.09-.66 1.538-1.103a6 6 0 0 0 1.767-4.624zm-5.679 5.548 1.342-2.684A3 3 0 0 1 5.005 7.82l-2.994-.18a6 6 0 0 0 3.306 5.728ZM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
                                </svg>
                                <div className="pl-4">
                                    <h4>Music & Dance</h4>
                                    <p className="m-0">Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero lorem amet elitr vero...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* about sec */}
            <div className="container-fluid py-5" id='about'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <img className="img-fluid rounded mb-5 mb-lg-0" src={about1} alt="" />
                        </div>
                        <div className="col-lg-7">
                            <p className="section-title pr-5"><span className="pr-2">Learn About Us</span></p>
                            <h1 className="mb-4">Best School For Your Kids</h1>
                            <p>Wondering where your child's curiosity can truly flourish? Look no further than LearnFast! We cultivate a nurturing
                                environment where passionate educators guide young minds on a journey of discovery.</p>
                            <div className="row pt-2 pb-4">
                                <div className="col-6 col-md-4">
                                    <img className="img-fluid rounded" src={about2} alt="" />
                                </div>
                                <div className="col-6 col-md-8">
                                    <ul className="list-inline m-0">
                                        <li className="py-2 border-top border-bottom"><i className="fa fa-check text-primary mr-3"></i>Personalized attention</li>
                                        <li className="py-2 border-bottom"><i className="fa fa-check text-primary mr-3"></i>Engaging activities</li>
                                        <li className="py-2 border-bottom"><i className="fa fa-check text-primary mr-3"></i>Unlocking potential</li>
                                    </ul>
                                </div>
                            </div>
                            <a href="#" className="btn btn-primary mt-2 py-2 px-4">Learn More</a>
                        </div>

                    </div>
                </div>
            </div>

            {/* popularclass sec */}
            <div className="container-fluid pt-5" id='classes'>
                <div className="container">
                    <div className="text-center pb-2">
                        <p className="section-title px-5"><span className="px-2">Popular Classes</span></p>
                        <h1 className="mb-4">Classes for Your Kids</h1>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 mb-5">
                            <div className="card border-0 bg-light shadow-sm pb-2">
                                <img className="card-img-top mb-2" src={class1} alt="" />
                                <div className="card-body text-center">
                                    <h4 className="card-title">Drawing Class</h4>
                                    <p className="card-text">Unleash your child's inner artist with LearnFast's exciting Drawing Class!</p>
                                </div>
                                <div className="card-footer bg-transparent py-4 px-5">
                                    <div className="row border-bottom">
                                        <div className="col-6 py-1 text-right border-right"><strong>Age of Kids</strong></div>
                                        <div className="col-6 py-1">3 - 6 Years</div>
                                    </div>
                                    <div className="row border-bottom">
                                        <div className="col-6 py-1 text-right border-right"><strong>Total Seats</strong></div>
                                        <div className="col-6 py-1">40 Seats</div>
                                    </div>
                                    <div className="row border-bottom">
                                        <div className="col-6 py-1 text-right border-right"><strong>Class Time</strong></div>
                                        <div className="col-6 py-1">08:00 - 10:00</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6 py-1 text-right border-right"><strong>Tution Fee</strong></div>
                                        <div className="col-6 py-1">₹1500 / Month</div>
                                    </div>
                                </div>
                                <a href="#" className="btn btn-primary px-4 mx-auto mb-4">Join Now</a>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-5">
                            <div className="card border-0 bg-light shadow-sm pb-2">
                                <img className="card-img-top mb-2" src={class2} alt="" />
                                <div className="card-body text-center">
                                    <h4 className="card-title">Language Learning</h4>
                                    <p className="card-text">Explore the world, one language at a time! LearnFast offers engaging Language Learning programs.</p>
                                </div>
                                <div className="card-footer bg-transparent py-4 px-5">
                                    <div className="row border-bottom">
                                        <div className="col-6 py-1 text-right border-right"><strong>Age of Kids</strong></div>
                                        <div className="col-6 py-1">3 - 6 Years</div>
                                    </div>
                                    <div className="row border-bottom">
                                        <div className="col-6 py-1 text-right border-right"><strong>Total Seats</strong></div>
                                        <div className="col-6 py-1">40 Seats</div>
                                    </div>
                                    <div className="row border-bottom">
                                        <div className="col-6 py-1 text-right border-right"><strong>Class Time</strong></div>
                                        <div className="col-6 py-1">08:00 - 10:00</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6 py-1 text-right border-right"><strong>Tution Fee</strong></div>
                                        <div className="col-6 py-1">₹1700 / Month</div>
                                    </div>
                                </div>
                                <a href="#" className="btn btn-primary px-4 mx-auto mb-4">Join Now</a>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-5">
                            <div className="card border-0 bg-light shadow-sm pb-2">
                                <img className="card-img-top mb-2" src={class3} alt="" />
                                <div className="card-body text-center">
                                    <h4 className="card-title">Basic Science</h4>
                                    <p className="card-text">Uncover the magic of science! LearnFast's Basic Science program ignites a love for discovery.</p>
                                </div>
                                <div className="card-footer bg-transparent py-4 px-5">
                                    <div className="row border-bottom">
                                        <div className="col-6 py-1 text-right border-right"><strong>Age of Kids</strong></div>
                                        <div className="col-6 py-1">3 - 6 Years</div>
                                    </div>
                                    <div className="row border-bottom">
                                        <div className="col-6 py-1 text-right border-right"><strong>Total Seats</strong></div>
                                        <div className="col-6 py-1">40 Seats</div>
                                    </div>
                                    <div className="row border-bottom">
                                        <div className="col-6 py-1 text-right border-right"><strong>Class Time</strong></div>
                                        <div className="col-6 py-1">08:00 - 10:00</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6 py-1 text-right border-right"><strong>Tution Fee</strong></div>
                                        <div className="col-6 py-1">₹1300 / Month</div>
                                    </div>
                                </div>
                                <a href="#" className="btn btn-primary px-4 mx-auto mb-4">Join Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Registration sec */}
            <div className="container-fluid py-5 my-5" >
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7 mb-5 mb-lg-0">
                            <p className="section-title pr-5"><span className="pr-2">Book A Seat</span></p>
                            <h1 className="mb-4">Book A Seat For Your Kid</h1>
                            <p>Uncover the magic of science! LearnFast's Basic Science program ignites a love for discovery.
                                Secure your child's spot at LearnFast's exciting adventure!
                            </p>
                            <ul className="list-inline m-0">
                                <li className="py-2"><i className="fa fa-check text-success mr-3"></i>Small class sizes for personalized attention</li>
                                <li className="py-2"><i className="fa fa-check text-success mr-3"></i>Interactive learning ignites a love of discovery</li>
                                <li className="py-2"><i className="fa fa-check text-success mr-3"></i>Nurturing environment fosters confidence and growth</li>
                            </ul>
                            <a href="#" className="btn btn-primary mt-4 py-2 px-4">Book Now</a>
                        </div>
                        <div className="col-lg-5">
                            <div className="card border-0">
                                <div className="card-header bg-dark text-center p-4">
                                    <h1 className="text-white m-0">Book A Seat</h1>
                                </div>
                                <div className="card-body rounded-bottom bg-primary p-5">
                                    <form>
                                        <div className="form-group">
                                            <input type="text" className="form-control border-0 p-4" placeholder="Your Name" required="required" />
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control border-0 p-4" placeholder="Your Email" required="required" />
                                        </div>
                                        <div className="form-group">
                                            <select className="custom-select border-0 px-4" style={{ height: '47px' }}>
                                                <option selected>Select A Class</option>
                                                <option value="1">Class 1</option>
                                                <option value="2">Class 2</option>
                                                <option value="3">Class 3</option>
                                            </select>
                                        </div>
                                        <div>
                                            <button className="btn btn-secondary bg-dark btn-block border-0 py-3" type="submit">Book Now</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* team sec */}
            <div className="container-fluid pt-5" id='teacher'>
                <div className="container">
                    <div className="text-center pb-2">
                        <p className="section-title px-5"><span className="px-2">Our Teachers</span></p>
                        <h1 className="mb-4">Meet Our Teachers</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-3 text-center team mb-5">
                            <div className="position-relative overflow-hidden mb-4" style={{ borderRadius: '100%' }}>
                                <img className="img-fluid w-100" src={team1} alt="" />
                                <div className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                                    <a className="btn btn-outline-light text-center mr-2 px-0" style={{ width: '38px', height: '38px' }} href="#"><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-outline-light text-center mr-2 px-0" style={{ width: '38px', height: '38px' }} href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-outline-light text-center px-0" style={{ width: '38px', height: '38px' }} href="#"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                            <h4>Priya</h4>
                            <i>Music Teacher</i>
                        </div>
                        <div className="col-md-6 col-lg-3 text-center team mb-5">
                            <div className="position-relative overflow-hidden mb-4" style={{ borderRadius: '100%' }}>
                                <img className="img-fluid w-100" src={team2} alt="" />
                                <div className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                                    <a className="btn btn-outline-light text-center mr-2 px-0" style={{ width: '38px', height: '38px' }} href="#"><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-outline-light text-center mr-2 px-0" style={{ width: '38px', height: '38px' }} href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-outline-light text-center px-0" style={{ width: '38px', height: '38px' }} href="#"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                            <h4>Aravind</h4>
                            <i>Language Teacher</i>
                        </div>
                        <div className="col-md-6 col-lg-3 text-center team mb-5">
                            <div className="position-relative overflow-hidden mb-4" style={{ borderRadius: '100%' }}>
                                <img className="img-fluid w-100" src={team3} alt="" />
                                <div className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                                    <a className="btn btn-outline-light text-center mr-2 px-0" style={{ width: '38px', height: '38px' }} href="#"><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-outline-light text-center mr-2 px-0" style={{ width: '38px', height: '38px' }} href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-outline-light text-center px-0" style={{ width: '38px', height: '38px' }} href="#"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                            <h4>Pooja Kannan</h4>
                            <i>Dance Teacher</i>
                        </div>
                        <div className="col-md-6 col-lg-3 text-center team mb-5">
                            <div className="position-relative overflow-hidden mb-4" style={{ borderRadius: '100%' }}>
                                <img className="img-fluid w-100" src={team4} alt="" />
                                <div className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                                    <a className="btn btn-outline-light text-center mr-2 px-0" style={{ width: '38px', height: '38px' }} href="#"><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-outline-light text-center mr-2 px-0" style={{ width: '38px', height: '38px' }} href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-outline-light text-center px-0" style={{ width: '38px', height: '38px' }} href="#"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                            <h4>Mohit Kumar</h4>
                            <i>Art Teacher</i>
                        </div>
                    </div>
                </div>
            </div>

            {/* blog sec */}
            {/* <div className="container-fluid pt-5" id='blog'>
                <div className="container">
                    <div className="text-center pb-2">
                        <p className="section-title px-5"><span className="px-2">Latest Blog</span></p>
                        <h1 className="mb-4">Latest Articles From Blog</h1>
                    </div>
                    <div className="row pb-3">
                        <div className="col-lg-4 mb-4">
                            <div className="card border-0 shadow-sm mb-2">
                                <img className="card-img-top mb-2" src={blog1} alt="" />
                                <div className="card-body bg-light text-center p-4">
                                    <h4 className="">Diam amet eos at no eos</h4>
                                    <div className="d-flex justify-content-center mb-3">
                                        <small className="mr-3"><i className="fa fa-user text-primary"></i> Admin</small>
                                        <small className="mr-3"><i className="fa fa-folder text-primary"></i> Web Design</small>
                                        <small className="mr-3"><i className="fa fa-comments text-primary"></i> 15</small>
                                    </div>
                                    <p>Sed kasd sea sed at elitr sed ipsum justo, sit nonumy diam eirmod, duo et sed sit eirmod kasd clita tempor dolor stet lorem. Tempor ipsum justo amet stet...</p>
                                    <a href="" className="btn btn-primary px-4 mx-auto my-2">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <div className="card border-0 shadow-sm mb-2">
                                <img className="card-img-top mb-2" src={blog2} alt="" />
                                <div className="card-body bg-light text-center p-4">
                                    <h4 className="">Diam amet eos at no eos</h4>
                                    <div className="d-flex justify-content-center mb-3">
                                        <small className="mr-3"><i className="fa fa-user text-primary"></i> Admin</small>
                                        <small className="mr-3"><i className="fa fa-folder text-primary"></i> Web Design</small>
                                        <small className="mr-3"><i className="fa fa-comments text-primary"></i> 15</small>
                                    </div>
                                    <p>Sed kasd sea sed at elitr sed ipsum justo, sit nonumy diam eirmod, duo et sed sit eirmod kasd clita tempor dolor stet lorem. Tempor ipsum justo amet stet...</p>
                                    <a href="" className="btn btn-primary px-4 mx-auto my-2">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <div className="card border-0 shadow-sm mb-2">
                                <img className="card-img-top mb-2" src={blog3} alt="" />
                                <div className="card-body bg-light text-center p-4">
                                    <h4 className="">Diam amet eos at no eos</h4>
                                    <div className="d-flex justify-content-center mb-3">
                                        <small className="mr-3"><i className="fa fa-user text-primary"></i> Admin</small>
                                        <small className="mr-3"><i className="fa fa-folder text-primary"></i> Web Design</small>
                                        <small className="mr-3"><i className="fa fa-comments text-primary"></i> 15</small>
                                    </div>
                                    <p>Sed kasd sea sed at elitr sed ipsum justo, sit nonumy diam eirmod, duo et sed sit eirmod kasd clita tempor dolor stet lorem. Tempor ipsum justo amet stet...</p>
                                    <a href="" className="btn btn-primary px-4 mx-auto my-2">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* footer sec */}
            <div className="container-fluid bg-dark text-white mt-5 py-5 px-sm-3 px-md-5" id='contact'>
                <div className="row pt-5">
                    <div className="col-lg-3 col-md-6 mb-5">
                        <a href="" className="navbar-brand font-weight-bold text-primary m-0 mb-4 p-0" style={{ fontSize: '40px', lineHeight: '40px' }}>
                            <i className="flaticon-043-teddy-bear"></i>
                            <a class="navbar-brand " href="index.html">
                        <img src={logo} alt="logo" class="logo1" /></a>
                        </a>

                        <p>

                            Secure your child's spot at LearnFast's exciting adventure!
                        </p>
                        <div className="d-flex justify-content-start mt-4">
                            <a className="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                                style={{ width: '38px', height: '38px' }} href="#"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                                style={{ width: '38px', height: '38px' }} href="#"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                                style={{ width: '38px', height: '38px' }} href="#"><i className="fab fa-linkedin-in"></i></a>
                            <a className="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                                style={{ width: '38px', height: '38px' }} href="#"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5">
                        <h3 className="text-primary mb-4">Get In Touch</h3>
                        <div className="d-flex">
                            <h4 className="fa fa-map-marker-alt text-primary"></h4>
                            <div className="pl-3">
                                <h5 className="text-white">Address</h5>
                                <p>Chennai</p>
                            </div>
                        </div>
                        <div className="d-flex">
                            <h4 className="fa fa-envelope text-primary"></h4>
                            <div className="pl-3">
                                <h5 className="text-white">Email</h5>
                                <p>Learnfast@gmail.com</p>
                            </div>
                        </div>
                        <div className="d-flex">
                            {/* <h4 className="fa fa-phone-alt text-primary"></h4>
                            <div className="pl-3">
                                <h5 className="text-white">Phone</h5>
                                <p>+012 345 67890</p>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5">
                        <h3 className="text-primary mb-4">Quick Links</h3>
                        <div className="d-flex flex-column justify-content-start">
                            <a className="text-white mb-2 quick-cls" href="#"><i className="fa fa-angle-right mr-2"></i>Home</a>
                            <a className="text-white mb-2 quick-cls" href="/#about"><i className="fa fa-angle-right mr-2"></i>About Us</a>
                            <a className="text-white mb-2 quick-cls" href="/#classes"><i className="fa fa-angle-right mr-2"></i>Our Classes</a>
                            <a className="text-white mb-2 quick-cls" href="/#teacher"><i className="fa fa-angle-right mr-2"></i>Our Teachers</a>
                            {/* <a className="text-white mb-2 quick-cls" href="#"><i className="fa fa-angle-right mr-2"></i>Our Blog</a> */}
                            <a className="text-white quick-cls" href="/#contact"><i className="fa fa-angle-right mr-2"></i>Contact Us</a>
                        </div>
                    </div>
                    {/* <div className="col-lg-3 col-md-6 mb-5">
                        <h3 className="text-primary mb-4">Newsletter</h3>
                        <form action="">
                            <div className="form-group">
                                <input type="text" className="form-control border-0 py-4" placeholder="Your Name" required="required" />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control border-0 py-4" placeholder="Your Email"
                                    required="required" />
                            </div>
                            <div>
                                <button className="btn btn-primary btn-block border-0 py-3" type="submit">Submit Now</button>
                            </div>
                        </form>
                    </div> */}
                </div>
                {/* <div className="container-fluid pt-5" style={{ borderTop: '1px solid rgba(23, 162, 184, .2)' }}>
                    <p className="m-0 text-center text-white">
                        &copy; <span className="text-white font-weight-bold">LearnFast</span>. All Rights Reserved.
                        <a className="text-primary font-weight-bold" href="https://htmlcodex.com"></a>
                    </p>
                </div> */}
                <div class="text-center pt-5"><p class="mb-0 text-white fs--1 fw-medium">All rights reserved@learnfast.co</p></div>
            </div>

        </div>

    );
}

export default Home;
