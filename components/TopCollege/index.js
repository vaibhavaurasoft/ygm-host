import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import apiCall from '../../utils/apiCall';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function TopCollege({ data }) {
    const [College, setCollege] = useState({})
    const [cateogry, setCateogry] = useState(data?.college_category[0].categoryID || '1')
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState();
    // ===========
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        setCurrentPage(1);
    };

    useEffect(() => {
        const getCollege = async () => {
            try {
                const response = await apiCall(`/get_college_by_category.php?category=${cateogry ? cateogry : 1}&currentpage=${currentPage}`, "get")
                setCollege(response.data)
                setTotalPages(response.data.totalpages)
                setCurrentPage(response.data.current_page)
            } catch (error) {
                console.log(error.message)
            }
        }
        getCollege()
    }, [cateogry, currentPage])
    // ============

    function TabPanel(props) {
        const { children, value, index, ...other } = props;
        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`vertical-tabpanel-${index}`}
                aria-labelledby={`vertical-tab-${index}`}
                {...other}
            >
                {value === index && props.children != "undefined" && cateogry != null && (
                    <div className='container Top_college_container_inner_box pb-2'>
                        <div className="row">
                            {
                               College?.colleges && College.colleges.length == 0 && <div className='text-danger text-center p-3'>No data available for this category!</div>
                            }
                            {
                                College?.colleges && College.colleges.map(item => {
                                    return <div className="col-sm-4  mb-5 " key={item.college_id}>
                                        <div className="card">
                                            <div className="card-body top_college_card">
                                                <h5 className="card-title ">{item.college_name}</h5>
                                                <small>{item.address}</small><br />
                                                <a href="#" className="btn BG_button mt-2"> <Link href={{ pathname: `/Institutions/moreabout/${item.college_slug}` }}> Read More</Link></a>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                            {totalPages > 1 && College.colleges && College.colleges.length && <nav className="ms-3" aria-label="Page navigation example" style={{ "width": "95%" }}>
                                <ul className="pagination" >
                                    {Number(currentPage) !== 1 && <li className="page-item"><a className="page-link" onClick={() => setCurrentPage(Number(currentPage) - 1)}>Prev</a></li>}
                                    {
                                        Array.from({ length: totalPages }).map((_, i) => (
                                            <li key={i} className={`page-item ${Number(currentPage) == i + 1 ? "active" : ""}`}><a className="page-link" onClick={() => setCurrentPage(i + 1)}>{i + 1}</a></li>
                                        ))
                                    }
                                    {Number(currentPage) !== totalPages && <li className={`page-item ${Number(currentPage) == totalPages ? "disabled" : ""}`}><a className="page-link" onClick={() => setCurrentPage(Number(currentPage) + 1)}>Next</a></li>}
                                </ul>
                            </nav>
                            }
                        </div>
                    </div>
                )}
            </div>
        );
    }
    useEffect(() => {
        AOS.init();
    },[])
    return (
        <>
            <div className='container Top_college_container' data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="500" data-aos-offset="0" >
                <h3 className='heading'>Top Colleges</h3> <br />
                <small>Colleges cherry picked for you</small>
                <Box sx={{ mx: 'auto', maxWidth: 1400, my: "-2", bgcolor: 'background.paper' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example"
                        TabIndicatorProps={{
                            sx: { backgroundColor: "var(--logoBlack)" }
                        }}
                    >
                        {
                            data.college_category.map(item => {
                                return <Tab label={item.category_name} key={item.categoryID} onClick={() => { setCateogry(item.categoryID) }} />
                            })
                        }
                    </Tabs>
                </Box>
                <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', width: "100%", height: 224 }}>
                    {
                        data.college_category.map((item, index) => {
                            return <TabPanel value={value} index={index} key={item}></TabPanel>
                        })
                    }
                </Box>
            </div>
        </>
    );
}