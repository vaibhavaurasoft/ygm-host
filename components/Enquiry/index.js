import React from 'react'
const EnquiryButton = (props) => {
    const { setOpen } = props
    return (
        <button className='apply_btn' onClick={() => setOpen()}>Enquire Now</button>
    )
}

export default EnquiryButton;