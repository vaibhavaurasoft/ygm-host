import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProfileTabs from '../components/UserProfile/profiletab';
import { useSelector } from 'react-redux';


function Myprofile({ props }) {
    const [userEmail, setUserEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [userImage, setUserImage] = useState('');
    const userDetails = useSelector((state) => state.user.userDetails);
    const initDetails = () => {
        if (userDetails) {
            if (userDetails?.student_email) setUserEmail(userDetails.student_email);
            if (userDetails?.student_name) setUserName(userDetails.student_name);
            if (userDetails?.image_path && userDetails?.profile_pic) setUserImage(userDetails.image_path + userDetails.profile_pic);
        }
    }
    useEffect(() => {
        AOS.init();
    }, [])
    useEffect(() => {
        initDetails();
    }, [userDetails])
    return (
        <>
            <section className='pt-5 '>
                <div className='container my_profile'>
                    <img img-fluid src={userImage ? userImage : '/Image/logo/gyclogo.png'}></img>
                    <div className='My_profile_text'>
                        <div>
                            <p className='My_profile_text name'><b className='pe-1'>Name:-</b> <b className='Name'> {userName}</b></p><br></br>
                            <p className='My_profile_text mail'> <b>Email:-</b> <b className='Email'>{userEmail}</b> </p>
                        </div>
                        <hr className='my-2' />
                    </div>
                </div>
                <ProfileTabs initDetails={initDetails} />
            </section>
        </>
    );
}
export default Myprofile;