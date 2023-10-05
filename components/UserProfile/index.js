import React, { useEffect, useRef } from 'react';
import { Popover, Paper, styled } from '@mui/material';
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { logout } from '../../utils/utilsFunctions';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { removeUserDetails } from '../../redux/slices/userSlice';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function UserProfile() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const wrapperRef = useRef(null);
    const userDetails = useSelector((state) => state.user.userDetails);
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

    const [token, setToken] = useState('second');
    const [userEmail, setUserEmail] = useState('No email');
    const [userName, setUserName] = useState('No Name');
    const [userImage, setUserImage] = useState('');
    const dispatch = useDispatch();
    useEffect(() => {
        AOS.init();
        if (userDetails) {
            if (userDetails?.student_email) setUserEmail(userDetails.student_email);
            if (userDetails?.student_name) setUserName(userDetails.student_name);
            if (userDetails?.image_path && userDetails?.profile_pic) setUserImage(userDetails.image_path + userDetails.profile_pic);
        };
        setToken(userDetails);
    }, [userDetails]);
    useEffect(() => {
        const postData = async () => {
            try {
                const result = await apiCall(`student_profile_details.php?token=${token}`, "get")
                if (result.data.status) {
                    toast.success(result.data.message, { position: "top-center", });
                } else {
                    toast.error(result.data.message)
                }
            } catch (e) {
                toast.error(e, { position: "top-center", });
            }
        }
        postData()
    }, [token])

    return (
        <div ref={wrapperRef}>
            <img className='ProfileImage toggle_bar'aria-describedby={id} onClick={handleClick} img-fluid src={userImage ? userImage : '<svg  xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 48 48"><g fill="#121268" fill-rule="evenodd" clip-rule="evenodd"><path d="M14.809 34.714c6.845-1 11.558-.914 18.412.035A2.077 2.077 0 0 1 35 36.818c0 .48-.165.946-.463 1.31A61.165 61.165 0 0 1 32.941 40h2.641c.166-.198.333-.4.502-.605A4.071 4.071 0 0 0 37 36.819c0-2.025-1.478-3.77-3.505-4.05c-7.016-.971-11.92-1.064-18.975-.033c-2.048.299-3.52 2.071-3.52 4.11c0 .905.295 1.8.854 2.525c.165.214.328.424.49.63h2.577a57.88 57.88 0 0 1-1.482-1.85A2.144 2.144 0 0 1 13 36.845c0-1.077.774-1.98 1.809-2.131ZM24 25a6 6 0 1 0 0-12a6 6 0 0 0 0 12Zm0 2a8 8 0 1 0 0-16a8 8 0 0 0 0 16Z" /><path d="M24 42c9.941 0 18-8.059 18-18S33.941 6 24 6S6 14.059 6 24s8.059 18 18 18Zm0 2c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z" /></g></svg>'}></img>
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
                <div className='container'>
                    <div className='row profile '>
                        <img img-fluid src={userImage ? userImage : '/Image/logo/gyclogo.png'} ></img>
                        <p>{userName}</p>
                        <small>{userEmail}</small>
                        <hr className='my-2' />
                        <div className='profile_button'> <Link href={`/myprofile`}><a> View Profile</a></Link> </div>
                        <div className='profile_button' onClick={() => {
                            logout()
                            dispatch(removeUserDetails())
                        }} >Logout</div>
                    </div>
                </div>
            </Popover>
        </div>
    );
}