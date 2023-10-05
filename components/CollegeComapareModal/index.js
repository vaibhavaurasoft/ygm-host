import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import styles from "./compareCollege.module.css"
import router from 'next/router';
import ContactForm from '../ContactForm';


const CollegeComapareModal = ({ showCompareModal, handleClose, selectedCollege }) => {
    const [show, setShow] = useState(false);
    const [defaultMessage, setDefaultMessage] = useState("")

    const handleShowContactModal = () => {
        setShow(true);
        const collegeNameMessage = selectedCollege.length ? `Compared for ${selectedCollege[0]?.collegeName + ' and ' + selectedCollege[1]?.collegeName}` : "";
        setDefaultMessage(collegeNameMessage);
    }
    const handleCloseContactModal = () => {
        setShow(false);
        setDefaultMessage("");
    }
    const handleSubmit = () => {
        if (selectedCollege.length === 2) {
            handleShowContactModal()
        }

    }
    const redirectOnCompareTable = () => {
        router.push({
            pathname: "/compareCollege",
            query: {
                college1: selectedCollege[0].collegeId,
                college2: selectedCollege[1].collegeId
            }
        })
    }

    return (
        <>
            <Modal show={showCompareModal} onHide={handleClose} >
                <h3 className='Form_main_heading'>Compare Bellow Colleges </h3>
                <div className={styles.content}>
                    <ul>
                        {selectedCollege && selectedCollege.map((college) => {
                            return <li key={college.collegeId}>{college.collegeName}</li>
                        })}
                    </ul>
                </div>
                <div className={styles.footer}>
                    <button type="button" className='btn btn-outline-warning' onClick={handleClose}> Cancel </button>
                    <button type="button" className='btn btn-outline-success' onClick={handleSubmit}> Compare </button>
                </div>
            </Modal>
            <Modal show={show} onHide={handleCloseContactModal}>
                <ContactForm onCloseModel={handleCloseContactModal} defaultMessage={defaultMessage} redirectOnCompareTable={redirectOnCompareTable} />
            </Modal>
        </>)
}

export default CollegeComapareModal;