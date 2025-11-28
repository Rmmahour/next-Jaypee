import React from "react";
import Image from "next/image";
import Header from "./header";
import Footer from "./footer";

export default function SingleDoctorPage() {
    return (
        <>

        <Header />
            <section className="single_doctor_bread">
                <div className="container">
                    <div className="doctor_bread">
                        <div className="bread_img">
                            <div className="doc_img">
                                <img src="doctors/Dr-Manoj-Luthra-1.webp" alt="Doctor" />
                            </div>
                        </div>
                        <div className="breadcrumb_content">
                            <div>
                                <h1>
                                    Dr. Manoj Luthra
                                    <span>
                                        <a href="#">
                                            <svg width="28" height="29" viewBox="0 0 28 29" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M22.6219 19.0235C21.3592 19.0235 20.178 19.5934 19.3574 20.5376L11.1913 15.7102C11.4041 15.1148 11.5174 14.4839 11.5174 13.8446C11.5174 13.3144 11.4331 12.7926 11.288 12.2908L19.1779 8.26152C19.9985 9.33899 21.2543 9.98545 22.622 9.98545C25.0368 9.98545 27 7.97089 27 5.49272C27 3.01456 25.0369 1 22.622 1C20.2071 1 18.244 3.01456 18.244 5.49272C18.244 5.87692 18.2965 6.26254 18.3932 6.63538L10.5033 10.6646C9.52659 9.28238 7.971 8.45017 6.25934 8.45017C3.35958 8.45017 1 10.8716 1 13.843C1 16.8159 3.35961 19.2358 6.25934 19.2358C7.83286 19.2358 9.3152 18.5028 10.3056 17.2793L18.4717 22.1023C18.3266 22.5518 18.2424 23.0281 18.2424 23.5073C18.2424 25.9854 20.2055 28 22.6204 28C25.0352 28 26.9984 25.9854 26.9984 23.5073C26.9984 21.0291 25.0353 19.0146 22.6204 19.0146L22.6219 19.0235ZM22.6219 2.81934C24.0614 2.81934 25.2316 4.02013 25.2316 5.49737C25.2316 6.97461 24.0614 8.1754 22.6219 8.1754C21.6286 8.1754 20.7334 7.60549 20.2844 6.6868C20.1076 6.31962 20.0123 5.90991 20.0123 5.5002C20.0123 4.02296 21.1824 2.82217 22.6219 2.82217L22.6219 2.81934ZM6.26496 17.4273C4.34053 17.4273 2.7739 15.8225 2.7739 13.849C2.7739 11.8742 4.34053 10.2707 6.26496 10.2707C7.59809 10.2707 8.79309 11.0292 9.38714 12.2626C9.62752 12.7532 9.75183 13.2862 9.75183 13.8519C9.75183 14.4799 9.59296 15.0966 9.28903 15.6382C8.66598 16.7454 7.50688 17.4316 6.26492 17.4316L6.26496 17.4273ZM22.6219 26.1957C21.1824 26.1957 20.0123 24.9949 20.0123 23.5177C20.0123 23.0456 20.1325 22.5891 20.3659 22.1822C20.8287 21.3543 21.6922 20.8425 22.6219 20.8425C24.0614 20.8425 25.2316 22.0433 25.2316 23.5205C25.2316 24.9978 24.0614 26.1986 22.6219 26.1986V26.1957Z"
                                                    fill="white" stroke="white" strokeWidth="0.5"></path>
                                            </svg>
                                            Share Doctor Profile
                                        </a>
                                    </span>
                                </h1>
                                <p className="designation">
                                    Director, Department of Cardiac Surgery
                                </p>
                                <p className="education">
                                    MS, DNB, MCh (Cardiac Surgery)
                                </p>
                                <div className="breadcrumb_button_box">
                                    <a href="#" className="bread_btn">
                                        <span>
                                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M16.4971 21.1165C17.7223 21.1165 18.8971 20.6299 19.7633 19.7634C20.6297 18.8973 21.1163 17.7224 21.1163 16.4972V7.91864C21.1146 6.86694 20.7539 5.8474 20.0938 5.02853C19.4338 4.2094 18.5142 3.64024 17.4869 3.41495V1.31979C17.4869 0.848305 17.2355 0.412571 16.8272 0.176711C16.4189 -0.0589037 15.9156 -0.0589037 15.5074 0.176711C15.0991 0.412584 14.8474 0.848331 14.8474 1.31979V3.2994H11.878V1.31979C11.878 0.848305 11.6265 0.412571 11.218 0.176711C10.8097 -0.0589037 10.3067 -0.0589037 9.89838 0.176711C9.48982 0.412584 9.23835 0.848331 9.23835 1.31979V3.2994H6.26897V1.31979C6.26897 0.848305 6.01725 0.412571 5.60895 0.176711C5.20065 -0.0589037 4.69741 -0.0589037 4.28917 0.176711C3.88086 0.412584 3.6294 0.848331 3.6294 1.31979V3.41495C2.60213 3.64025 1.68253 4.2094 1.02251 5.02853C0.362489 5.8474 0.00173995 6.86688 0 7.91864V16.4972C0 17.7224 0.486592 18.8972 1.35304 19.7634C2.21921 20.6299 3.39406 21.1165 4.61924 21.1165H16.4971ZM2.63937 16.4972V7.91864C2.63937 7.39354 2.84781 6.89008 3.21911 6.51876C3.5904 6.14746 4.09385 5.93903 4.61899 5.93903H16.497C17.0221 5.93903 17.5256 6.14746 17.8969 6.51876C18.2682 6.89006 18.4767 7.3935 18.4767 7.91864V16.4972C18.4767 17.0223 18.2682 17.5258 17.8969 17.8971C17.5256 18.2684 17.0222 18.4769 16.497 18.4769H4.61899C4.09389 18.4769 3.59042 18.2684 3.21911 17.8971C2.84781 17.5258 2.63937 17.0224 2.63937 16.4972Z"
                                                    fill="white"></path>
                                                <path
                                                    d="M7.50972 14.3233C8.05521 14.8706 8.79606 15.1782 9.5686 15.1782C10.3411 15.1782 11.082 14.8706 11.6275 14.3233L14.7917 11.1624V11.1626C15.1253 10.8288 15.2554 10.3427 15.1333 9.8871C15.0112 9.43122 14.6553 9.07526 14.1997 8.9532C13.7441 8.83112 13.2577 8.96151 12.9242 9.29505L9.7632 12.4593L9.56182 12.6474L8.19267 11.2747C7.85913 10.9411 7.37277 10.8107 6.91716 10.9331C6.46153 11.0551 6.10557 11.4111 5.98351 11.8667C5.86143 12.3223 5.99157 12.8087 6.32511 13.1422L7.50972 14.3233Z"
                                                    fill="white"></path>
                                            </svg>
                                        </span>
                                        Book an Appointment
                                    </a>
                                    <a href="#" className="bread_btn">
                                        <span>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M17.6064 20.2075C16.6936 20.2075 15.9502 19.465 15.9502 18.5512C15.9502 17.6384 16.6936 16.895 17.6064 16.895C18.5193 16.895 19.2617 17.6375 19.2617 18.5512C19.2617 19.4649 18.5193 20.2075 17.6064 20.2075ZM17.6064 17.6056C17.0848 17.6056 16.6599 18.0305 16.6599 18.5521C16.6599 19.0738 17.0848 19.4987 17.6064 19.4987C18.128 19.4987 18.5521 19.0738 18.5521 18.5521C18.5521 18.0296 18.1271 17.6056 17.6064 17.6056Z"
                                                    fill="white" stroke="white" />
                                                <path
                                                    d="M17.6065 19.0543C17.3297 19.0543 17.1035 18.829 17.1035 18.5513C17.1035 18.2745 17.3288 18.0483 17.6065 18.0483C17.8833 18.0483 18.1086 18.2737 18.1086 18.5513C18.1086 18.829 17.8833 19.0543 17.6065 19.0543ZM17.6065 18.3446C17.4921 18.3446 17.3989 18.4378 17.3989 18.5513C17.3989 18.6657 17.4921 18.758 17.6065 18.758C17.7209 18.758 17.8132 18.6649 17.8132 18.5513C17.8132 18.4378 17.72 18.3446 17.6065 18.3446Z"
                                                    fill="white" stroke="white" />
                                                <path
                                                    d="M5.36145 21.4167C4.90637 21.4167 4.4779 21.2401 4.15499 20.919C3.83031 20.5961 3.65022 20.1668 3.64845 19.7081C3.64313 18.4848 4.96846 17.0992 5.75975 16.3816C6.11282 16.0614 6.64775 16.0587 7.00436 16.3754C7.80186 17.0851 9.14139 18.4592 9.1467 19.6833C9.14848 20.141 8.97194 20.5731 8.64993 20.8986C8.32702 21.2242 7.89767 21.4043 7.43904 21.407H7.43727C7.24211 21.407 7.08332 21.249 7.08243 21.0539C7.08154 20.8578 7.23945 20.6982 7.4355 20.6973C7.70429 20.6964 7.95623 20.5899 8.14518 20.3992C8.33412 20.2085 8.43793 19.9548 8.43704 19.6869C8.43438 19.0047 7.72205 17.965 6.53245 16.9068C6.4464 16.8305 6.32132 16.8313 6.23704 16.9085C5.05809 17.9775 4.35549 19.0234 4.35906 19.7064C4.35995 19.9752 4.46551 20.2271 4.65624 20.416C4.84519 20.6041 5.09624 20.707 5.36238 20.707H5.36859C5.56375 20.707 5.72254 20.8649 5.72342 21.0601C5.72431 21.2561 5.56641 21.4158 5.37036 21.4167L5.36145 21.4167Z"
                                                    fill="white" stroke="white" />
                                                <path
                                                    d="M11.9994 12.3549C10.4221 12.3549 7.20898 9.26429 7.20898 5.67865C7.20898 3.09906 9.35753 1 11.9994 1C14.6412 1 16.7898 3.09888 16.7898 5.67865C16.7898 9.26429 13.5768 12.3549 11.9994 12.3549ZM11.9994 1.70968C9.74879 1.70968 7.91866 3.49007 7.91866 5.67865C7.91866 8.93523 10.8816 11.6452 11.9994 11.6452C13.1171 11.6452 16.0801 8.935 16.0801 5.67865C16.0801 3.49019 14.2491 1.70968 11.9994 1.70968Z"
                                                    fill="white" stroke="white" />
                                                <path
                                                    d="M21.5488 23.0003H2.45129C1.65113 23.0003 1 22.3492 1 21.549V18.2064C1 15.231 3.41995 12.811 6.39537 12.811H7.93182C8.53326 12.811 9.10189 13.0736 9.49223 13.5305L11.9176 16.3719C11.9442 16.403 11.9771 16.4083 11.9957 16.4083C12.0054 16.4136 12.0471 16.4039 12.0746 16.371L14.4122 13.5537C14.8025 13.0826 15.3782 12.8121 15.9903 12.8121H17.6057C20.5802 12.8112 23.0002 15.232 23.0002 18.2065V21.5492C23.0002 22.3493 22.3489 23.0003 21.5488 23.0003ZM6.39528 13.5208C3.81205 13.5208 1.70959 15.6233 1.70959 18.2065V21.5492C1.70959 21.9581 2.04224 22.2908 2.4512 22.2908H21.5487C21.9577 22.2908 22.2903 21.9581 22.2903 21.5492V18.2065C22.2903 15.6233 20.1879 13.5208 17.6046 13.5208H15.9892C15.5882 13.5208 15.2121 13.6974 14.9566 14.0061L12.6191 16.8244C12.4656 17.0089 12.2394 17.1162 11.9999 17.118H11.9946C11.7568 17.118 11.5315 17.0142 11.3771 16.8332L8.95175 13.9927C8.69627 13.6938 8.32458 13.5226 7.93158 13.5226L6.39528 13.5208Z"
                                                    fill="white" stroke="white" />
                                                <path d="M6.04004 13.1655H6.74972V16.4948H6.04004V13.1655Z" fill="white"
                                                    stroke="white" />
                                                <path d="M17.252 13.1479H17.9616V17.2507H17.252V13.1479Z" fill="white"
                                                    stroke="white" />
                                            </svg>

                                        </span>
                                        Download Doctor’s Profile
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="doc_page_tabs">
                <div className="container">
                    <div className="nav_inner">
                        <nav className="navigation doc_tabs_list" id="mainNav">
                            <a className="navigation__link" href="#profile">About Us</a>
                            <a className="navigation__link" href="#opd">OPD Timing</a>
                            <a className="navigation__link" href="#dr_bites">Doctor Bites</a>
                            <a className="navigation__link" href="#dr_blogs">Doctor Blogs</a>
                            <a className="navigation__link" href="#dr_appointment">Book an Appointment</a>
                        </nav>
                    </div>
                </div>
            </section>

            <section className="dr_summary trdd p_100">
                <div className="container">
                    <div className="doctor_profile">
                        <div className="doc_single_data">
                            <div className="page-section doctors-tab listings" id="profile">
                                <div className="profile">
                                    <div className="about_dr">
                                        <p>
                                            Dr. Manoj Luthra is a highly experienced and renowned Cardiac surgeon in Noida with
                                            expertise in various adult and pediatric cardiac procedures. He has 30+ years of experience
                                            as a cardiac surgeon and performed the first heart transplantation surgery in the Indian
                                            Armed Forces.
                                        </p>
                                    </div>
                                    <div className="dr_decp">
                                        <h3>Education</h3>
                                        <ul>
                                            <li>MBBS-Armed Forces Medical College, Pune</li>
                                            <li>MS (General Surgery)-Armed Forces Medical College, Pune</li>
                                            <li>DNB (General Surgery)-National Board of Exam, New Delhi</li>
                                            <li> M.Ch.(Cardiac Surgery)-Armed Forces Medical College, Pune University</li>
                                        </ul>
                                        <h3>Overseas Assignments</h3>
                                        <ul>
                                            <li>Registrar, Cardiac Surgery Royal Prince Alfred Hospital (Central Sydney Health
                                                Services), Sydney, Australia (1993-94)
                                            </li>
                                            <li> Sr. Registrar, Paediatric Cardiac Surgery- Liverpool Children's Hospital,
                                                National Health Service (UK) (1995-96)</li>
                                        </ul>


                                        <h3>Experience</h3>
                                        <ul>
                                            <li>Dean & Professor (Cardiac Surgery)- Armed Forces Medical College, Pune (2010-14)
                                            </li>
                                            <li> Consultant & Head of Dept. (Cardiac Surgery)- Army Hospital (R&R), Delhi
                                                (2007-10)</li>
                                            <li>Professor & Head of Dept. (Cardiac Surgery) Armed Forces Medical, Pune (2002-07)
                                            </li>
                                        </ul>
                                        <h3>Membership</h3>
                                        <ul>
                                            <li>Indian Association of Cardio Vascular & Thoracic Surgeons</li>
                                            <li>Pediatric Cardiac Society of India</li>
                                            <li>World Congress of Pediatric Cardiac Surgeons</li>
                                        </ul>
                                        <h3>Accomplishment / Awards</h3>
                                        <ul>
                                            <li>Vishisht Seva Medal (2010)</li>
                                            <li>Chief of Army Staff Commendation (2005)</li>
                                            <li>General Officer Commanding Commendation (1997, 2003 & 2007)</li>
                                        </ul>
                                        <h3>Publications</h3>
                                        <ul>
                                            <li>22 papers in indexed journals</li>
                                            <li>Author- manual of Pediatric Cardiac Intensive Care, (Published by Elsevier
                                                India, 2012, ISBN: 978-81-312-3050-3)</li>
                                        </ul>
                                        <h3>Area of Interest</h3>
                                        <ul>
                                            <li>Off Pump Total Arterial Revascularization and Thoracic Aneurysm Surgery

                                            </li>
                                            <li>Cardiac Transplantation: Performed First Heart Transplant in the Indian Army
                                            </li>
                                            <li> Complex Neonatal Heart Operations</li>
                                        </ul>

                                    </div>
                                </div>
                            </div>

                            <div className="page-section doctors-tab listings" id="opd">
                                <div className="dr_opd">
                                    <div className="main_heading">
                                        <h2>OPD Schedule</h2>
                                    </div>
                                    <div className="divTable">
                                        <table className="divTable">
                                            <thead>
                                                <tr>
                                                    <th className="white">Day</th>
                                                    <th className="white">Time</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="odd">
                                                    <td>Monday</td>
                                                    <td>12:00 noon – 3:00 pm (with prior appointment)</td>
                                                </tr>
                                                <tr className="odd">
                                                    <td>Tuesday</td>
                                                    <td>12:00 noon – 3 :00 pm (with prior appointment)</td>
                                                </tr>
                                                <tr className="odd">
                                                    <td>Wednesday</td>
                                                    <td>12:00 noon – 3 :00 pm (with prior appointment)</td>
                                                </tr>
                                                <tr className="odd">
                                                    <td>Thursday</td>
                                                    <td>12:00 noon – 3 :00 pm (with prior appointment)</td>
                                                </tr>
                                                <tr className="odd">
                                                    <td>Friday</td>
                                                    <td>12:00 noon – 3 :00 pm (with prior appointment)</td>
                                                </tr>
                                                <tr className="odd">
                                                    <td>Saturday</td>
                                                    <td>12:00 noon – 3 :00 pm (with prior appointment)</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        {/* <!--<h4>For Appointment Call: <a href="tel:+911204122222">+91 120 412 2222</a></h4>--> */}
                                    </div>
                                </div>
                            </div>


                            <div className="page-section doctors-tab listings" id="dr_bites">
                                <div className="dr_bites">
                                    <div className="main_heading">
                                        <h2>Doctor’s Bites</h2>
                                    </div>
                                    <div className="owl-carousel doctor-bite-container owl-theme">


                                        <div className="video_box">
                                            <div className="inner_story_box doctor-box blog-box">
                                                <button className="play_button">
                                                    <img src="play-btn.png" />
                                                </button>
                                                <video className="inner_story_video" loop muted controls>
                                                    <source src="https://www.youtube.com/embed/K4TOrB7at0Y?si=Lxok0zfngVbfKeFq" />
                                                </video>
                                                <img className="inner_story_img" src="dr-bites.png" alt="Company Image" />
                                            </div>
                                            <div className="video_title">
                                                <p>Coronary Artery Bypass Grafting was Successfully</p>
                                            </div>
                                        </div>

                                        <div className="video_box">
                                            <div className="inner_story_box doctor-box blog-box">
                                                <button className="play_button">
                                                    <img src="play-btn.png" />
                                                </button>
                                                <video className="inner_story_video" loop muted controls>
                                                    <source src="https://www.youtube.com/embed/K4TOrB7at0Y?si=Lxok0zfngVbfKeFq" />
                                                </video>
                                                <img className="inner_story_img" src="dr-bites.png" alt="Company Image" />
                                            </div>
                                            <div className="video_title">
                                                <p>
                                                    Bi-directional glenn surgery was performed by Dr Manoj Luthra
                                                </p>
                                            </div>
                                        </div>

                                        <div className="video_box">
                                            <div className="inner_story_box doctor-box blog-box">
                                                <button className="play_button">
                                                    <img src="play-btn.png" />
                                                </button>
                                                <video className="inner_story_video" loop muted controls>
                                                    <source src="https://www.youtube.com/embed/K4TOrB7at0Y?si=Lxok0zfngVbfKeFq" />
                                                </video>
                                                <img className="inner_story_img" src="dr-bites.png" alt="Company Image" />
                                            </div>
                                            <div className="video_title">
                                                <p>
                                                    Successfully Performed CABG & Mitral Valve Replacement at Jaypee Hospital, Noida
                                                </p>
                                            </div>
                                        </div>

                                        <div className="video_box">
                                            <div className="inner_story_box doctor-box blog-box">
                                                <button className="play_button">
                                                    <img src="play-btn.png" />
                                                </button>
                                                <video className="inner_story_video" loop muted controls>
                                                    <source src="https://www.youtube.com/embed/K4TOrB7at0Y?si=Lxok0zfngVbfKeFq" />
                                                </video>
                                                <img className="inner_story_img" src="dr-bites.png" alt="Company Image" />
                                            </div>
                                            <div className="video_title">
                                                <p>
                                                    At Jaypee, Iraqi Child treated successfully for Correction of Tetralogy of Fallot
                                                </p>
                                            </div>
                                        </div>

                                    </div>



                                    {/* <!--<a href="#" className="know_btn">-->

                                        <!--    Load More-->
                                        <!--</a>--> */}


                                </div>
                            </div>
                            <div className="page-section doctors-tab listings" id="dr_blogs">
                                <div className="dr_blogs">
                                    <div className="main_heading">
                                        <h2>Doctor’s Blogs</h2>
                                    </div>


                                    <div className="owl-carousel doctor_blog_container owl-theme">


                                        <div className="video_box">
                                            <div className="inner_story_box doctor-box blog-box">
                                                <button className="play_button">
                                                    <img src="play-btn.png" />
                                                </button>
                                                <video className="inner_story_video" loop muted controls>
                                                    <source src="https://www.youtube.com/embed/K4TOrB7at0Y?si=Lxok0zfngVbfKeFq" />
                                                </video>
                                                <img className="inner_story_img" src="dr-bites.png" alt="Company Image" />
                                            </div>
                                            <div className="video_title">
                                                <p>Coronary Artery Bypass Grafting was Successfully</p>
                                            </div>
                                        </div>
                                        <div className="video_box">
                                            <div className="inner_story_box doctor-box blog-box">
                                                <button className="play_button">
                                                    <img src="play-btn.png" />
                                                </button>
                                                <video className="inner_story_video" loop muted controls>
                                                    <source src="https://www.youtube.com/embed/K4TOrB7at0Y?si=Lxok0zfngVbfKeFq" />
                                                </video>
                                                <img className="inner_story_img" src="dr-bites.png" alt="Company Image" />
                                            </div>
                                            <div className="video_title">
                                                <p>Coronary Artery Bypass Grafting was Successfully</p>
                                            </div>
                                        </div>
                                        <div className="video_box">
                                            <div className="inner_story_box doctor-box blog-box">
                                                <button className="play_button">
                                                    <img src="play-btn.png" />
                                                </button>
                                                <video className="inner_story_video" loop muted controls>
                                                    <source src="https://www.youtube.com/embed/K4TOrB7at0Y?si=Lxok0zfngVbfKeFq" />
                                                </video>
                                                <img className="inner_story_img" src="dr-bites.png" alt="Company Image" />
                                            </div>
                                            <div className="video_title">
                                                <p>Coronary Artery Bypass Grafting was Successfully</p>
                                            </div>
                                        </div>
                                        <div className="video_box">
                                            <div className="inner_story_box doctor-box blog-box">
                                                <button className="play_button">
                                                    <img src="play-btn.png" />
                                                </button>
                                                <video className="inner_story_video" loop muted controls>
                                                    <source src="https://www.youtube.com/embed/K4TOrB7at0Y?si=Lxok0zfngVbfKeFq" />
                                                </video>
                                                <img className="inner_story_img" src="dr-bites.png" alt="Company Image" />
                                            </div>
                                            <div className="video_title">
                                                <p>Coronary Artery Bypass Grafting was Successfully</p>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div className="page-section doctors-tab listings" id="dr_appointment">
                                <div className="dr_appointment">
                                    <div className="main_heading">
                                        <h2>Book an Appointment</h2>
                                    </div>
                                    <div className="contact_forms">
                                        <div className="contact_right">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="contact_input">
                                                        <input type="text" placeholder="Name" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="contact_input">
                                                        <input type="email" placeholder="Email" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="contact_input">
                                                        <input type="text" placeholder="Phone Number" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="contact_input">
                                                        <select className="form-select" aria-label="Default select Surgery">
                                                            <option selected>Cardiac Surgery</option>
                                                            <option value="bypass">Bypass Surgery</option>
                                                            <option value="valve_replacement">Valve Replacement</option>
                                                            <option value="angioplasty">Angioplasty</option>
                                                            <option value="pacemaker_implant">Pacemaker Implant</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="contact_input">
                                                        <input type="date" placeholder="Select Date" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <a className="main_btn" href="#">
                                                        Submit
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>





                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* <div className="modal fade" id="singleDoctorModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content">
                        <div className="modal-body single_dr_video">
                            <iframe width="100%" height="100%" src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div> */}
        <Footer />
        </>
    )
}





