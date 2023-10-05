import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Testimonials from "../components/Testimonials"
import AOS from 'aos';
import 'aos/dist/aos.css';
import SEOHeadComponent from '../components/SEOHeadComponent';
import process from './process.json'

function About({ TestimonialsData }) {

    const [processDescription, setprocessDescription] = useState({})

    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <SEOHeadComponent title='About Get Your College' metaContent='It aims to “bridge the gap between the aspirants and the institutions, which they desire and deserve.” We are young and passionate #Edupreneurs, having a base in Indore and a global mindset.' />
            <div className="About_Top">
                <div className="background-container">
                    <div className="bg-1"></div>
                    <div className="bg-2" ></div>
                </div>
                <div className="about-container" >
                    <div className="text-container">
                        <div className='hed'>
                            <h2 data-aos="zoom-out-left" className='page_main_heading mb-0'>Your Global Mentors</h2>
                            <h3 data-aos="zoom-out-left" className="py-2 ">Bridging the gap between Dream & Destiny</h3>
                        </div>
                        <p data-aos="zoom-in" data-aos-duration="800">The foundation of Your Global Mentors (YGM) was led by Mr. Atul Jain in the year
                            2018 who now has more than 15 years of experience. He took this initiative along
                            with Mrs. Alisha Jain who has also been a counselor by profession and has several
                            years of experience in the education field. YGM is an overseas consultancy firm that
                            assists students who dream to study abroad. We have earned the trust of numerous
                            students by providing them with the best guidance and service. Since the last few
                            years, Your Global Mentors has become the preferred choice of students aiming to
                            go abroad.</p>
                        <p data-aos="zoom-in" data-aos-duration="800">Our experts with years of experience in the education field, help students get
                            admission to the best university by understanding their preferred course and country.
                            We work for admission in USA, Canada, UK, Australia, Ireland, Europe, Singapore,
                            New Zealand, and Dubai.</p>
                        <p data-aos="zoom-in">Additionally, we prepare students for demanding exams like IELTS, PTE, GRE,
                            GMAT, SAT, TOEFL, DET.</p>
                        <p data-aos="zoom-in">From analyzing students&apos; preference of course and country, building and enhancing
                            their profile, Providing customized SOPs and LORs, and applying for scholarships,
                            visas, and assistance in education Loans and accommodation. </p>

                        {/* <div className='container py-md-5'> */}
                        <div className='hed'>
                            <h2 data-aos="zoom-out-left" className='page_main_heading mb-0'>MISSION</h2>
                            <h3 data-aos="zoom-out-left" className="py-2">Beyond Boundaries, Beyond Literacy</h3>
                        </div>
                        <p data-aos="fade-right " data-aos-duration="500" className="card-text mx-auto">Your Global Mentors aims to redefine education by offering enriching global learning experiences and providing comprehensive guidance to inspire students to become well-rounded global citizens, going beyond mere literacy.</p>
                        {/* </div> */}
                    </div>
                </div>
            </div>
            <div className='container-fluid p-md-5 Director'>
                <h3 className="heading_46">ABOUT THE PROTAGONISTS</h3>
                <div className="card container " >
                    <div className="row g-0 my-4 " >
                        <div className="col-md-4 text-center" >
                            <div className='A-img '>
                                <Image loader={() => '/Image/about/Atulsir.png'} src="/Image/about/Atulsir.png" width="300px" height="350px" alt='best career counsellor atul sir'></Image>
                            </div>
                        </div>
                        <div className="col-md-8 text d-flex  align-items-center">
                            <div className="card-body p-0 m-auto ">
                                <h4 data-aos="fade-right" data-aos-duration="500" className="card-title">ATUL JAIN <span> (CEO & Founder)</span></h4>
                                <p data-aos="fade-right" data-aos-duration="500" className="card-text">An educationist by heart and an edupreneur by choice. He has counselled and shaped the careers of more than 25,000 students over the years. An alumnus from <b>Mumbai University</b>, and a <b>Gold Medallist in MBA</b>, he has worked for the most renowned companies and organisations, gaining valuable experience in the field of educational consultancy and management and operation, like<b> Dale Carnegie</b>, <b>EduRiser</b> (A Videocon Group Company). He has also <b>steered EduBirds</b> (One of Indore&apos;yyys most successful commerce and competitive exam coaching with over 1000+ students annually  in 6 Centres)  and overall <b>15 years</b> of <b>Experience in coaching and counselling domain</b>.</p>
                                <h4>
                                    <ul>
                                        <li data-aos="flip-left" data-aos-duration="500"><a href={process.env.NEXT_PUBLIC_CEO_INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"> <i className="ri-instagram-line fa-brands"></i></a></li>
                                        <li data-aos="flip-left" data-aos-duration="500"> <a href={process.env.NEXT_PUBLIC_CEO_TWITTER_URL} target="_blank" rel="noopener noreferrer"><i className="ri-twitter-line fa-brands"></i></a> </li>
                                        <li data-aos="flip-left" data-aos-duration="500"> <a href={process.env.NEXT_PUBLIC_CEO_FACEBOOK_URL} target="_blank" rel="noopener noreferrer"><i className="ri-facebook-fill fa-brands"></i></a> </li>
                                        <li data-aos="flip-left" data-aos-duration="500"> <a href={process.env.NEXT_PUBLIC_CEO_LINKEDIN_URL} target="_blank" rel="noopener noreferrer"><i className="ri-linkedin-fill fa-brands"></i></a> </li>
                                    </ul>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card container my-md-4 my-3" >
                    <div className="row g-0 flex-row   flex-md-row-reverse">
                        <div className="col-md-4 text-center" >
                            <div className='A-img'>
                                <Image loader={() => '/Image/about/AlishaJain.png'} src="/Image/about/AlishaJain.png" width="350px" height="350px" alt='director of getyourcollege and counsellor'></Image>
                            </div>
                        </div>
                        <div className="col-md-8 d-flex  text align-items-center">
                            <div className="card-body p-0 m-auto ">
                                <h4 data-aos="fade-left" data-aos-duration="500" className="card-title">Alisha Jain <span>(Director)</span></h4>
                                <p data-aos="fade-left" data-aos-duration="500" className="card-text">A <b>Symbiosis Alumnus</b> with <b>7+ Years</b> of Experience as a <b>counsellor</b>, she has been conducting <b>training</b>, <b>workshops</b>, <b>lectures</b>, <b>presentations</b>, and other events to develop career planning and employability skills for students. She plays a <b>crucial role</b> in providing the best-suited opportunities to students from all walks of life and has vast knowledge and passion for this field. </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card container ">
                    <div className="row g-0 my-4 " >
                        <div className="col-md-4 text-center" >
                            <div className='img '>
                                <Image loader={() => '/Image/about/PrachiGharpure.jpeg'} src="/Image/about/PrachiGharpure.jpeg" width="300px" height="350px" alt='reema jain gyc'></Image>
                            </div>
                        </div>
                        <div className="col-md-8 text d-flex  align-items-center">
                            <div className="card-body p-0 m-auto ">
                                <h4 data-aos="fade-right" data-aos-duration="500" className="card-title">Dr. Prachi Gharpure</h4>
                                <p data-aos="fade-right" data-aos-duration="500" className="card-text">Dr Prachi Gharpure is former director of NMIMS Indore campus.  She started her
                                    career as faculty at Bhavan&apos;yyys SPCE a prestigious engineering college under Mumbai
                                    University and continued with Bhavan&apos;yyys SPIT as professor in computer engineering
                                    and then <b>Principal</b> of SPIT. She holds a BE from SGSITS Indore, ME from VJTI
                                    Mumbai and a <b>PhD</b> in computer from SNDT.
                                </p>
                                <p data-aos="fade-right" data-aos-duration="500" className="card-text">During her<b> 37 years</b> of experience in academics she has counselled and mentored
                                    hundreds of students with regards to education and career selection and master&apos;yyys
                                    degree abroad. She believes that education is not about degree only but must make
                                    a fine person out of the students and most important enable them with the skill of
                                    learning to learn. As a partner in “Your Global Mentors” she now aims to work with
                                    school and university students to help them make an appropriate educational and
                                    career choice.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card container my-md-4 my-3" >
                    <div className="row g-0 flex-row   flex-md-row-reverse">
                        <div className="col-md-4 text-center" >
                            <div className='A-img'>
                                <Image loader={() => '/Image/about/MadhaviDabholkar.JPG'} src="/Image/about/MadhaviDabholkar.JPG" width="350px" height="350px" alt='director of getyourcollege and counsellor'></Image>
                            </div>
                        </div>
                        <div className="col-md-8 d-flex  text align-items-center">
                            <div className="card-body p-0 m-auto ">
                                <h4 data-aos="fade-left" data-aos-duration="500" className="card-title">Madhavi Dhabolkar </h4>
                                <p data-aos="fade-left" data-aos-duration="500" className="card-text">A post graduate in Psychology from Devi Ahilya Vishwavidyalaya Indore. She is also
                                    a <b>certified Psychometric test professional</b> from ME consultants in collaboration
                                    with CAMI, USA. She has been providing counseling to children, adolescent teens
                                    and adults for the past several years. She has played an important role in shaping
                                    the lives of a number of students by giving them the right direction in careers,
                                    through her career counseling sessions.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card container ">
                    <div className="row g-0 my-4 " >
                        <div className="col-md-4 text-center" >
                            <div className='img '>
                                <Image loader={() => '/Image/about/ReemaJain.png'} src="/Image/about/ReemaJain.png" width="300px" height="350px" alt='reema jain gyc'></Image>
                            </div>
                        </div>
                        <div className="col-md-8 text d-flex  align-items-center">
                            <div className="card-body p-0 m-auto ">
                                <h4 data-aos="fade-right" data-aos-duration="500" className="card-title">Reema Jain </h4>
                                <p data-aos="fade-right" data-aos-duration="500" className="card-text"><b>Ms. Reema Jain</b> is an excellent teacher, professional speaker, counsellor and mentor who has <b>10+ years experience</b> in teaching and counselling students. She has done <b>B.Sc</b> in Maths from Vikram University, <b>MBA</b> and <b>LLB</b> (Hons)from <b>DAVV</b> Indore. She has been the <b>Asst. Prof and Head</b> of Admissions in renowned college of Indore. She is an accomplished academician and counsellor who paves paths for students to excel in their careers. She has assisted more than 4000 students over the years. She is an outstanding orator who has addressed more than 8000 students and motivated them to do better in their lives.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <section id='Our_Process' data-aos="zoom-in"
                data-aos-duration="500">

                <div className='container'><h3 className="heading_46 ">OUR PROCESS </h3></div>

                <div className=' Our_Process' style={{cursor:"pointer"}} data-aos="zoom-out-down">

                    {process?.process.map((item, index) => <div key={index} className='Our_Process_card'>
                        <div className='Our_Process_text' data-toggle="modal" data-target="#exampleModalCenter" onClick={() => setprocessDescription(item)}>
                            <h4>{index + 1}.{item.heading} </h4>
                        </div>
                    </div>)}
                </div>
            </section>
            <div className='container'><h3 className="heading_46 "> BENEFITS FOR STUDENTS </h3></div>
            <section id='Benefites' className=''>
                {/* <ul > */}
                <li data-aos="zoom-out-right" className='new_li my-2 fw-600 odd'>Highly dedicated and experienced team of professionals, who understand
                    your interests, budget, and plans for studying abroad.</li>
                <li data-aos="zoom-out-left" className='new_li my-2 ms-auto fw-600 even'>We have tie-ups with well-equipped Universities, Colleges, Accommodations
                    abroad, Loans providers so that you don&apos;yyyt face any problems in any step in
                    achieving your dreams.</li>
                <li data-aos="zoom-out-right" className='new_li my-2  fw-600 odd'>  We offer guidance and support throughout the process beginning from Profile
                    building to all the way you reach in your dream country to study.</li>
                <li data-aos="zoom-out-left" className='new_li my-2 ms-auto fw-600 even'> We are a one-stop solution concerning providing all the study abroad
                    services.</li>
                <li data-aos="zoom-out-right" className='new_li my-2 fw-600 odd'> We are driven by the principle of honesty and integrity, so that we can guide
                    the students in their career path, with the utmost candour.</li>
                <li data-aos="zoom-out-left" className='new_li my-2 ms-auto fw-600 even'>Cost-effective solution to your career confusion.</li>
                <li data-aos="zoom-out-right" className='new_li my-2 fw-600 odd'>We are distinctive in our field, ‘Not for what we do, but the way we execute it!”</li>
                {/* </ul> */}
            </section>
            {/* <section id='Counseling_courses' data-aos="zoom-in"
                data-aos-duration="500">
                <div className='Counseling_courses p-1'>
                    <h3 className="heading_46">Get Complete Counseling on Courses like</h3><br></br>
                    <div>1.	Management (MBA & BBA)</div>
                    <div>2.	Law (BA LLB, BBA LLB, B.Com LLB, LLB, LLM)</div>
                    <div>3.	Engineering (B.E. & B.Tech & M.Tech)</div>
                    <div>4.	Medical</div>
                    <div>5.	CA</div>
                    <div>6.	CS</div>
                    <div>7.	Nursing</div>
                    <div>8.	Physiotherapy</div>
                    <div>9.	Pharma (B.Pharm & D.Pharm)</div>
                    <div>10.(B.Des & M.Des)</div>
                    <div>11.Mass Communication & Journalism</div>
                    <div>12.Hotel Management</div>
                    <div>13.Event Management</div>
                    <div>14.Commerce  (B.Com & B.Com Hons)</div>
                    <div>15.Architecture</div>
                    <div>16.Liberal Studies</div>
                    <div>17.Sports Management</div>
                    <div>18.Public Administration & Policy Making</div>
                    <div>19.Aviation</div>
                    <div>20.Food & Agriculture</div>
                    <div>21.Civil services</div>
                    <div>22.Banking</div>
                    <div>23.Psychology</div>
                    <div>24.Digital Marketing</div>
                    <div>25.Data analytics</div>
                    <div>26.Animation & Visual Effects</div>

                </div>
            </section> */}
            <section id="Sister_Concerns " data-aos="zoom-in"
                data-aos-duration="500">
                <div className="Sister_Concerns container px-md-0">
                    <div className='container'> <h3 className="heading_46">About Sister Concerns </h3></div>
                    <div className='row '>

                        <div className='col-md-6 text-center' data-aos="zoom-out-right">
                            <Image loader={() => '/Image/logo/ygm.png'} src="/Image/logo/ygm.png" width="200px" height="170px" alt='your global mentors logo'></Image>
                            <p> <b className='main-heading'> GET YOUR COLLEGE :-</b> GET YOUR COLLEGE (GYC) is an initiative, steered by Mr Atul Jain & Mrs Alisha
                                Jain who have combined experience and expertise in the field of educational
                                consultancies, for over 11 years now. It aims to “bridge the gap between the
                                aspirants and the institutions, which they desire and deserve.” We are young and
                                passionate #Edupreneurs, having a base in Indore and a global mindset. With
                                alumni from Mumbai University, Symbiosis Institute of Management, and Devi Ahilya
                                Vishwavidhyalaya as our founding members, we understand the significance of
                                quality education and its impact on young minds and their careers. Our idea and aim
                                is to become the leaders in the field of student counseling, in India, upholding
                                honesty and integrity, above all. We nurture your dreams with utmost sincerity.</p>
                            <p>
                                Through the pan-India reach we have, our objective is to provide the students with
                                multitudinous options to choose from, among the most prominent colleges in India.
                                We attempt to make the distance between the aspirants and the colleges a little
                                shorter. We thrive to achieve this by outreaching the virtual boundaries and
                                designing the most appropriate study program for you, available nationally</p>
                            <b>Go to the website :-</b>  <a href={process.env.NEXT_PUBLIC_YGM_URL}>Click Here</a>
                        </div>
                        <div className='col-md-6 text-center' target="_blank" rel="noopener noreferrer" data-aos="zoom-out-left">
                            <Image loader={() => '/Image/logo/cbalogo.png'} src="/Image/logo/cbalogo.png" width="165px" height="170px" alt='cbalogo'></Image>
                            <p> <b className='main-heading'>	Counseling By Atul  :-</b>At Counseling by Atul, we strongly believe that ‘ Happiness comes in doing what you love&apos;yyy. We take active steps to empower students towards the right career path for a happy and successful future. For the same, we put in our thorough research, experience, knowledge, and expertise to help students realize their potential and maximize it in the right direction.</p>
                            <p>We love shaping innovators of tomorrow!</p>
                            <p>Over time, we have noticed that students and professionals often end up compromising on their careers due to a lack of guidance or because they find themselves confused with the wide variety of options available. Counseling by Atul was started with an aim to guide such youthful adults in the right direction and throw light on the available solutions available for their career paths.</p>
                            <b>Go to the website :-</b>  <a href='https://counselingbyatul.com/'>Click Here</a>
                        </div>
                    </div>
                </div>
            </section>
            <Testimonials data={TestimonialsData} />
            {/* <!-- Modal --> */}
            <div class="modal fade " id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered px-3" role="document">
                    <div class="modal-content Our_Process_Desc">
                        <div class="modal-header" style={{fontSize:"40px",cursor:"pointer"}}>
                            <i className="bi bi-x ms-auto" data-dismiss="modal"></i>
                        </div>
                        <div class="mb-2 modal-body">
                            <p>{processDescription.description}</p>
                            <p>{processDescription.description1}</p>
                            <p>{processDescription.description2}</p>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}
export async function loadPosts() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/get_testimonials.php`)
    const data = await res.json()
    return data
}



export async function getServerSideProps() {
    const TestimonialsData = await loadPosts()
    return { props: { TestimonialsData } }
}

export default About