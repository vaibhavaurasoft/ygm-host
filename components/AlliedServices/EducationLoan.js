import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Router from 'next/router'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { isBrowser } from '../../utils/utilsFunctions';
import { getContent } from '../Blog';

function EducationLoan({ Loan }) {
    function sendProps(item) {
        Router.push({
            pathname: "/educationloan/educationloanForm",
            query: {
                id: item
            }
        })
    }
    useEffect(() => {
        AOS.init();
    })

    return (
        <>
            <section className='Bank_list pb-md-5 pb-1' >
                <div className="container ">
                    {/* <h4 className='heading fs-40'> Bank List</h4> */}
                    <div className="row mx-auto">
                        {
                            isBrowser() && Loan.loans.length !== 0
                                ?
                                Loan.loans.map((item) => {
                                    return <div key={item.loan_id} className=" p-md-2 p-1 mx-auto col-md-6 col-lg-4" >
                                        <div className="card bank_list " >
                                            <div className="card-header">
                                                <h4>{item.bank_name}</h4>
                                            </div>
                                            <div style={{ width: '100%', height: '255px', position: 'relative' }}>
                                                <Image layout='fill' loader={() => item.image} src={item.image} className="card-img-top" alt="Bank Image" />
                                            </div>
                                            <div className="card-body">
                                                {
                                                    item.max_amount &&
                                                    <h5 className="card-title"><span>Amount :</span> {item.max_amount} &#8377;</h5>
                                                }
                                                {
                                                    item.contact &&
                                                    <p className="card-text mb-0"><span><i className="fas fa-phone"></i> Contact :</span> {item.contact}</p>
                                                }
                                                {item?.description &&
                                                    <p className="card-text" dangerouslySetInnerHTML={getContent(item?.description)}></p>
                                                }
                                                <a className="btn btn-white btn-animate" onClick={() => sendProps(item.loan_id)}>Enquire Now</a>
                                            </div>

                                        </div>
                                    </div>
                                })
                                :
                                <h6 className='text-danger text-center'>No data is available yet!</h6>
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default EducationLoan