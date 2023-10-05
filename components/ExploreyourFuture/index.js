import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Link from 'next/link';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import aos from 'aos';
import 'aos/dist/aos.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTopCoaching } from '../../redux/slices/coaching/topCoachingSlice';

// import Exam from './components/Exam/Exam'
// import College from './components/College/college'
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    indicatorColor: "secondary"
}));


function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
export default function ExploreyourFuture({ ExploreCategory }) {
    const [redio, setRedio] = useState("1");
    const CoachingCategoryData = useSelector((state) => state.topCoaching.data);
    const dispatch = useDispatch();

    const handleChangeRedio = (event) => {
        setRedio(event.target.value);
    };
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    useEffect(() => {
        aos.init();
        dispatch(fetchTopCoaching())
    }, [])

    return (
        <div>
            <div className='container data-aos="fade-right" '>
                <h3 data-aos="zoom-in-right" data-aos-easing="ease-in-back" data-aos-delay="500" data-aos-offset="0" className="heading">Explore your Future </h3>
                <Box sx={{ width: '100%' }}>
                    <TabPanel value={value} index={0}>
                        Select for <span className="Explore_span">College</span>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        Select for  <span className="Explore_span">Exam</span>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        Select for  <span className="Explore_span">Coaching</span>
                    </TabPanel>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" TabIndicatorProps={{
                            sx: { backgroundColor: "var(--logoBlack)" }
                        }}>
                            <Tab label="College" {...a11yProps(0)} />
                            <Tab label="Exam" {...a11yProps(1)} />
                            <Tab label="Coaching" {...a11yProps(2)} />
                        </Tabs>
                    </Box>
                </Box>
                <Box sx={{ width: '100%' }}>
                    <Item>
                        <TabPanel value={value} index={0}>
                            <div className='row'>
                                {
                                    ExploreCategory.CollegeCategoryData.college_category && ExploreCategory.CollegeCategoryData.college_category.map(item => {
                                        return <Link href={`/Institutions/collegebycategory/${item.categoryID}?type=${item.slug}`} key={item.category_id}>
                                            <a className='col-md-3 my-3 category_card row '>
                                                <div className='col-3 col_icon '>
                                                    {
                                                        item.image == "" ? <i className="ri-file-copy-fill"></i>
                                                            : <img className="img_icon" loader={() => `${item.image_path + item.image}`} src={`${item.image_path + item.image}`} width="100%" height="100%" alt="carogery image" />
                                                    }
                                                </div>
                                                <div className='col-9 mx-auto category_card_text' data-aos="fade-right">
                                                    <p className='mb-0'>  {item.category_name}</p>
                                                    <small> {item.number_of_institutes} College</small>
                                                </div>
                                            </a>
                                        </Link>
                                    })
                                }
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <div className='row '>
                                <RadioGroup
                                    row
                                    defaultValue="1"
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel value={1} onChange={handleChangeRedio} control={<Radio />} label="UG Exams" />
                                    <FormControlLabel value={2} onChange={handleChangeRedio} control={<Radio />} label="PG Exams" />
                                </RadioGroup>
                                {
                                    redio == 1 && ExploreCategory.UG_Exams_Data.exam_category && ExploreCategory.UG_Exams_Data.exam_category.map(item => {
                                        return <Link key={item.category_id} href={`/exams/examsbycategory/${item.slug}?type=${item.category_id}`} >
                                            <a className='col-md-3 my-3 category_card row '>
                                                <div className='col-3 col_icon '>
                                                    {
                                                        item.image == "" ? <i className="ri-file-copy-fill"></i>
                                                            : <img className="img_icon" loader={() => `${item.image_path + item.image}`} src={`${item.image_path + item.image}`} width="100%" height="100%" alt="carogery image" />
                                                    }
                                                </div>
                                                <div className='col-9 mx-auto category_card_text row' data-aos="fade-right">
                                                    <small className='mb-0 Color_blue'>  {item.category_name}</small>
                                                    <small> {item.number_of_exams} Exams</small>
                                                </div>
                                            </a>
                                        </Link>
                                    })
                                }
                                {
                                    redio == 2 && ExploreCategory.PG_Exams_Data.exam_category && ExploreCategory.PG_Exams_Data.exam_category.map(item => {
                                        return <Link key={item.category_id} href={`/exams/examsbycategory/${item.slug}?type=${item.category_id}`} >
                                            <a className='col-md-3 my-3 category_card row '>
                                                <div className='col-3 col_icon '>
                                                    {
                                                        item.image == "" ? <i className="ri-file-copy-fill"></i>
                                                            : <img className="img_icon" loader={() => `${item.image_path + item.image}`} src={`${item.image_path + item.image}`} width="100%" height="100%" alt="carogery image" />
                                                    }
                                                </div>
                                                <div className='col-9 mx-auto category_card_text' data-aos="fade-right">
                                                    <small className='mb-0 Color_blue'>  {item.category_name}</small>
                                                    <small> {item.number_of_exams} Exams</small>
                                                </div>
                                            </a>
                                        </Link>
                                    })
                                }
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <div className='row'>
                                {
                                    CoachingCategoryData && CoachingCategoryData.college_category && CoachingCategoryData.college_category.map(item => {
                                        return <Link key={item.category_id} href={`/Institutions/collegebycategory/${item.categoryID}?course=${item.slug}&type=Coaching`} >
                                            <a className='col-md-3 my-3 category_card row '>
                                                <div className='col-3 col_icon '>
                                                    {
                                                        item.image == "" ? <i className="ri-file-copy-fill"></i>
                                                            : <img className="img_icon" loader={() => `${item.image_path + item.image}`} src={`${item.image_path + item.image}`} width="100%" height="100%" alt="carogery image" />
                                                    }
                                                </div>

                                                <div className='col-9 mx-auto category_card_text' data-aos="fade-right">
                                                    <p className='mb-0 Color_blue'>  {item.category_name}</p>
                                                    <small> {item.number_of_institutes} Coaching</small>
                                                </div>
                                            </a>
                                        </Link>
                                    })
                                }
                            </div>
                        </TabPanel>
                    </Item>
                </Box>
            </div >
        </div>
    );
}