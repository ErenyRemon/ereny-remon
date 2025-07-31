import "./Home.css";
import { useState } from 'react';
import SpotlightCard from '../../components/SpotlightCard/SpotlightCard';
import { CiGlobe } from "react-icons/ci";
import { BsDatabase } from "react-icons/bs";
import { FaCode } from "react-icons/fa";
import { ChevronDown, ChevronUp } from "lucide-react";
import { IoIosLink } from "react-icons/io";
import { IoColorPaletteOutline } from "react-icons/io5";
import { IoShieldOutline } from "react-icons/io5";
import { FiZap } from "react-icons/fi";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FiGithub } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";
import { FaAward } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { BsSend } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

function Home() {

  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);


  return (
    <div className="main">
      <div className="container">
        <div className="row">
          <div id="mainDivOneID" className="mainDivOne">
            <h1>About me</h1>
            <p> Full Stack Python Developer skilled in Django,
              Flask, and Odoo, with solid experience in
              PostgreSQL, REST APIs, and server
              management. Proficient in frontend tools like
              React and Bootstrap, delivering responsive,
              scalable web apps.</p>


          </div>

          <div className="container">
            <div className="mainDivTwo">
              <SpotlightCard className="mainDivTwoSpotlightCard custom-spotlight-card" spotlightColor="#c084fc">
                <CiGlobe className="icon-large" />
                <h3>Frontend Development</h3>
                <span className="mainDivTwoSpan">React.js, UI/UX Design, Figma, TypeScript, Bootstrap CSS, jQuery</span>
              </SpotlightCard>
              <SpotlightCard className="mainDivTwoSpotlightCard custom-spotlight-card" spotlightColor="#c084fc">
                <BsDatabase className="icon-large" />
                <h3>Backend Development</h3>
                <span className="mainDivTwoSpan">Python, Django, Flask, PostgreSQL, FireBase, Odoo ERP</span>
              </SpotlightCard>
              <SpotlightCard className="mainDivTwoSpotlightCard custom-spotlight-card" spotlightColor="#c084fc">
                <FaCode className="icon-large" />
                <h3>Full Stack Development</h3>
                <span className="mainDivTwoSpan">RESTful APIs, WordPress Customization & Elementor, Data Base</span>
              </SpotlightCard>
              <SpotlightCard className="mainDivTwoSpotlightCard custom-spotlight-card" spotlightColor="#c084fc">
                <FaCode className="icon-large" />
                <h3>Tools & Technologies</h3>
                <span className="mainDivTwoSpan">Git & GitHub, Linux Server, Apache Server, Docker, VS code, WordPress</span>
              </SpotlightCard>
            </div>


            <div className="mainDivThree">
              <button className="gradient-btn">
                <a
                  href="/Ereny.Remon_CV.pdf"
                  download="Ereny.Remon_CV.pdf"
                >
                  Download CV
                </a>
              </button>
            </div>

            <div id="mainDivFourID" className="mainDivFour">
              <h2 className="mainDivFourHeader">Services</h2>
              <p className="mainDivFourParagraph">Comprehensive development Services to bring your ideas to life</p>
            </div>

            <div className="container">
              <div className="mainDivFive">
                <SpotlightCard className="mainDivFiveSpotlightCard custom-spotlight-card col-3" spotlightColor="#bb84f17a">
                  <CiGlobe className="icon-large" />
                  <h3>Frontend Development</h3>
                  <span className="mainDivTwoSpan">Modern, responsive, and user-friendly web interfaces built with React, TypeScript, Bootstrap, jQuery, and Figma for a smooth and engaging user experience.</span>
                  <ul className="custom-list">
                    <li>UX UI design & Figma</li>
                    <li>React.js</li>
                    <li>TypeScript</li>
                    <li>BootStrap</li>
                    <li>Responsive Design</li>
                  </ul>

                  <button className="mainDivFiveButton" onClick={() => setIsOpen1(!isOpen1)}>
                    Links of projects {isOpen1 ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>

                  {isOpen1 && (
                    <div className="mainDivFiveDivOne mt-4 space-y-2">
                      <div className="mainDivFiveDiv bg-white/5 rounded-lg p-3">
                        <a href="https://maven-sat.netlify.app/" className="mainDivFiveLink text-purple-400 hover:text-purple-300 font-medium">
                          <IoIosLink /> Maven sat
                        </a>
                        <p className="mainDivFiveP">
                          React.js, JavaScript (ES6), HTML5, CSS3, Framer Motion, Three.js, Vanta.js, GitHub, Netlify
                        </p>
                      </div>

                      <div className="mainDivFiveDiv bg-white/5 rounded-lg p-3">
                        <a href="https://erenyremon.github.io/Profile/" className="mainDivFiveLink text-purple-400 hover:text-purple-300 font-medium">
                          <IoIosLink /> Profile
                        </a>
                        <p className="mainDivFiveP text-gray-400 text-sm mt-1">
                          HTML5, CSS3, JavaScript (Vanilla JS), GitHub Pages
                        </p>
                      </div>

                      <div className="mainDivFiveDiv bg-white/5 rounded-lg p-3">
                        <a href="https://erenyremon.github.io/IceCream-Works/" className="mainDivFiveLink text-purple-400 hover:text-purple-300 font-medium">
                          <IoIosLink /> IceCream Website
                        </a>
                        <p className="mainDivFiveP text-gray-400 text-sm mt-1">
                          HTML5, CSS3, JavaScript (Vanilla JS), JSON, Bootstrap, GitHub Pages
                        </p>
                      </div>
                      <div className="mainDivFiveDiv bg-white/5 rounded-lg p-3">
                        <a href="https://erenyremon.github.io/Portfolio/" className="mainDivFiveLink text-purple-400 hover:text-purple-300 font-medium">
                          <IoIosLink /> Portfolio
                        </a>
                        <p className="mainDivFiveP text-gray-400 text-sm mt-1">
                          React.js, CSS3, JavaScript (ES6), GitHub Pages
                        </p>
                      </div>
                    </div>
                  )}


                </SpotlightCard>
                <SpotlightCard className="mainDivFiveSpotlightCard custom-spotlight-card col-3" spotlightColor="#bb84f17a">
                  <BsDatabase className="icon-large" />
                  <h3>Backend Development</h3>
                  <span className="mainDivTwoSpan">Robust server-side solution with Django, Flask, Databases and RESTful APIs for scalable applications.</span>
                  <ul className="custom-list">
                    <li>Django & Flask</li>
                    <li>RESTful APIs</li>
                    <li>Database Design</li>
                    <li>Authentication</li>
                    <li>API Integration</li>
                  </ul>
                  <button className="mainDivFiveButton" onClick={() => setIsOpen2(!isOpen2)}>
                    Links of projects {isOpen2 ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>

                  {isOpen2 && (
                    <div className="mainDivFiveDivOne mt-4 space-y-2">
                      <div className="mainDivFiveDiv bg-white/5 rounded-lg p-3">
                        <a href="https://erenyremon.github.io/todo-list/" className="mainDivFiveLink text-purple-400 hover:text-purple-300 font-medium">
                          <IoIosLink /> To Do List
                        </a>
                        <p className="mainDivFiveP">
                          React.js, FireBase, Google Authentication, HTML5, CSS3, JavaScript (Vanilla JS), LocalStorage, GitHub Pages
                        </p>
                      </div>
                    </div>
                  )}
                </SpotlightCard>
                <SpotlightCard className="mainDivFiveSpotlightCard custom-spotlight-card col-3" spotlightColor="#bb84f17a">
                  <FaCode className="icon-large" />
                  <h3>Full Stack Development</h3>
                  <span className="mainDivTwoSpan">Complete web sites from concept to deployment, handling both frontend and backend development</span>

                  <ul className="custom-list">
                    <li>Database Integration</li>
                    <li>User Authentication</li>
                    <li>Payment systems</li>
                    <li>Deployment</li>
                  </ul>
                  <button className="mainDivFiveButton" onClick={() => setIsOpen3(!isOpen3)}>
                    Links of projects {isOpen3 ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>

                  {isOpen3 && (
                    <div className="mainDivFiveDivOne mt-4 space-y-2">
                      <div className="mainDivFiveDiv bg-white/5 rounded-lg p-3">
                        <a href="https://erenyremon.github.io/todo-list/" className="mainDivFiveLink text-purple-400 hover:text-purple-300 font-medium">
                          <IoIosLink /> To Do List
                        </a>
                        <p className="mainDivFiveP">
                          React.js, FireBase, Google Authentication, HTML5, CSS3, JavaScript (Vanilla JS), LocalStorage, GitHub Pages
                        </p>
                      </div>
                    </div>

                  )}
                </SpotlightCard>
              </div>
            </div>

            <div className="container">
              <div className="mainDivSix">
                <SpotlightCard className="mainDivSixSpotlightCard custom-spotlight-card col-3" spotlightColor="#bb84f17a">
                  <IoColorPaletteOutline className="icon-large" />
                  <h3>UI / UX Design</h3>
                  <span className="mainDivTwoSpan">Beautiful, User-friendly interfaces with modern design principles and excellent user exeperiences.</span>
                  <ul className="custom-list">
                    <li>User Research</li>
                    <li>Wireframing</li>
                    <li>Figma</li>
                    <li>Prototyping</li>
                    <li>Design systems</li>
                    <li>User Testing</li>
                  </ul>
                </SpotlightCard>

                <SpotlightCard className="mainDivSixSpotlightCard custom-spotlight-card col-3" spotlightColor="#bb84f17a">
                  <IoShieldOutline className="icon-large" />
                  <h3>API Develiopment</h3>
                  <span className="mainDivTwoSpan">Secure and scable RESTful APIs with proper authentication, validation, and documentation.</span>
                  <ul className="custom-list">
                    <li>RESTful APIs</li>
                    <li>Authentication</li>
                    <li>Data Validation</li>
                    <li>API Documentation</li>
                    <li>Security Best Practices</li>
                  </ul>
                </SpotlightCard>

                <SpotlightCard className="mainDivSixSpotlightCard custom-spotlight-card col-3" spotlightColor="#bb84f17a">
                  <FiZap className="icon-large" />
                  <h3>Performance Optimization</h3>
                  <span className="mainDivTwoSpan">Speed up your existing websites and improve user experience with optimization techniques.</span>
                  <ul className="custom-list">
                    <li>Code Optimization</li>
                    <li>Bundle analysis</li>
                    <li>Caching strategies</li>
                    <li>Performance Monitoring</li>
                    <li>SEO</li>
                  </ul>
                </SpotlightCard>

              </div>
            </div>

            <div className="container">
              <div id='mainDivSevenID' className="mainDivSeven">
                <h2 className="mainDivSevenHeader">Projects</h2>
                <p className="mainDivSevenParagraph">A showCase of my recent projects and technical expertise</p>
              </div>
            </div>

            <div className="container">
              <div className="mainDivEight">
                <Card className="mainDivEightCard" >
                  <Card.Img variant="top" src="./01.png" />
                  <Card.Body className="mainDivEightCardBody">
                    <Card.Title>To Do List</Card.Title>
                    <Card.Text className="mainDivEightCardText">
                      A simple and practical web app to manage daily tasks. It allows you to add, delete, and save tasks.
                    </Card.Text>
                    <div className="mainDivEightCardDiv">
                      <span>React</span>
                      <span>FireBase</span>
                      <span>Bootstrap</span>
                    </div>
                    <div>
                      <Button href='https://github.com/ErenyRemon/todo-list' className="mainDivEightCardButton"><FiGithub /> Code</Button>
                      <Button href="https://erenyremon.github.io/todo-list/" className="mainDivEightCardButton"><FiExternalLink /> Live Demo</Button>
                    </div>
                  </Card.Body>
                </Card>
                <Card className="mainDivEightCard" >
                  <Card.Img variant="top" src="./06.png" />
                  <Card.Body className="mainDivEightCardBody">
                    <Card.Title>Maven sat</Card.Title>
                    <Card.Text className="mainDivEightCardText">
                      A modern, responsive website with smooth animations and an interactive 3D background.
                    </Card.Text>
                    <div className="mainDivEightCardDiv">
                      <span>React</span>
                      <span>Google Analytics</span>
                      <span>Vanta.js</span>
                      <span>Netlify</span>
                    </div>
                    <div>
                      <Button href="https://github.com/ErenyRemon/maven-sat" className="mainDivEightCardButton"><FiGithub /> Code</Button>
                      <Button href="https://maven-sat.netlify.app/" className="mainDivEightCardButton"><FiExternalLink /> Live Demo</Button>
                    </div>
                  </Card.Body>
                </Card>
                <Card className="mainDivEightCard" >
                  <Card.Img variant="top" src="./03.png" />
                  <Card.Body className="mainDivEightCardBody">
                    <Card.Title>Profile</Card.Title>
                    <Card.Text className="mainDivEightCardText">
                      A clean and responsive personal profile website.
                    </Card.Text>
                    <div className="mainDivEightCardDiv">
                      <span>GitHub Pages</span>
                      <span>HTML5</span>
                      <span>CSS3</span>
                      <span>JavaScript (Vanilla JS)</span>
                    </div>
                    <div>
                      <Button href='https://github.com/ErenyRemon/Profile' className="mainDivEightCardButton"><FiGithub /> Code</Button>
                      <Button href="https://erenyremon.github.io/Profile/" className="mainDivEightCardButton"><FiExternalLink /> Live Demo</Button>
                    </div>
                  </Card.Body>
                </Card>
                <Card className="mainDivEightCard" >
                  <Card.Img variant="top" src="./05.png" />
                  <Card.Body className="mainDivEightCardBody">
                    <Card.Title>Ice Cream</Card.Title>
                    <Card.Text className="mainDivEightCardText">
                      An interactive and visually appealing ice cream website.
                    </Card.Text>
                    <div className="mainDivEightCardDiv">
                      <span>Vanilla JavaScript</span>
                      <span>JSON</span>
                      <span>GitHub Pages</span>
                    </div>
                    <div>
                      <Button href='https://github.com/ErenyRemon/IceCream-Works' className="mainDivEightCardButton"><FiGithub /> Code</Button>
                      <Button href="https://erenyremon.github.io/IceCream-Works/" className="mainDivEightCardButton"><FiExternalLink /> <span> Live Demo </span></Button>
                    </div>
                  </Card.Body>
                </Card>
                <Card className="mainDivEightCard" >
                  <Card.Img variant="top" src="./04.png" />
                  <Card.Body className="mainDivEightCardBody">
                    <Card.Title>Portfolio</Card.Title>
                    <Card.Text className="mainDivEightCardText">
                      A personal portfolio website, showcasing projects and skills in a clean and modern design.
                    </Card.Text>
                    <div className="mainDivEightCardDiv">
                      <span>React</span>
                      <span>JavaScript (ES6)</span>
                      <span>GitHub Pages</span>
                    </div>
                    <div>
                      <Button href='https://github.com/ErenyRemon/Portfolio' className="mainDivEightCardButton"><FiGithub /> Code</Button>
                      <Button href="https://erenyremon.github.io/Portfolio/" className="mainDivEightCardButton"><FiExternalLink /> Live Demo</Button>
                    </div>
                  </Card.Body>
                </Card>
                <Card className="mainDivEightCard" >
                  <Card.Img variant="top" src="./02.png" />
                  <Card.Body className="mainDivEightCardBody">
                    <Card.Title>Appo Landing Page </Card.Title>
                    <Card.Text className="mainDivEightCardText">
                      A modern WordPress-based application site built on Pantheon, focusing on clean design, responsive layouts, and seamless content management.
                    </Card.Text>
                    <div className="mainDivEightCardDiv">
                      <span>WordPress</span>
                      <span>PSD to WordPress</span>
                      <span>pantheon</span>
                      <span>Landing Page</span>
                    </div>
                    <div>

                      <Button href="https://dev-apppo.pantheonsite.io/" className="mainDivEightCardButton"><FiExternalLink /> Live Demo</Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </div>

            <div className="container">
              <div id="mainDivNineID" className="mainDivNine">
                <h2 className="mainDivNineHeader">Extracurricular Activities</h2>
                <p className="mainDivNineParagraph">Giving your time to others is the most precious gift you can offer.</p>
              </div>
            </div>

            <div className="container">
              <div className="mainDivTen">
                <SpotlightCard className="mainDivTenSpotlightCard custom-spotlight-card col-3" spotlightColor="#bb84f17a">
                  <h3>Trained for young people</h3>
                  <p className="mainDivTenCardParagraph">UNICEF - 2023</p>
                  <span className="mainDivTenSpan">One of the Mishwari Ambassadors of the Ministry of Youth and Sports and UNICEF.</span>
                </SpotlightCard>

                <SpotlightCard className="mainDivTenSpotlightCard custom-spotlight-card col-3" spotlightColor="#bb84f17a">
                  <h3>Organizing</h3>
                  <p className="mainDivTenCardParagraph">Social Solidarity Unit - 2023</p>
                  <span className="mainDivTenSpan">Volunteer in the Social Solidarity Unit of South Valley University in the Organization Committee.</span>
                </SpotlightCard>

                <SpotlightCard className="mainDivTenSpotlightCard custom-spotlight-card col-3" spotlightColor="#bb84f17a">
                  <h3>Organizing</h3>
                  <p className="mainDivTenCardParagraph">Ana Masry - 2023</p>
                  <span className="mainDivTenSpan"> Volunteer in the Ana Masry Association in the organizing committee.</span>
                </SpotlightCard>


              </div>
            </div>

            <div className="container">
              <div className="mainDivEleven">
                <div className="mainDivElevenUp">
                  <FaGraduationCap className='mainDivElevenIcon' />
                  <h2>Education</h2>
                </div>
                <div className="mainDivElevenDown">
                  <SpotlightCard className="mainDivElevenSpotlightCard custom-spotlight-card col-9" spotlightColor="#bb84f17a">
                    <h3>Bachelor of Commerce, department of accounting</h3>
                    <p className="mainDivTenCardParagraph">South Valley University</p>
                    <span className="mainDivTenSpan">Above average 78%</span>
                  </SpotlightCard>
                  <SpotlightCard className="mainDivElevenSpotlightCard custom-spotlight-card col-9" spotlightColor="#bb84f17a">
                    <h3>Master of Business Administration (MBA)</h3>
                    <p className="mainDivTenCardParagraph">South Valley University</p>
                    <span className="mainDivTenSpan">B+ (Superior)</span>
                  </SpotlightCard>
                  <SpotlightCard className="mainDivElevenSpotlightCard custom-spotlight-card col-9" spotlightColor="#bb84f17a">
                    <h3>Software & Python Web Development</h3>
                    <p className="mainDivTenCardParagraph">Information Technology Institute (ITI)</p>

                  </SpotlightCard>

                </div>
              </div>
            </div>

            <div className="container">
              <div className="mainDivTwelve">
                <div className="mainDivTwelveUp">
                  <FaAward className="mainDivTwelveIcon" />
                  <h2>Certifications</h2>
                </div>
                <div className="mainDivTwelveDown">
                  <SpotlightCard className="mainDivTwelveSpotlightCard custom-spotlight-card col-3" spotlightColor="#bb84f17a">
                    <Card.Img variant="top" src="./08.jpg" />
                    <div className='mainDivTwelveSpotlightCardDown'>
                      <h3 className='mainDivTwelveSpotlightCardDownHeader'>Software Development</h3>
                      <p className="mainDivTwelveCardParagraph">Information Technology Institute (ITI) - 2024</p>
                    </div>
                  </SpotlightCard>

                  <SpotlightCard className="mainDivTwelveSpotlightCard custom-spotlight-card col-3" spotlightColor="#bb84f17a">
                    <Card.Img variant="top" src="./07.jpg" />
                    <div className='mainDivTwelveSpotlightCardDown'>
                      <h3>Full Stack Python Development</h3>
                      <p className="mainDivTwelveCardParagraph">Information Technology Institute (ITI) - 2025</p>
                    </div>
                  </SpotlightCard>

                  <SpotlightCard className="mainDivTwelveSpotlightCard custom-spotlight-card col-3" spotlightColor="#bb84f17a">
                    <Card.Img variant="top" src="./09.jpg" />
                    <div className='mainDivTwelveSpotlightCardDown'>
                      <h3 className='mainDivTwelveSpotlightCardDownHeader'>Coding Foundations</h3>
                      <p className="mainDivTwelveCardParagraph">Solo learn - 2025</p>
                    </div>
                  </SpotlightCard>


                </div>
              </div>
            </div>


            <div className="container">
              <div id="mainDivThirteenID" className="mainDivThirteen">
                <h2 className="mainDivThirteenHeader">Get in touch</h2>
                <p className="mainDivThirteenParagraph">Let's work together to bring your ideas to life. I'm available for freelance projects and collaborations.</p>
              </div>
            </div>


            <div className="container">
              <div className="mainDivFourteen">
                <div className="mainDivFourteenLeft">
                  <h3>Contact Information</h3>
                  <div className="mainDivFourteenLeftContact">
                    <div className="mainDivFourteenLeftIconDiv">

                      <BsSend className='mainDivFourteenLeftIcon' />
                    </div>
                    <div className='mainDivFourteenLeftDiv'>
                      <h4>Email</h4>
                      <p> <a className="mainDivFourteenLeftLink" href="mailto:erenyremon555@gmail.com">erenyremon555@gmail.com</a> </p>
                    </div>
                  </div>

                  <div className="mainDivFourteenLeftContact">
                    <div className="mainDivFourteenLeftIconDiv">
                      <FaWhatsapp className='mainDivFourteenLeftIcon' />
                    </div>
                    <div className='mainDivFourteenLeftDiv'>
                      <h4>WhatsApp & Phone</h4>
                      <p> <a className="mainDivFourteenLeftLink" href="https://wa.me/201552386355">01552386355</a> </p>
                    </div>
                  </div>

                  <div className='mainDivFourteenLeftSocial'>
                    <h3>Social Media</h3>
                    <div className='mainDivFourteenLeftSocialDiv'>
                      <a href="https://github.com/ErenyRemon" target="_blank" rel="noopener noreferrer"> <button className='mainDivFourteenLeftSocialButton'> <FaGithub /></button></a>
                      <a href="https://www.linkedin.com/in/ereny-remon" target="_blank" rel="noopener noreferrer"><button className='mainDivFourteenLeftSocialButton'> <FaLinkedinIn /></button></a>

                    </div>
                  </div>


                </div>
                <div className="mainDivFourteenRight">
                  <h3>Freelancing Platforms</h3>
                  <div className='mainDivFourteenRightDown'>
                    <SpotlightCard className="custom-spotlight-card col-12" spotlightColor="#bb84f17a">
                      <div className="mainDivFourteenDiv">
                        <h3>Up work</h3>
                        <a href="https://www.upwork.com/freelancers/~011ce4a76428ef5a7f?mp_source=share"> <FiExternalLink className="mainDivFourteenIcon" /> </a>
                      </div>
                      <span className="mainDivTwoSpan">Upwork – where opportunities meet skills.</span>

                    </SpotlightCard>

                    <SpotlightCard className="custom-spotlight-card col-12" spotlightColor="#bb84f17a">
                      <div className="mainDivFourteenDiv">
                        <h3>Mostaql</h3>
                        <a href="https://mostaql.com/u/ereny_remon555"> <FiExternalLink className="mainDivFourteenIcon" /> </a>
                      </div>
                      <span className="mainDivTwoSpan">Mostaql – Your opportunity to showcase your skills and work with clients from the Arab world with professionalism.</span>

                    </SpotlightCard>

                    <SpotlightCard className="custom-spotlight-card col-12" spotlightColor="#bb84f17a">
                      <div className="mainDivFourteenDiv">
                        <h3>Khamsat</h3>
                        <a href="https://khamsat.com/user/ereny_remon"> <FiExternalLink className="mainDivFourteenIcon" /> </a>
                      </div>
                      <span className="mainDivTwoSpan">Visit my Khamsat profile for creative, professional solutions tailored to your needs!</span>

                    </SpotlightCard>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )


}

export default Home;
