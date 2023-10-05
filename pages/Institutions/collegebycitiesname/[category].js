import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import CollegeComapareModal from '../../../components/CollegeComapareModal';
import { isBrowser } from '../../../utils/utilsFunctions';
import Pagination from '../../../components/Pagination';
function Course({ courseData, query, currentPage, totalPages, category }) {
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
        setCollegeList(courseData.college)
        setSerchCollegeList(courseData.college)
    }, [courseData])


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
    return (
        <>
            <section className='college-list'>
                <div className="container">
                    <div className='serch_box'>
                        <h1 className='heading fs-40 my-4 animate-charcter'>{query.category}</h1>
                        <input className='Serch ms-auto' placeholder='search coaching/institution' value={inputVal} onInput={(e) => handaleChange(e)}></input>
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
                                                <div className='college-image'>
                                                    <Image loader={() => college.college_img_path + college.college_image} src={college.college_img_path + college.college_image} width="450" height="300" alt='college image'></Image>
                                                </div>
                                                <h6 className="college-name">{college.college_name} ({college.college_type})</h6>
                                                <div className='card-content'>
                                                    <p className='text-content small_disc' dangerouslySetInnerHTML={getiframe(window.atob(college.description))}></p>
                                                    <div className='redirection pb-3'>
                                                        <Link href={`/Institutions/moreabout/${college.college_slug}?category=${query.category}`}> Read More</Link>
                                                        <Link className="btn btn-white btn-animate mx-auto" href={`/Institutions/collegeform/${college.college_slug}?type=${college.college_type}`}>Apply Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                            : <div className='text-danger text-center p-3'>No data available for <b>{query.category}</b> category.</div>
                        }
                    </div>
                    { totalPages > 1 && <Pagination totalPages={totalPages} pageName={`Institutions/collegebycitiesname/${category}`} currentPage={currentPage}/> }
                </div>
            </section>
            <CollegeComapareModal showCompareModal={showCompareModal} handleClose={handleClose} selectedCollege={selectedCollege} />
        </>
    )
}

export default Course

// SSR Function for data fetching
export async function getServerSideProps(context) {
    const { params, query } = context
    const page = Number(query.page || 1);    
    const { category } = params
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/get_college_by_city.php?city=${category}&currentpage=${page}`) 
    const data = await response.json()
    return {
        props: {
            courseData: data,
            category,
            query,
            currentPage: page,
            totalPages:data?.totalpages || 1,
            category
        }
    }
}