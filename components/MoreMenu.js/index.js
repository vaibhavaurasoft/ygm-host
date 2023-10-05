import React, { useEffect, useRef } from 'react';
import { Popover, Typography, Button, Grid, Paper, styled } from '@mui/material';
import Link from "next/link"
import { Container } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function MoreMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const wrapperRef = useRef(null);
    useOutsideHandler(wrapperRef);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    function useOutsideHandler(ref) {
        useEffect(() => {

            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setAnchorEl(null);
                }
            }
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }


    useEffect(() => {
        AOS.init();
    })

    return (
        <div ref={wrapperRef}>
            <svg aria-describedby={id} onClick={handleClick} className="toggle_bar" xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 16 16" fill="rgba(195,168,35,255)"><path d="M12 12h4v4h-4zm0-6h4v4h-4zM6 0h4v4H6zm10 0v4h-4V0zM6 6h4v4H6zM0 6h4v4H0zm0 6h4v4H0zm6 0h4v4H6zM0 0h4v4H0z"></path></svg>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                className="Burger_Popup"
            >
                <Container className='p-3 Burger_Popup_container' data-aos="fade-left"  data-aos-duration="500">
                    <div className='row '>
                        <div className='col-md-6 inner_tab '>
                            <div className='inner_tab_Sec'>
                                <i className="ri-home-smile-fill"></i>
                                <Link href="/">Home</Link>
                            </div>
                        </div>
                        <div className='col-md-6 inner_tab '>
                            <div className='inner_tab_Sec'>
                                <i className="ri-group-2-fill"></i>
                                <Link href="/about">About</Link>
                            </div>
                        </div>
                        <div className='col-md-6 inner_tab'>
                            <div className='inner_tab_Sec'>
                                <i className="ri-bank-fill"></i>
                                <Link href="/educationloan" className="desktop-link ">Education Loan </Link>
                            </div>
                        </div>
                        <div className='col-md-6 inner_tab '>
                            <div className='inner_tab_Sec'>
                                <i className="ri-book-mark-fill"></i>
                                <Link href="/about">Foreign Education</Link>
                            </div>
                        </div>
                        <div className='col-md-6 inner_tab'>
                            <div className='inner_tab_Sec'>
                                <i className="ri-hotel-fill"></i>
                                <Link href={"/accommodation"} className="desktop-link ">Accommodation </Link>
                            </div>
                        </div>
                        <div className='col-md-6 inner_tab'>
                            <div className='inner_tab_Sec'>
                                <i className="ri-group-fill"></i>
                                <Link href="/gd">Group Discussion</Link>
                            </div>
                        </div>
                        <div className='col-md-6 inner_tab'>
                            <div className='inner_tab_Sec'>
                                <i className="ri-question-answer-line"></i>
                                <Link href="/pi">Personal Interview</Link>
                            </div>
                        </div>
                        <div className='col-md-6 inner_tab'>
                            <div className='inner_tab_Sec'>
                                <i className="ri-contacts-fill"></i>
                                <Link href="/contact">Contact Us</Link>
                            </div>
                        </div>
                        <div className='col-md-6 inner_tab'>
                            <div className='inner_tab_Sec'>
                                <i className="ri-contacts-fill"></i>
                                <Link href="/#testimonials">Testimonial</Link>
                            </div>
                        </div>
                        <div className='col-md-6 inner_tab'>
                            <div className='inner_tab_Sec'>
                                <i className="ri-message-3-fill"></i>
                                <a href={`${process.env.NEXT_PUBLIC_BLOG_API_URL}/all-blogs/`} rel="noopener noreferrer" target="_blank">Blogs</a>
                            </div>
                        </div>
                        <div className='col-md-6 inner_tab'>
                            <div className='inner_tab_Sec'>
                                <i className="ri-creative-commons-nd-fill"></i>
                                <Link href="/careers">Careers</Link>
                            </div>
                        </div>
                        <div className='col-md-6 inner_tab'>
                            <div className='inner_tab_Sec'>
                                <i className="ri-creative-commons-nd-fill"></i>
                                <Link href="/faq">FAQ&apos;s</Link>
                            </div>
                        </div>
                    </div>

                </Container>
            </Popover>
        </div>
    );
}