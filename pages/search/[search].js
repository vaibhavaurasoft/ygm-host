import React, { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import 'aos/dist/aos.css';
import Link from 'next/link';
import 'aos/dist/aos.css';
import { IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { isBrowser } from '../../utils/utilsFunctions';
const Search = ({ query, data }) => {
    const [collegeList, setCollegeList] = useState([])
    const [serchCollegeList, setSerchCollegeList] = useState([])
    const [inputVal, setInputVal] = useState("")
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
        setCollegeList(data.colleges)
        setSerchCollegeList(data.colleges)
    }, [data])


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

    const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
    })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    }));

    // export default function RecipeReviewCard() {
    const [expanded, setExpanded] = React.useState(false);

    return (
        <>

            <section className='college-list' >
                <div className="container" >
                    <div className='serch_box'>
                        <h4 className='heading fs-40 my-4'>{query.search} search result</h4>
                        <input className='Serch ms-auto' placeholder='search institution' value={inputVal} onInput={(e) => handaleChange(e)} />
                    </div>
                    <div className="row mx-auto justify-content-around">
                        {
                            data.colleges.length == 0 && <div className='text-danger text-center p-3'>No data available for this {query.search}.</div>
                        }
                        {collegeList?.length !== 0 && isBrowser()
                            &&
                            collegeList?.map((college) => {
                                return (
                                    <div key={college.college_id} className='college-card col-lg-4 p-3 bg-transparent  col-md-6 pt-3' >
                                        <div className='Clg_list_card bg-transparent'>
                                            <div className="college-details bg-white">
                                                <div className='college-image'>
                                                    <img layout='fill' loader={() => college.college_img_path + college.college_image} src={college.college_img_path + college.college_image} alt="college list" />
                                                </div>
                                                <h6 className="college-name">{college.college_name} ({college.college_type})</h6>
                                                <div className='card-content'>
                                                    <p className='text-content fs small_disc' dangerouslySetInnerHTML={getiframe(window.atob(college.description))}></p>
                                                    <div className='redirection pb-3'>
                                                        <Link href={{ pathname: `/Institutions/moreabout/${college.slug}` }}> Read More</Link>
                                                        <Link className="btn btn-white btn-animate mx-auto" href={`/Institutions/collegeform/${college.slug}?courses=${college.slug}&type=${college.college_type}`}>Apply Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </section>
        </>
    )
}

export default Search

export async function getServerSideProps(context) {
    const { params, query } = context
    const search = query.search.toLowerCase()
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search_college.php?search=${search}`)
    const data = await response.json()
    return {
        props: {
            data,
            query,
            search
        }
    }
}