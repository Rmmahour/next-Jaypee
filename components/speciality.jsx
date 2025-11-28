import React from "react";
import Image from "next/image";
import Header from "./header";
import Footer from "./footer";

export default function SpecialityPage() {
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
                                    <a href="#">
                                        Institutes
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Heart
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="bread_title">
                            <h1>
                                Heart
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




                <section className="speciality_top_tabs">
                    <div className="container">
                        <ul className="nav nav-pills" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="pills-overview-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-overview" type="button" role="tab" aria-controls="pills-overview"
                                    aria-selected="true">Overview</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-services-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-services" type="button" role="tab" aria-controls="pills-services"
                                    aria-selected="false">Services</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-technology-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-technology" type="button" role="tab" aria-controls="pills-technology"
                                    aria-selected="false">Technology</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-doctors-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-doctors" type="button" role="tab" aria-controls="pills-doctors"
                                    aria-selected="false">Doctors</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-speak-tab" data-bs-toggle="pill" data-bs-target="#pills-speak"
                                    type="button" role="tab" aria-controls="pills-speak" aria-selected="false">Patient
                                    Speaks</button>
                            </li>
                        </ul>
                    </div>
                </section>






                <section className="speciality_tabs_content">

                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-overview" role="tabpanel" aria-labelledby="pills-overview-tab"
                            tabindex="0">
                            <div className="container">
                                <div className="speciality_tabs_grid p_100">
                                    <div className="left">
                                        <div className="details_content">
                                            <p>
                                                A healthy heart means a healthy you! We at the Institute of Heart, consider it as
                                                our responsibility to offer the most advanced heart treatments at Jaypee Hospital.
                                            </p>
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                                unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                It has survived not only five centuries, but also the leap into electronic
                                                typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                                                the release of Letraset sheets containing
                                            </p>
                                            <p>
                                                It is a long established fact that a reader will be distracted by the readable
                                                content of a page when looking at its layout.
                                            </p>
                                            <p>
                                                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
                                                letters, as opposed to using 'Content here, content here', making it look like
                                                readable English. Many desktop publishing packages and web page editors now use.
                                            </p>
                                            <p>
                                                Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover
                                                many web sites still in their infancy. Various versions have evolved over the years,
                                                sometimes by accident, sometimes on purpose (injected humour and the like).
                                            </p>
                                            <ul>
                                                <li>64 channel EP lab for precise electrophysiology procedures including RF ablation
                                                    & Pacemaker.</li>
                                                <li>State-of-the-art Hybrid OT combines the functionality of a Cath Lab and Modular
                                                    OT that houses all equipments and monitoring devices necessary to perform
                                                    Percutaneous Valve Surgeries, Complex Hybrid Aortic Aneurysm Interventions and
                                                    Minimally Invasive Cardiac Services.</li>
                                                <li>Biplane Cath Lab with Fractional Flow Reserve (FFR): Flat Panel Combo Cath Lab
                                                    with 3D reconstruction and DSA, capability of performing interventional
                                                    procedures in less time, along with less usage of contrast in neurovascular
                                                    interventional studies.</li>
                                                <li>Four Dedicated Cardiac OTs well equipped with Heart Lung Machines, Hypothermia
                                                    Machine, and Ultrasound with an intra-operative probe, ACT machine, Cell Saver
                                                    Unit, and Advanced Micro Vascular instruments.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="right">
                                        <div className="get_care_container">
                                            <div className="care_heading">
                                                <h3 className="common_heading">
                                                    Get Care You Need
                                                </h3>
                                            </div>
                                            <div className="care_content">
                                                <p>
                                                    'lorem ipsum' will uncover many web sites still in their infancy. Call 1800 102
                                                    9102(Link opens phone app) to learn more about Heart services at Jaypee
                                                    Healthcare.
                                                </p>
                                            </div>
                                            <a className="main_btn2" href="#">
                                                Find a Doctor
                                            </a>
                                            <a className="main_btn2" href="#">
                                                Book an Appointment
                                            </a>
                                        </div>

                                        <div className="helpful_links_container">
                                            <div className="care_heading">
                                                <h3 className="common_heading">
                                                    Helpful Links
                                                </h3>
                                            </div>
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        Minimally Invasive Spine Surgery: A Safer Path to Early Recovery
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Minimally Invasive Spine Surgery: A Safer Path to Early Recovery
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Minimally Invasive Spine Surgery: A Safer Path to Early Recovery
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Minimally Invasive Spine Surgery: A Safer Path to Early Recovery
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>

                                </div>

                            </div>
                            <div className="faq_container p_100">
                                <div className="container">
                                    <div className="main_heading">
                                        <h2>FAQs</h2>
                                    </div>
                                    <div className="accordion accordion-flush" id="accordionFlushExample">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#flush-collapseOne" aria-expanded="false"
                                                    aria-controls="flush-collapseOne">
                                                    Q1. Lorem Ipsum is simply dummy text typesetting industry ?
                                                </button>
                                            </h2>
                                            <div id="flush-collapseOne" className="accordion-collapse collapse"
                                                data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body">
                                                    Our commitment to excellence and innovation has driven us to constantly evolve
                                                    and adapt to changing market trends. With an objective to provide an array of
                                                    products for home beautification needs, we are proud to announce our foray into
                                                    the paint business with JKMaxx Paints,
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                                    aria-controls="flush-collapseTwo">
                                                    Q2. when an unknown printer took a galley of type and scrambled?
                                                </button>
                                            </h2>
                                            <div id="flush-collapseTwo" className="accordion-collapse collapse"
                                                data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body">
                                                    Our commitment to excellence and innovation has driven us to constantly evolve
                                                    and adapt to changing market trends. With an objective to provide an array of
                                                    products for home beautification needs, we are proud to announce our foray into
                                                    the paint business with JKMaxx Paints,
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#flush-collapseThree" aria-expanded="false"
                                                    aria-controls="flush-collapseThree">
                                                    Q3. Dummy text of the printing and typesetting industry ?
                                                </button>
                                            </h2>
                                            <div id="flush-collapseThree" className="accordion-collapse collapse"
                                                data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body">
                                                    Our commitment to excellence and innovation has driven us to constantly evolve
                                                    and adapt to changing market trends. With an objective to provide an array of
                                                    products for home beautification needs, we are proud to announce our foray into
                                                    the paint business with JKMaxx Paints,
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-services" role="tabpanel" aria-labelledby="pills-services-tab"
                            tabindex="0">
                            <div className="container">
                                <div className="speciality_tabs_grid p_100">
                                    <div className="left">
                                        <div className="details_content">
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                                unknown printer took a galley of type and scrambled it to make a type specimen
                                                book. It has survived not only five centuries, but also the leap into electronic
                                                typesetting, remaining essentially unchanged. It was popularised in the 1960s
                                                with the release of Letraset sheets containing
                                            </p>
                                        </div>
                                        <div className="services_container">
                                            <div className="main_heading">
                                                <h2>Services</h2>
                                            </div>
                                            <ul>
                                                <li>
                                                    <div className="filter_box">

                                                        <div id="main">
                                                            <input placeholder="Search Services" type="text" name="text"
                                                                className="input" />


                                                            <div id="filter-icon">
                                                                <svg width="18" height="19" viewBox="0 0 18 19" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M17.6705 16.9457L17.6701 16.946L17.6755 16.9501L17.6761 16.9505C17.7636 17.0386 17.833 17.1429 17.8805 17.2576C17.9285 17.3733 17.9531 17.4973 17.9531 17.6225C17.9531 17.7478 17.9285 17.8718 17.8805 17.9875C17.8326 18.1032 17.7624 18.2083 17.6738 18.2969C17.5852 18.3854 17.4801 18.4557 17.3644 18.5036C17.2487 18.5515 17.1247 18.5762 16.9994 18.5762C16.8742 18.5762 16.7502 18.5515 16.6345 18.5036C16.5188 18.4557 16.4136 18.3854 16.3251 18.2969L12.3689 14.34L12.3398 14.3109L12.3072 14.336C10.7722 15.5139 8.84654 16.0638 6.92094 15.8742C4.99534 15.6846 3.21395 14.7697 1.93815 13.315C0.662352 11.8604 -0.0123343 9.97492 0.0509569 8.04113C0.114248 6.10735 0.910778 4.27004 2.27897 2.90191C3.64715 1.53379 5.48455 0.737292 7.41843 0.674004C9.3523 0.610715 11.2378 1.28537 12.6926 2.56111C14.1473 3.83686 15.0623 5.61816 15.2519 7.54366C15.4415 9.46917 14.8915 11.3947 13.7135 12.9297L13.6885 12.9623L13.7176 12.9913L17.6705 16.9457ZM1.96758 8.2972V8.29725C1.96914 9.81026 2.5709 11.2609 3.64081 12.3307C4.71072 13.4006 6.16138 14.0023 7.67446 14.0039H7.67451C8.80323 14.0039 9.9066 13.6692 10.8451 13.0421C11.7836 12.4151 12.5151 11.5238 12.947 10.481C13.379 9.43829 13.492 8.29087 13.2718 7.18388C13.0516 6.0769 12.508 5.06007 11.7099 4.26198C10.9118 3.46389 9.89491 2.92038 8.78787 2.70019C7.68084 2.48 6.53337 2.59301 5.49056 3.02493C4.44776 3.45685 3.55646 4.18829 2.92937 5.12675C2.30229 6.0652 1.96758 7.16853 1.96758 8.2972Z"
                                                                        fill="var(--blue)" stroke="var(--blue)"
                                                                        strokeWidth="0.09375" />
                                                                </svg>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Non Interventional Cardiology
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Interventional Cardiology
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Heart Command
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Preventive and Rehabilitative
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Cardiology
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Paediatric Cardiology
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Electrophysiology and Devices
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Adult Cardiac Surgery
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Vascular Surgery
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Heart Transplant
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="right">
                                        <div className="get_care_container">
                                            <div className="care_heading">
                                                <h3 className="common_heading">
                                                    Get Care You Need
                                                </h3>
                                            </div>
                                            <div className="care_content">
                                                <p>
                                                    'lorem ipsum' will uncover many web sites still in their infancy. Call 1800
                                                    102 9102(Link opens phone app) to learn more about Heart services at Jaypee
                                                    Healthcare.
                                                </p>
                                            </div>
                                            <a className="main_btn2" href="#">
                                                Find a Doctor
                                            </a>
                                            <a className="main_btn2" href="#">
                                                Book an Appointment
                                            </a>
                                        </div>

                                        <div className="helpful_links_container">
                                            <div className="care_heading">
                                                <h3 className="common_heading">
                                                    Helpful Links
                                                </h3>
                                            </div>
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        Minimally Invasive Spine Surgery: A Safer Path to Early Recovery
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Minimally Invasive Spine Surgery: A Safer Path to Early Recovery
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Minimally Invasive Spine Surgery: A Safer Path to Early Recovery
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Minimally Invasive Spine Surgery: A Safer Path to Early Recovery
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-technology" role="tabpanel" aria-labelledby="pills-technology-tab"
                            tabindex="0">
                            <div className="container">
                                <div className="speciality_tabs_grid p_100">
                                    <div className="left">
                                        <div className="details_content">
                                            <div className="img_box">
                                                <img src="MRI-machine.webp" alt="" />
                                            </div>
                                            <p>
                                                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
                                                letters, as opposed to using 'Content here, content here', making it look like
                                                readable English. Many desktop publishing packages and web page editors now use.
                                            </p>
                                            <p>
                                                Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover
                                                many web sites still in their infancy. Various versions have evolved over the years,
                                                sometimes by accident, sometimes on purpose (injected humour and the like).
                                            </p>
                                            <ul>
                                                <li>64 channel EP lab for precise electrophysiology procedures including RF ablation
                                                    & Pacemaker.</li>
                                                <li>State-of-the-art Hybrid OT combines the functionality of a Cath Lab and Modular
                                                    OT that houses all equipments and monitoring devices necessary to perform
                                                    Percutaneous Valve Surgeries, Complex Hybrid Aortic Aneurysm Interventions and
                                                    Minimally Invasive Cardiac Services.</li>
                                                <li>Biplane Cath Lab with Fractional Flow Reserve (FFR): Flat Panel Combo Cath Lab
                                                    with 3D reconstruction and DSA, capability of performing interventional
                                                    procedures in less time, along with less usage of contrast in neurovascular
                                                    interventional studies.</li>
                                                <li>Four Dedicated Cardiac OTs well equipped with Heart Lung Machines, Hypothermia
                                                    Machine, and Ultrasound with an intra-operative probe, ACT machine, Cell Saver
                                                    Unit, and Advanced Micro Vascular instruments.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="right">
                                        <div className="get_care_container">
                                            <div className="care_heading">
                                                <h3 className="common_heading">
                                                    Get Care You Need
                                                </h3>
                                            </div>
                                            <div className="care_content">
                                                <p>
                                                    'lorem ipsum' will uncover many web sites still in their infancy. Call 1800 102
                                                    9102(Link opens phone app) to learn more about Heart services at Jaypee
                                                    Healthcare.
                                                </p>
                                            </div>
                                            <a className="main_btn2" href="#">
                                                Find a Doctor
                                            </a>
                                            <a className="main_btn2" href="#">
                                                Book an Appointment
                                            </a>
                                        </div>

                                        <div className="helpful_links_container">
                                            <div className="care_heading">
                                                <h3 className="common_heading">
                                                    Helpful Links
                                                </h3>
                                            </div>
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        Minimally Invasive Spine Surgery: A Safer Path to Early Recovery
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Minimally Invasive Spine Surgery: A Safer Path to Early Recovery
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Minimally Invasive Spine Surgery: A Safer Path to Early Recovery
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Minimally Invasive Spine Surgery: A Safer Path to Early Recovery
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-doctors" role="tabpanel" aria-labelledby="pills-doctors-tab"
                            tabindex="0">
                            <div className="container">

                                <div className="dr_container p_100">
                                    <div className="our-doctors">

                                        <div className="doctor_box">
                                            <a href="#">
                                                <div className="doctor_img">
                                                    <img src="doctors/Dr-Manoj-Luthra-1.webp" />
                                                </div>
                                                <div className="doctor-content">
                                                    <div className="content">
                                                        <h5>Dr. Manoj Luthra</h5>
                                                        <p>Director, Department of Cardiac Surgery</p>
                                                    </div>
                                                    <a href="#" className="profile_btn">
                                                        <svg width="36" height="26" viewBox="0 0 36 26" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M23.8485 1.43726C23.6297 1.17507 23.3105 1.01666 22.9691 1.00124C22.628 0.985818 22.2958 1.11469 22.0542 1.35623C21.8127 1.59802 21.6838 1.93 21.6992 2.27141C21.7147 2.61254 21.8728 2.93171 22.1352 3.15053L30.8755 11.9015H1.98525C1.56544 11.9237 1.18664 12.1606 0.982804 12.5284C0.779169 12.8962 0.779169 13.3429 0.982804 13.7107C1.1867 14.0785 1.56547 14.3153 1.98525 14.3375H30.8755L22.1212 23.0778C21.9008 23.3084 21.778 23.6153 21.778 23.9342C21.778 24.2534 21.9008 24.56 22.1212 24.7908C22.3481 25.0185 22.6563 25.1463 22.9778 25.1463C23.2991 25.1463 23.6073 25.0185 23.8342 24.7908L34.661 13.964C34.8939 13.74 35.0254 13.4307 35.0254 13.1076C35.0254 12.7843 34.8939 12.475 34.661 12.251L23.8485 1.43726Z"
                                                                fill="blue" stroke="blue" strokeWidth="1.4" />
                                                        </svg>

                                                    </a>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="doctor_box">
                                            <a href="#">
                                                <div className="doctor_img">
                                                    <img src="doctors/Dr-Manoj-Luthra-1.webp" />
                                                </div>
                                                <div className="doctor-content">
                                                    <div className="content">
                                                        <h5>Dr. Manoj Luthra</h5>
                                                        <p>Director, Department of Cardiac Surgery</p>
                                                    </div>
                                                    <a href="#" className="profile_btn">
                                                        <svg width="36" height="26" viewBox="0 0 36 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M23.8485 1.43726C23.6297 1.17507 23.3105 1.01666 22.9691 1.00124C22.628 0.985818 22.2958 1.11469 22.0542 1.35623C21.8127 1.59802 21.6838 1.93 21.6992 2.27141C21.7147 2.61254 21.8728 2.93171 22.1352 3.15053L30.8755 11.9015H1.98525C1.56544 11.9237 1.18664 12.1606 0.982804 12.5284C0.779169 12.8962 0.779169 13.3429 0.982804 13.7107C1.1867 14.0785 1.56547 14.3153 1.98525 14.3375H30.8755L22.1212 23.0778C21.9008 23.3084 21.778 23.6153 21.778 23.9342C21.778 24.2534 21.9008 24.56 22.1212 24.7908C22.3481 25.0185 22.6563 25.1463 22.9778 25.1463C23.2991 25.1463 23.6073 25.0185 23.8342 24.7908L34.661 13.964C34.8939 13.74 35.0254 13.4307 35.0254 13.1076C35.0254 12.7843 34.8939 12.475 34.661 12.251L23.8485 1.43726Z" fill="blue" stroke="blue" strokeWidth="1.4"></path>
                                                        </svg>

                                                    </a>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="doctor_box">
                                            <a href="#">
                                                <div className="doctor_img">
                                                    <img src="doctors/Dr-Manoj-Luthra-1.webp" />
                                                </div>
                                                <div className="doctor-content">
                                                    <div className="content">
                                                        <h5>Dr. Manoj Luthra</h5>
                                                        <p>Director, Department of Cardiac Surgery</p>
                                                    </div>
                                                    <a href="#" className="profile_btn">
                                                        <svg width="36" height="26" viewBox="0 0 36 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M23.8485 1.43726C23.6297 1.17507 23.3105 1.01666 22.9691 1.00124C22.628 0.985818 22.2958 1.11469 22.0542 1.35623C21.8127 1.59802 21.6838 1.93 21.6992 2.27141C21.7147 2.61254 21.8728 2.93171 22.1352 3.15053L30.8755 11.9015H1.98525C1.56544 11.9237 1.18664 12.1606 0.982804 12.5284C0.779169 12.8962 0.779169 13.3429 0.982804 13.7107C1.1867 14.0785 1.56547 14.3153 1.98525 14.3375H30.8755L22.1212 23.0778C21.9008 23.3084 21.778 23.6153 21.778 23.9342C21.778 24.2534 21.9008 24.56 22.1212 24.7908C22.3481 25.0185 22.6563 25.1463 22.9778 25.1463C23.2991 25.1463 23.6073 25.0185 23.8342 24.7908L34.661 13.964C34.8939 13.74 35.0254 13.4307 35.0254 13.1076C35.0254 12.7843 34.8939 12.475 34.661 12.251L23.8485 1.43726Z" fill="blue" stroke="blue" strokeWidth="1.4"></path>
                                                        </svg>

                                                    </a>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="doctor_box">
                                            <a href="#">
                                                <div className="doctor_img">
                                                    <img src="doctors/Dr-Manoj-Luthra-1.webp" />
                                                </div>
                                                <div className="doctor-content">
                                                    <div className="content">
                                                        <h5>Dr. Manoj Luthra</h5>
                                                        <p>Director, Department of Cardiac Surgery</p>
                                                    </div>
                                                    <a href="#" className="profile_btn">
                                                        <svg width="36" height="26" viewBox="0 0 36 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M23.8485 1.43726C23.6297 1.17507 23.3105 1.01666 22.9691 1.00124C22.628 0.985818 22.2958 1.11469 22.0542 1.35623C21.8127 1.59802 21.6838 1.93 21.6992 2.27141C21.7147 2.61254 21.8728 2.93171 22.1352 3.15053L30.8755 11.9015H1.98525C1.56544 11.9237 1.18664 12.1606 0.982804 12.5284C0.779169 12.8962 0.779169 13.3429 0.982804 13.7107C1.1867 14.0785 1.56547 14.3153 1.98525 14.3375H30.8755L22.1212 23.0778C21.9008 23.3084 21.778 23.6153 21.778 23.9342C21.778 24.2534 21.9008 24.56 22.1212 24.7908C22.3481 25.0185 22.6563 25.1463 22.9778 25.1463C23.2991 25.1463 23.6073 25.0185 23.8342 24.7908L34.661 13.964C34.8939 13.74 35.0254 13.4307 35.0254 13.1076C35.0254 12.7843 34.8939 12.475 34.661 12.251L23.8485 1.43726Z" fill="blue" stroke="blue" strokeWidth="1.4"></path>
                                                        </svg>

                                                    </a>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="doctor_box">
                                            <a href="#">
                                                <div className="doctor_img">
                                                    <img src="doctors/Dr-Manoj-Luthra-1.webp" />
                                                </div>
                                                <div className="doctor-content">
                                                    <div className="content">
                                                        <h5>Dr. Manoj Luthra</h5>
                                                        <p>Director, Department of Cardiac Surgery</p>
                                                    </div>
                                                    <a href="#" className="profile_btn">
                                                        <svg width="36" height="26" viewBox="0 0 36 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M23.8485 1.43726C23.6297 1.17507 23.3105 1.01666 22.9691 1.00124C22.628 0.985818 22.2958 1.11469 22.0542 1.35623C21.8127 1.59802 21.6838 1.93 21.6992 2.27141C21.7147 2.61254 21.8728 2.93171 22.1352 3.15053L30.8755 11.9015H1.98525C1.56544 11.9237 1.18664 12.1606 0.982804 12.5284C0.779169 12.8962 0.779169 13.3429 0.982804 13.7107C1.1867 14.0785 1.56547 14.3153 1.98525 14.3375H30.8755L22.1212 23.0778C21.9008 23.3084 21.778 23.6153 21.778 23.9342C21.778 24.2534 21.9008 24.56 22.1212 24.7908C22.3481 25.0185 22.6563 25.1463 22.9778 25.1463C23.2991 25.1463 23.6073 25.0185 23.8342 24.7908L34.661 13.964C34.8939 13.74 35.0254 13.4307 35.0254 13.1076C35.0254 12.7843 34.8939 12.475 34.661 12.251L23.8485 1.43726Z" fill="blue" stroke="blue" strokeWidth="1.4"></path>
                                                        </svg>

                                                    </a>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="doctor_box">
                                            <a href="#">
                                                <div className="doctor_img">
                                                    <img src="doctors/Dr-Manoj-Luthra-1.webp" />
                                                </div>
                                                <div className="doctor-content">
                                                    <div className="content">
                                                        <h5>Dr. Manoj Luthra</h5>
                                                        <p>Director, Department of Cardiac Surgery</p>
                                                    </div>
                                                    <a href="#" className="profile_btn">
                                                        <svg width="36" height="26" viewBox="0 0 36 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M23.8485 1.43726C23.6297 1.17507 23.3105 1.01666 22.9691 1.00124C22.628 0.985818 22.2958 1.11469 22.0542 1.35623C21.8127 1.59802 21.6838 1.93 21.6992 2.27141C21.7147 2.61254 21.8728 2.93171 22.1352 3.15053L30.8755 11.9015H1.98525C1.56544 11.9237 1.18664 12.1606 0.982804 12.5284C0.779169 12.8962 0.779169 13.3429 0.982804 13.7107C1.1867 14.0785 1.56547 14.3153 1.98525 14.3375H30.8755L22.1212 23.0778C21.9008 23.3084 21.778 23.6153 21.778 23.9342C21.778 24.2534 21.9008 24.56 22.1212 24.7908C22.3481 25.0185 22.6563 25.1463 22.9778 25.1463C23.2991 25.1463 23.6073 25.0185 23.8342 24.7908L34.661 13.964C34.8939 13.74 35.0254 13.4307 35.0254 13.1076C35.0254 12.7843 34.8939 12.475 34.661 12.251L23.8485 1.43726Z" fill="blue" stroke="blue" strokeWidth="1.4"></path>
                                                        </svg>

                                                    </a>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="doctor_box">
                                            <a href="#">
                                                <div className="doctor_img">
                                                    <img src="doctors/Dr-Manoj-Luthra-1.webp" />
                                                </div>
                                                <div className="doctor-content">
                                                    <div className="content">
                                                        <h5>Dr. Manoj Luthra</h5>
                                                        <p>Director, Department of Cardiac Surgery</p>
                                                    </div>
                                                    <a href="#" className="profile_btn">
                                                        <svg width="36" height="26" viewBox="0 0 36 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M23.8485 1.43726C23.6297 1.17507 23.3105 1.01666 22.9691 1.00124C22.628 0.985818 22.2958 1.11469 22.0542 1.35623C21.8127 1.59802 21.6838 1.93 21.6992 2.27141C21.7147 2.61254 21.8728 2.93171 22.1352 3.15053L30.8755 11.9015H1.98525C1.56544 11.9237 1.18664 12.1606 0.982804 12.5284C0.779169 12.8962 0.779169 13.3429 0.982804 13.7107C1.1867 14.0785 1.56547 14.3153 1.98525 14.3375H30.8755L22.1212 23.0778C21.9008 23.3084 21.778 23.6153 21.778 23.9342C21.778 24.2534 21.9008 24.56 22.1212 24.7908C22.3481 25.0185 22.6563 25.1463 22.9778 25.1463C23.2991 25.1463 23.6073 25.0185 23.8342 24.7908L34.661 13.964C34.8939 13.74 35.0254 13.4307 35.0254 13.1076C35.0254 12.7843 34.8939 12.475 34.661 12.251L23.8485 1.43726Z" fill="blue" stroke="blue" strokeWidth="1.4"></path>
                                                        </svg>

                                                    </a>
                                                </div>
                                            </a>
                                        </div>


                                    </div>
                                    <a className="main_btn2" href="#">
                                        Load More
                                    </a>
                                </div>

                            </div>
                        </div>
                        <div className="tab-pane fade p_100" id="pills-speak" role="tabpanel" aria-labelledby="pills-speak-tab" tabindex="0">

                            <div className="container">
                                <div className="patient_speak_grid">

                                    <div className="video_box">
                                        <div className="inner_story_box doctor-box">
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
                                        <div className="inner_story_box doctor-box">
                                            <button className="play_button">
                                                <img src="play-btn.png" />
                                            </button>
                                            <video className="inner_story_video" loop muted controls>
                                                <source src="https://www.youtube.com/embed/K4TOrB7at0Y?si=Lxok0zfngVbfKeFq" />
                                            </video>
                                            <img className="inner_story_img" src="dr-bites.png" alt="Company Image" />
                                        </div>
                                        <div className="video_title">
                                            <p>Successfully Performed CABG &  Replacement at Jaypee Hospital, Noida</p>
                                        </div>
                                    </div>

                                    <div className="video_box">
                                        <div className="inner_story_box doctor-box">
                                            <button className="play_button">
                                                <img src="play-btn.png" />
                                            </button>
                                            <video className="inner_story_video" loop muted controls>
                                                <source src="https://www.youtube.com/embed/K4TOrB7at0Y?si=Lxok0zfngVbfKeFq" />
                                            </video>
                                            <img className="inner_story_img" src="dr-bites.png" alt="Company Image" />
                                        </div>
                                        <div className="video_title">
                                            <p>Bi-directional glenn surgery was performed by Dr Manoj Luthra</p>
                                        </div>
                                    </div>

                                    <div className="video_box">
                                        <div className="inner_story_box doctor-box">
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
                                        <div className="inner_story_box doctor-box">
                                            <button className="play_button">
                                                <img src="play-btn.png" />
                                            </button>
                                            <video className="inner_story_video" loop muted controls>
                                                <source src="https://www.youtube.com/embed/K4TOrB7at0Y?si=Lxok0zfngVbfKeFq" />
                                            </video>
                                            <img className="inner_story_img" src="dr-bites.png" alt="Company Image" />
                                        </div>
                                        <div className="video_title">
                                            <p>Successfully Performed CABG &  Replacement at Jaypee Hospital, Noida</p>
                                        </div>
                                    </div>

                                    <div className="video_box">
                                        <div className="inner_story_box doctor-box">
                                            <button className="play_button">
                                                <img src="play-btn.png" />
                                            </button>
                                            <video className="inner_story_video" loop muted controls>
                                                <source src="https://www.youtube.com/embed/K4TOrB7at0Y?si=Lxok0zfngVbfKeFq" />
                                            </video>
                                            <img className="inner_story_img" src="dr-bites.png" alt="Company Image" />
                                        </div>
                                        <div className="video_title">
                                            <p>Bi-directional glenn surgery was performed by Dr Manoj Luthra</p>
                                        </div>
                                    </div>

                                    <div className="video_box">
                                        <div className="inner_story_box doctor-box">
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
                                        <div className="inner_story_box doctor-box">
                                            <button className="play_button">
                                                <img src="play-btn.png" />
                                            </button>
                                            <video className="inner_story_video" loop muted controls>
                                                <source src="https://www.youtube.com/embed/K4TOrB7at0Y?si=Lxok0zfngVbfKeFq" />
                                            </video>
                                            <img className="inner_story_img" src="dr-bites.png" alt="Company Image" />
                                        </div>
                                        <div className="video_title">
                                            <p>Successfully Performed CABG &  Replacement at Jaypee Hospital, Noida</p>
                                        </div>
                                    </div>

                                    <div className="video_box">
                                        <div className="inner_story_box doctor-box">
                                            <button className="play_button">
                                                <img src="play-btn.png" />
                                            </button>
                                            <video className="inner_story_video" loop muted controls>
                                                <source src="https://www.youtube.com/embed/K4TOrB7at0Y?si=Lxok0zfngVbfKeFq" />
                                            </video>
                                            <img className="inner_story_img" src="dr-bites.png" alt="Company Image" />
                                        </div>
                                        <div className="video_title">
                                            <p>Bi-directional glenn surgery was performed by Dr Manoj Luthra</p>
                                        </div>
                                    </div>


                                </div>
                                <a className="main_btn2" href="#">
                                    Load More
                                </a>
                            </div>


                        </div>

                    </div>
                </section>

                {/* <div className="modal fade" id="specialityModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-xl">
                        <div className="modal-content">
                            <div className="modal-body speciality_video">
                                <iframe width="100%" height="100%" src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div> */}



            </main >
        <Footer />
        </>
    )
}
