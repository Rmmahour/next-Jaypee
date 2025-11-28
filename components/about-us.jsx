import React from "react";
import Image from "next/image";
import Header from "./header";
import Footer from "./footer";

export default function AboutPage(){
    return (
        <>

        <Header />
            <main>
                <section className="bread_sec inner">
                    <div className="container">
                        <div className="bread_links">
                            <ul>
                                <li>
                                    <a href="#">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="active">
                                        About Us
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="bread_title">
                            <h1>
                                About Us
                            </h1>
                        </div>
                        <div className="breadcrumb_button_box">
                            <a href="#" className="bread_btn">
                                <span>
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M22.1404 16.2183L19.3691 13.4542C18.8214 12.8881 18.16 12.5911 17.4595 12.5911C16.7627 12.5911 16.0976 12.8881 15.5331 13.4468L14.0892 14.8854C14.0165 14.8483 13.9476 14.813 13.8824 14.7815C13.7129 14.698 13.5489 14.6144 13.4092 14.5263C11.9448 13.6 10.61 12.3869 9.32725 10.8211C8.76088 10.1083 8.36964 9.51056 8.08646 8.92026C8.45161 8.5787 8.79629 8.23159 9.12233 7.89745C9.2602 7.75823 9.40366 7.61437 9.54431 7.47516C10.1219 6.89971 10.4274 6.2296 10.4274 5.53722C10.4274 4.84112 10.1219 4.17101 9.54431 3.59929L8.16751 2.22751C8.01102 2.07159 7.86199 1.92122 7.7092 1.76067L7.70174 1.75325C7.40179 1.4451 7.07761 1.11747 6.75344 0.818612C6.20383 0.282153 5.5471 0 4.8531 0C4.16377 0 3.50051 0.28586 2.93414 0.824196L1.19964 2.55237C0.499127 3.24385 0.102286 4.08843 0.0212531 5.06288C-0.0718988 6.22305 0.139557 7.44818 0.687305 8.91276C1.5117 11.1449 2.75345 13.21 4.59228 15.4124C6.82052 18.0669 9.51268 20.1663 12.5894 21.6542L12.5913 21.6561C13.7818 22.2176 15.3748 22.8766 17.1371 22.9907H17.1576C17.26 22.9954 17.3644 23 17.4761 23C18.7411 23 19.7602 22.5638 20.592 21.6653C20.606 21.6486 20.6246 21.6301 20.6432 21.605C20.8761 21.3284 21.1416 21.0686 21.4257 20.7975L21.4909 20.7344C21.7564 20.482 21.966 20.2731 22.1523 20.0801C22.7093 19.5028 23.0019 18.8318 23 18.1384C23 17.4423 22.7019 16.7787 22.1383 16.2172L22.1404 16.2183ZM1.94301 5.22725C1.98959 4.70005 2.18706 4.28054 2.56249 3.90743L4.27837 2.19781C4.46654 2.01683 4.66496 1.91937 4.84846 1.91937C5.07203 1.91937 5.27044 2.07251 5.39621 2.19967L5.41018 2.21359C5.67102 2.4549 5.92251 2.71013 6.188 2.97931L6.3091 3.10182C6.38828 3.1835 6.46933 3.26425 6.55129 3.34779C6.63047 3.42668 6.70965 3.50743 6.78883 3.5891L8.16937 4.96461C8.31376 5.10847 8.48609 5.32657 8.48609 5.54469C8.48609 5.7628 8.31375 5.9809 8.16937 6.12477C8.09671 6.19717 8.02498 6.26863 7.95232 6.34288C7.88246 6.41528 7.81073 6.48675 7.73807 6.55914L7.64026 6.6566C7.25088 7.04826 6.88106 7.41951 6.48329 7.77499L6.44417 7.81397C5.84055 8.41539 6.04825 9.03724 6.11627 9.24144C6.12092 9.25815 6.12558 9.26929 6.13024 9.28321L6.13955 9.30641C6.51682 10.2067 7.03382 11.0467 7.8163 12.0277L7.81816 12.0295C9.22662 13.7605 10.7134 15.1081 12.3639 16.155C12.5456 16.2729 12.7291 16.3666 12.9089 16.4539C12.9415 16.4706 12.9759 16.4864 13.0095 16.5049L13.0113 16.5068C13.1809 16.5903 13.3448 16.6738 13.4846 16.762L13.5265 16.7852C13.5405 16.7926 13.5544 16.8019 13.5684 16.8084C13.7733 16.9124 13.9848 16.9662 14.1972 16.9662C14.5558 16.9662 14.8819 16.8223 15.166 16.5374L16.894 14.8157C17.029 14.6811 17.234 14.5233 17.4575 14.5233C17.6858 14.5233 17.8842 14.6997 17.9839 14.8064L17.9885 14.8111L20.7784 17.5863C21.179 17.9854 21.1715 18.3381 20.7598 18.765L20.7551 18.7696C20.5595 18.9785 20.3527 19.178 20.1571 19.3655L20.1012 19.4184C19.7891 19.72 19.4677 20.031 19.1678 20.3883C18.7113 20.8756 18.1915 21.0918 17.4836 21.0918C17.4184 21.0918 17.3438 21.0872 17.2693 21.0825C15.8236 20.9897 14.4608 20.4217 13.4332 19.9335C10.6062 18.5691 8.13106 16.6387 6.07877 14.193C4.38524 12.1623 3.24882 10.2764 2.49692 8.25485C2.05165 7.06221 1.87279 6.09695 1.94266 5.22447L1.94301 5.22725Z"
                                            fill="#fff" />
                                    </svg>
                                </span>
                                1800 102 9102
                            </a>
                        </div>
                    </div>
                </section>


                {/* Breadcrumb section End */}

                <section className="speciality_top_tabs">
                    <div className="container">
                        <ul className="nav nav-pills" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="pills-Overview-tab" data-bs-toggle="pill" data-bs-target="#pills-Overview" type="button" role="tab" aria-controls="pills-Overview" aria-selected="true">Overview</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-Mission-tab" data-bs-toggle="pill" data-bs-target="#pills-Mission" type="button" role="tab" aria-controls="pills-Mission" aria-selected="false">Mission & Vision</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-Message-tab" data-bs-toggle="pill" data-bs-target="#pills-Message" type="button" role="tab" aria-controls="pills-Message" aria-selected="false">Chairman's Message</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-Why-tab" data-bs-toggle="pill" data-bs-target="#pills-Why" type="button" role="tab" aria-controls="pills-Why" aria-selected="false">Why Jaypee Hospital</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-Infrastructure-tab" data-bs-toggle="pill" data-bs-target="#pills-Infrastructure" type="button" role="tab" aria-controls="pills-Infrastructure" aria-selected="false">Infrastructure & Technology</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-Brochure-tab" data-bs-toggle="pill" data-bs-target="#pills-Brochure" type="button" role="tab" aria-controls="pills-Brochure" aria-selected="false">Download Brochure</button>
                            </li>
                        </ul>
                    </div>
                </section>



                <section className="speciality_tabs_content">
                    <div className="container">
                        <div className="tab-content p_100" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-Overview" role="tabpanel" aria-labelledby="pills-Overview-tab" tabindex="0">
                                <div className="sub_heading">
                                    <h3>
                                        A World Class Multi-Super Speciality Hospital
                                    </h3>
                                </div>
                                <div className="about_content">
                                    <h5>
                                        The Jaypee Hospital was conceptualized by our revered Founder Chairman, Shri Jai Prakash Gaur with the vision of promoting world-class healthcare amongst the masses by providing quality and affordable medical care with commitment.
                                    </h5>
                                    <p>
                                        Jaypee Hospital at Noida is the flagship hospital of the Jaypee Group, which heralds the group’s noble intention to enter the healthcare space. This hospital has been planned and designed as a 1200 bedded tertiary care multi-speciality facility and has commissioned 504 beds in the first phase
                                    </p>
                                    <p>
                                        The Jaypee Hospital is constructed across a sprawling twenty-five acre campus in Sector 128, Noida which is easily accessible from Delhi, Noida and the Yamuna Expressway.
                                    </p>
                                    <p>
                                        The Jaypee Hospital is established on the following fundamental principles:
                                    </p>
                                </div>
                                <div className="about_container">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="Overview_box">
                                                <img src="Patient centric high quality care.webp" />
                                                    <div className="Overview_content">
                                                        <h5>
                                                            Patient centric high quality care
                                                        </h5>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="Overview_box">
                                                <img src="Patient centric high quality care.webp" />
                                                    <div className="Overview_content">
                                                        <h5>
                                                            Patient centric high quality care
                                                        </h5>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="Overview_box">
                                                <img src="Patient centric high quality care.webp" />
                                                    <div className="Overview_content">
                                                        <h5>
                                                            Patient centric high quality care
                                                        </h5>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="Overview_box">
                                                <img src="Patient centric high quality care.webp" />
                                                    <div className="Overview_content">
                                                        <h5>
                                                            Patient centric high quality care
                                                        </h5>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="Overview_box">
                                                <img src="Patient centric high quality care.webp" />
                                                    <div className="Overview_content">
                                                        <h5>
                                                            Patient centric high quality care
                                                        </h5>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="Overview_box">
                                                <img src="Patient centric high quality care.webp" />
                                                    <div className="Overview_content">
                                                        <h5>
                                                            Patient centric high quality care
                                                        </h5>
                                                    </div>
                                            </div>
                                        </div>




                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-Mission" role="tabpanel" aria-labelledby="pills-Mission-tab" tabindex="0">
                                <div className="about_container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <h3>
                                                Vision
                                            </h3>
                                            <p>
                                                Promoting healthcare to the common masses with the growing needs of society by providing quality and affordable healthcare with commitment.
                                            </p>
                                        </div>
                                        <div className="col-md-12">
                                            <h3>
                                                Mission
                                            </h3>
                                            <p>
                                                The Jaypee Group is committed to serve the cause of millions who seek dedicated quality and affordable healthcare through its multi-super specialty facility, the Jaypee Hospital. With advanced healthcare facilities, the latest diagnostic Mission and state-of-the-art technology focused on medical specialities, the Jaypee Hospital strives to be the ultimate choice for medical care.
                                            </p>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="core-values_conteiner">
                                                <h3>
                                                    Core Values
                                                </h3>
                                                <div className="row">
                                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                                        <div className="Overview_box">
                                                            <img src="Patient centric high quality care.webp" />
                                                                <div className="Overview_content">
                                                                    <h5>
                                                                        Patient centric high quality care
                                                                    </h5>
                                                                </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                                        <div className="Overview_box">
                                                            <img src="Patient centric high quality care.webp" />
                                                                <div className="Overview_content">
                                                                    <h5>
                                                                        Patient centric high quality care
                                                                    </h5>
                                                                </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                                        <div className="Overview_box">
                                                            <img src="Patient centric high quality care.webp" />
                                                                <div className="Overview_content">
                                                                    <h5>
                                                                        Patient centric high quality care
                                                                    </h5>
                                                                </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                                        <div className="Overview_box">
                                                            <img src="Patient centric high quality care.webp" />
                                                                <div className="Overview_content">
                                                                    <h5>
                                                                        Patient centric high quality care
                                                                    </h5>
                                                                </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                                        <div className="Overview_box">
                                                            <img src="Patient centric high quality care.webp" />
                                                                <div className="Overview_content">
                                                                    <h5>
                                                                        Patient centric high quality care
                                                                    </h5>
                                                                </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                                        <div className="Overview_box">
                                                            <img src="Patient centric high quality care.webp" />
                                                                <div className="Overview_content">
                                                                    <h5>
                                                                        Patient centric high quality care
                                                                    </h5>
                                                                </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-Message" role="tabpanel" aria-labelledby="pills-Message-tab" tabindex="0">
                                <div className="message_container">
                                    <div className="sub_heading">
                                        <h3>
                                            Chairman's Message
                                        </h3>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="message_content">
                                                <p>
                                                    In Jaypee Hospital, I see the future of healthcare in India, a future that will see medical technology transcending all borders and transforming itself to provide best service at the lowest possible cost, a future that will see the dimensions of clinical practices expanding to take healthcare to the masses and a future where people will grow healthier and live happier.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="chairman_img">
                                                <img src="chairman.webp" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="sign_box">
                                                <img src="signature.webp" />
                                                    <p>
                                                        Shri Jaiprakash Gaur Ji
                                                    </p>
                                                    <p>
                                                        Our Revered Founder Chairman
                                                    </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-Why" role="tabpanel" aria-labelledby="pills-Why-tab" tabindex="0">
                                <div className="sub_heading">
                                    <h3>
                                        Why Jaypee Hospital
                                    </h3>
                                </div>
                                <div className="about_container">
                                    <p>
                                        Jaypee Hospital is a flagship initiative from the Jaypee Group dedicated towards meeting the acute need for quality healthcare. This hospital has been designed as a tertiary care multi-specialty facility having a capacity of 1200 beds with 504 beds operational in Phase-I.
                                    </p>
                                    <p>
                                        Jaypee Hospital is constructed across a sprawling 25 acre campus which is easily accessible from Delhi, Noida and Yamuna expressway.
                                    </p>
                                    <p>
                                        The plan, design & construction of this hospital has positioned it amongst the very few GOLD LEED certified hospital buildings in India.
                                    </p>

                                    <div className="sub_heading mt-3">
                                        <h3>
                                            Jaypee Hospital Highlights
                                        </h3>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="Overview_box">
                                                <img src="Patient centric high quality care.webp" />
                                                    <div className="Overview_content">
                                                        <h5>
                                                            Patient centric high quality care
                                                        </h5>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="Overview_box">
                                                <img src="Patient centric high quality care.webp" />
                                                    <div className="Overview_content">
                                                        <h5>
                                                            Patient centric high quality care
                                                        </h5>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="Overview_box">
                                                <img src="Patient centric high quality care.webp" />
                                                    <div className="Overview_content">
                                                        <h5>
                                                            Patient centric high quality care
                                                        </h5>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="Overview_box">
                                                <img src="Patient centric high quality care.webp" />
                                                    <div className="Overview_content">
                                                        <h5>
                                                            Patient centric high quality care
                                                        </h5>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="Overview_box">
                                                <img src="Patient centric high quality care.webp" />
                                                    <div className="Overview_content">
                                                        <h5>
                                                            Patient centric high quality care
                                                        </h5>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="Overview_box">
                                                <img src="Patient centric high quality care.webp" />
                                                    <div className="Overview_content">
                                                        <h5>
                                                            Patient centric high quality care
                                                        </h5>
                                                    </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-Infrastructure" role="tabpanel" aria-labelledby="pills-Infrastructure-tab" tabindex="0">
                                <div className="sub_heading">
                                    <h3>
                                        Infrastructure Highlights
                                    </h3>
                                </div>
                                <div className="about_container">

                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="Overview_box">
                                                <img src="Patient centric high quality care.webp" />
                                                    <div className="Overview_content">
                                                        <h5>
                                                            Patient centric high quality care
                                                        </h5>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="Overview_box">
                                                <img src="Patient centric high quality care.webp" />
                                                    <div className="Overview_content">
                                                        <h5>
                                                            Patient centric high quality care
                                                        </h5>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="Overview_box">
                                                <img src="Patient centric high quality care.webp" />
                                                    <div className="Overview_content">
                                                        <h5>
                                                            Patient centric high quality care
                                                        </h5>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="Overview_box">
                                                <img src="Patient centric high quality care.webp" />
                                                    <div className="Overview_content">
                                                        <h5>
                                                            Patient centric high quality care
                                                        </h5>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="Overview_box">
                                                <img src="Patient centric high quality care.webp" />
                                                    <div className="Overview_content">
                                                        <h5>
                                                            Patient centric high quality care
                                                        </h5>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="Overview_box">
                                                <img src="Patient centric high quality care.webp" />
                                                    <div className="Overview_content">
                                                        <h5>
                                                            Patient centric high quality care
                                                        </h5>
                                                    </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-Brochure" role="tabpanel" aria-labelledby="pills-Brochure-tab" tabindex="0">
                                <div className="sub_heading">
                                    <h3>
                                        Download Brochure
                                    </h3>
                                </div>
                                <div className="about_container">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <a href="https://www.jaypeehealthcare.com/sites/default/files/CorporateBrochure.pdf" target="_blank">
                                                <img src="CorporateBrochure.webp" />
                                                    <div className="brochure_title">
                                                        <a href="https://www.jaypeehealthcare.com/sites/default/files/CorporateBrochure.pdf" target="_blank">Download Brochure</a>
                                                    </div>

                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>




            </main>


        <Footer />
        </>
    )
}