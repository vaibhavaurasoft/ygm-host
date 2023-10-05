import React, { useState } from "react";
import { isBrowser } from "../../utils/utilsFunctions";
import { getContent } from "../Blog";
import { Modal } from "react-bootstrap";
import ContactForm from "../ContactForm";

function Scholarship({ scholarship }) {
    const [show, setShow] = useState(false);
    const [defaultMessage, setDefaultMessage] = useState("");
    const [webUrl, setWebUrl] = useState("");
    const handleClose = () => {
        setShow(false);
        setDefaultMessage("");
        setWebUrl("")
    }
    const handleShow = (sholarship, url) => {
        setShow(true);
        setDefaultMessage(`Enquired for ${sholarship} scholarship`);
        setWebUrl(url);
    }
    return (
        <>
            <div
                className={"scholarship open"}
            >
                <h4 className="card-title faq-question "> <img src={`${scholarship?.image_path + scholarship?.image_name}`} width="50px" height=
                    "50px" className="me-3" alt="scholarship logo" />{scholarship?.title}</h4>

                {isBrowser() &&
                    <div className="faq-answer" dangerouslySetInnerHTML={getContent(scholarship?.description)}></div>
                }
                <a href="javascript:void(0);" className="btn BG_button" style={{ marginTop: "-1.5%", marginLeft: "15px" }} onClick={() => handleShow(scholarship?.title, "https://www.getyourcollege.in")}> Read More</a>
            </div>
            <Modal show={show} onHide={handleClose}>
                <ContactForm onCloseModel={handleClose} defaultMessage={defaultMessage} webUrl={webUrl} />
            </Modal>
        </>
    );
}

export default Scholarship;