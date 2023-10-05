import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import apiCall from '../../utils/apiCall';
import ResumeDownloadForm from "../Form"

import AOS from 'aos';
import 'aos/dist/aos.css';


const Resume = () => {
    const [selectedDocument, setSelectedDocument] = useState("")
    const [allResumes, setAllResumes] = useState({})
    const [show, setShow] = useState(false);
    
    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () => {
        setShow(true);
    }
    useEffect(() => {
        const getAllResumes = async () => {
            try {
                const result = await apiCall("get_resumes.php", "get")
                setAllResumes(result.data)
            } catch (error) {
                console.log(error.message)
            }
        }
        getAllResumes()
    }, [])
    useEffect(() => {
           AOS.init();
         }, [])
         return (
             <section className='resumes bg-light' data-aos="zoom-in-right"data-aos-easing="ease-in-back" data-aos-delay="500" data-aos-offset="0">
            <div className="container">
                <h4 className='main-heading fs-40'>Sample Resumes</h4>
                <div className="row ">
                    {allResumes.resume && allResumes.resume.map((doc) => {
                        return (
                            <div key={doc.resume_id} className="col-sm-6 col-lg-3 mx-auto">
                                <div className="resume ">
                                    <a href={doc.filepath + doc.filename} style={{ pointerEvents: 'none' }}>{doc.title}
                                    </a>
                                    <i className="ri-download-fill" onClick={() => {
                                            setSelectedDocument(doc)
                                            handleShow()
                                        }} >
                                        <span  style={{ marginLeft: "4px" }}>Download
                                        </span>
                                    </i>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <Modal  show={show} onHide={handleClose}>
                <ResumeDownloadForm selectedDocument={selectedDocument}  onCloseModel={handleClose} />
            </Modal>


        </section>

    )
}

export default Resume