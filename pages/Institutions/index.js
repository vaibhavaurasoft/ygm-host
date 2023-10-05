import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import aos from 'aos';
import 'aos/dist/aos.css';
import SEOHeadComponent from '../../components/SEOHeadComponent';
import CollegeComapareModal from '../../components/CollegeComapareModal';
import { isBrowser } from '../../utils/utilsFunctions';
import Pagination from '../../components/Pagination'
function Institutions({ College, currentPage, totalPages  }) {
    const type = ""
    const [collegeList, setCollegeList] = useState([])
    const [serchCollegeList, setSerchCollegeList] = useState([])
    const [inputVal, setInputVal] = useState("")
    const [selectedCollege, setSelectedCollege] = useState([]);
    const [showCompareModal, setShowCompareModal] = useState(false);
    // Iframe Function for Decode Data
    const getiframe = (iframe) => {
        if (iframe) {
            return {
                __html: iframe
            }
        } else {
            return;
        }
    }

    // passing Data in  college list
    useEffect(() => {
        setCollegeList(College.colleges)
        setSerchCollegeList(College.colleges)
    }, [College])


    // handaleChange function for search collehge 
    const handaleChange = (e) => {
        setInputVal(e.target.value)
        if (e.target.value !== null) {
            const Data = serchCollegeList.filter(item => item.college_name.toLowerCase().includes(e.target.value.toLowerCase()) || item.city.toLowerCase().includes(e.target.value.toLowerCase()))
            setCollegeList(Data)
        }
        else {
            setCollegeList(serchCollegeList)
        }
    }
    
    const handleCompare = (e, collegeId, collegeName) => {
        if (e.target.checked && selectedCollege && selectedCollege.length < 2) {
            setSelectedCollege(prev => [...prev, { collegeId, collegeName }]);
        } else if (!e.target.checked) {
            setSelectedCollege(prev => {
                return prev.filter((college) => college.collegeId != collegeId)
            });
            
        }
    }
    useEffect(() => {
        selectedCollege.length === 2 && setShowCompareModal(true);
    }, [selectedCollege])
    
    const handleClose = () => {
        setShowCompareModal(false);
        setSelectedCollege([]);
        const checkBoxes = Array.from(document.querySelectorAll(".compareColleges input[type=checkbox]"));
        checkBoxes.forEach((checkbox) => {
            checkbox.checked = false;
        })
    }
    useEffect(() => {
        aos.init();
    })
    return (
        <>
            <section className='college-list' data-aos="fade-right"
                data-aos-offset="500"
                data-aos-easing="ease-in-sine">
                <SEOHeadComponent title="Govt IIT Colleges in India with ITI and Polytechnic specialization" metaContent="Full Information about the top IIT colleges in India: Government colleges, Polytechnic Colleges, Colleges in Siliguri, and the best Colleges in Midnapore." h1="Top IIT Colleges in India for ITI and Polytechnic Courses " />
                <div className="container" data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="300"
                    data-aos-offset="0" >
                    <div className='serch_box'>
                        <h4 className='heading fs-40 my-4'>Institutions</h4>
                        <input className='Serch ms-auto' placeholder='search institution' value={inputVal} onInput={(e) => handaleChange(e)} />
                    </div>
                    <div className="row mx-auto justify-content-around">
                        {collegeList?.length !== 0 && isBrowser()
                            ?
                            collegeList?.map((college) => {
                                return (
                                    <div key={college.college_id} className='college-card col-lg-4 p-3 bg-transparent  col-md-6 pt-3' >
                                        <div className='Clg_list_card bg-transparent'>
                                            <div className="college-details bg-white">
                                                {collegeList.length > 1 &&
                                                    <div className='compareColleges' data-bs-toggle="tooltip" data-bs-placement="top" title="Select any 3 colleges to compare" style={{
                                                        position: "absolute", top: "-7%",
                                                        paddingRight: "2%", right: "0%", paddingTop: "1%"
                                                    }}>
                                                        <input id={college.college_id} type='checkbox' onChange={(e) => {
                                                            handleCompare(e, college.college_id, college.college_name)
                                                        }} />
                                                        <label htmlFor={college.college_id} >
                                                            <span></span>
                                                            Compare
                                                        </label>
                                                    </div>
                                                }
                                                <div className='college-image' data-aos="fade-zoom-up"
                                                    data-aos-easing="ease-in-back"
                                                    data-aos-delay="800"
                                                    data-aos-offset="0">
                                                    <img layout='fill' loader={() => college.college_img_path + college.college_image} src={college.college_img_path + college.college_image} alt="college list" />
                                                </div>
                                                <h6 className="college-name" data-aos="fade-zoom-in"
                                                    data-aos-easing="ease-in-back"
                                                    data-aos-delay="300"
                                                    data-aos-offset="0">{college.college_name} ({college.college_type})</h6>
                                                <div className='card-content' data-aos="fade-zoom-in"
                                                    data-aos-easing="ease-in-back"
                                                    data-aos-delay="300"
                                                    data-aos-offset="0">
                                                    <p className='text-content small_disc' dangerouslySetInnerHTML={getiframe(window.atob(college.description))}></p>
                                                    <div className='redirection pb-3'>
                                                        <Link href={{ pathname: `/Institutions/moreabout/${college.college_slug}` }}> Read More</Link>
                                                        <Link className="btn btn-white btn-animate mx-auto" href={`/Institutions/collegeform/${college.college_slug}?type=${college.college_type}`}>Apply Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                            : (type === '3' ? (
                                <div className='text-danger text-center p-3'>No coaching/ institutions available found for this course.</div>
                            ) : (
                                <div className='text-danger text-center p-3'>No colleges/ universities available for this course.</div>
                            )
                            )
                        }
                    </div>
                    {totalPages > 1 && <Pagination totalPages={totalPages} pageName="Institutions" currentPage={currentPage} />}
                </div>
            </section>
            <CollegeComapareModal showCompareModal={showCompareModal} handleClose={handleClose} selectedCollege={selectedCollege} />
        </>

    )
}

export async function getServerSideProps({ query }) {
    const page = Number(query.page || 1)
    let response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/get_colleges.php?currentpage=${page}`)
    response = await response.json();
    return {
        props:
        {
            College: response,
            currentPage: page,
            totalPages:response?.totalpages || 1
        }
    };
}

export default Institutions