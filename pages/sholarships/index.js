import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap';
import TopBanner from '../../components/TopBanner';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SEOHeadComponent from '../../components/SEOHeadComponent';
import Sholarship from '../../components/Sholarships';
import { Box, Tab, Tabs } from '@mui/material';
import apiCall from '../../utils/apiCall';
function ScholarshipParent({ scholarshipTypes }) {
    const [scholarships, setScholarships] = useState([]);
    const [value, setValue] = useState(0);
    const [slug, setSlug] = useState(scholarshipTypes[0].slug)


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        AOS.init();
    })


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
                {value === index && props.children != "undefined" && slug != null && scholarships && scholarships.length == 0 ? <div className='text-danger text-center p-3'>No data available for this category!</div> :
                    <div className="scholarships"
                        data-aos="zoom-in-right"
                        data-aos-easing="ease-in-back" data-aos-offset="0"
                    >
                        {scholarships && scholarships.map((scholarship, i) => {
                            return <Sholarship scholarship={scholarship} key={i} />;
                        })}
                    </div>

                }
            </div>
        );
    }

    useEffect(() => {
        const getScholarships = async () => {
            try {
                const response = await apiCall(`/get_scholarship_by_type.php?slug=${slug}`, "get");
                setScholarships(response.data.scholarships);
            } catch (error) {
                console.log(error.message)
            }
        }
        getScholarships()
    }, [slug])

    return (
        <>

            <TopBanner imagPath={"/Image/ContactUs.png"} alt={"for collage information contact us"} />
            <SEOHeadComponent title='No. 1 Career Counseling agency in Indore, Get Your College' metaContent='Get Your College (GYC) is the best Career Counselor in Indore. GYC helps you understand your passion and achieve your dreams and gets you a right college.' h1='Scholarships' />
            <Container  >
                <Row>
                    <h3 className='heading mt-4'>Schoalrships type</h3>
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
                            {scholarshipTypes.length ? scholarshipTypes.map(type => {
                                return <Tab label={type?.scholarship_type} key={type?.sc_id} onClick={() => { setSlug(type?.slug) }} />

                            }) :
                                <div className='text-danger text-center p-3'>No scholarship available for this type!</div>
                            }
                        </Tabs>
                    </Box>
                    <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', width: "100%", height: "auto" }}>

                        {
                            scholarshipTypes.length && scholarshipTypes.map((item, index) => {
                                return <TabPanel value={value} index={index} key={item}></TabPanel>
                            })
                        }
                    </Box>
                </Row>
            </Container>
        </>
    )
}

export async function loadScholarshipsType() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/get_scholarship_types.php`)
        const data = await res.json()
        return data
    } catch (error) {
        console.log("error", error);
    }
}



export async function getServerSideProps() {
    const scholarshipTypesData = await loadScholarshipsType();
    const scholarshipTypes = scholarshipTypesData?.scholarship_types;
    return { props: { scholarshipTypes } }
}

export default ScholarshipParent;