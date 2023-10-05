import React from 'react'
import classes from "./Loader.module.css"
import Image from "next/image";
function Loader() {
    return (
        <div className={`${classes.image_box}`}>
            <div className={`${classes.image}`}>
                <Image  loader={() => '/Image/logo/gyclogo.png'}  src="/Image/logo/gyclogo.png"  width="180px" height="160px" alt="web logo for loading... " />
                <span  className={`${classes.animate_charcter}`}>Loading... </span>
            </div>
        </div>
    )
}

export default Loader