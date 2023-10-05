import React, { useEffect } from 'react';
import classes from "../styles/terms.module.css"
import TopBanner from '../components/TopBanner';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Terms({ props }) {
    useEffect(() => {
           AOS.init();
         })
         return (
             <>
    <TopBanner imagPath={"/Image/Terms.jpg"} />
    <section data-aos="zoom-in-right"data-aos-easing="ease-in-back" data-aos-delay="500" data-aos-offset="0">
        <div className='container Policy_text terms_text p-1 '>
            <div className="container">
                <h3 className={`${classes.heading_45}`}>Terms and Conditions</h3>
                <p data-aos="fade-left"  data-aos-duration="500">Last updated: June 07, 2022</p>
                <p data-aos="fade-left"  data-aos-duration="500">Please read these terms and conditions carefully before using Our Service.</p>
                <h3 className={`${classes.heading_45}`}>Interpretation and Definitions</h3>
                <h4 className={`${classes.heading_35}`}>Interpretation</h4>
                <p data-aos="fade-left"  data-aos-duration="500">The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
                <h4 className={`${classes.heading_35}`}>Definitions</h4>
                <p data-aos="fade-left"  data-aos-duration="500">For the purposes of these Terms and Conditions:</p>
                <ol className={`${classes.ul}`}>
                    <li>
                        <p data-aos="fade-left"  data-aos-duration="500"><strong className={`${classes.heading_25}`}>Country</strong> refers to <b>India</b></p>
                    </li>
                    <li>
                        <p data-aos="fade-left"  data-aos-duration="500"><strong className={`${classes.heading_25}`}>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to Meritorium Consultancy Pvt. Ltd., 302, Balaji Corporate House, Above ICICI Bank, Zanzeerwala Square, New Palasia, Indore, Madhya Pradesh.</p>
                    </li>
                    <li>
                        <p data-aos="fade-left"  data-aos-duration="500"><strong className={`${classes.heading_25}`}>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</p>
                    </li>
                    <li>
                        <p data-aos="fade-left"  data-aos-duration="500"><strong className={`${classes.heading_25}`}>Service</strong> refers to the Website.</p>
                    </li>
                    <li>
                        <p data-aos="fade-left"  data-aos-duration="500"><strong className={`${classes.heading_25}`}>Terms and Conditions</strong> (also referred as &quot;Terms&quot;) mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service.</p>
                    </li>
                    <li>
                        <p data-aos="fade-left"  data-aos-duration="500"><strong className={`${classes.heading_25}`}>Third-party Social Media Service</strong> means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.</p>
                    </li>
                    <li>
                        <p data-aos="fade-left"  data-aos-duration="500"><strong className={`${classes.heading_25}`}>Website</strong> refers to Get Your College, accessible from <a href={process.env.NEXT_PUBLIC_GYC_URL} >https://getyourcollege.in</a></p>
                    </li>
                    <li>
                        <p data-aos="fade-left"  data-aos-duration="500"><strong className={`${classes.heading_25}`}>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</p>
                    </li>
                </ol>
                <h3 className={`${classes.heading_45}`}>Acknowledgment</h3>
                <p data-aos="fade-left"  data-aos-duration="500">These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.</p>
                <p data-aos="fade-left"  data-aos-duration="500">Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.</p>
                <p data-aos="fade-left"  data-aos-duration="500">By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.</p>
                <p data-aos="fade-left"  data-aos-duration="500">Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.</p>
                <h3 className={`${classes.heading_45}`}>Links to Other Websites</h3>
                <p data-aos="fade-left"  data-aos-duration="500">Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.</p>
                <p data-aos="fade-left"  data-aos-duration="500">The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>
                <p data-aos="fade-left"  data-aos-duration="500">We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.</p>
                <h3 className={`${classes.heading_45}`}>Termination</h3>
                <p data-aos="fade-left"  data-aos-duration="500">We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.</p>
                <p data-aos="fade-left"  data-aos-duration="500">Upon termination, Your right to use the Service will cease immediately.</p>

                <h3 className={`${classes.heading_45}`}>&quot;AS IS&quot; and &quot;AS AVAILABLE&quot; Disclaimer</h3>
                <p data-aos="fade-left"  data-aos-duration="500">The information contained on this website is for general information purposes only. The information is provided by Get Your College and while we endeavour to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.</p>
                <p data-aos="fade-left"  data-aos-duration="500">In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.</p>
                <p data-aos="fade-left"  data-aos-duration="500">Through this website, you are able to link to other websites which are not under the control of Get Your College. We have no control over the nature, content and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.</p>
                <p data-aos="fade-left"  data-aos-duration="500">Every effort is made to keep the website up and running smoothly. However, Get Your College takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.</p>
                <h3 className={`${classes.heading_45}`}>Disclaimer for Accuracy of Content</h3>
                <p data-aos="fade-left"  data-aos-duration="500">Although every effort has been made to provide complete and accurate information, Get Your College makes no warranties, express or implied, or representations as to the accuracy of the content on this website. Get Your College assumes no liability or responsibility for any error or omissions in the information contained in the website or the operation of the website. The Dates, Details of Institutions, Any of the fees mentioned and other data on the website is tentative and may change in near future.</p>
                <p data-aos="fade-left"  data-aos-duration="500">*The data provided by Get Your College through this website is Tentative.</p>
                <h3 className={`${classes.heading_45}`}>Governing Law</h3>
                <p data-aos="fade-left"  data-aos-duration="500">The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.</p>
                <h3 className={`${classes.heading_45}`}>Disputes Resolution</h3>
                <p data-aos="fade-left"  data-aos-duration="500">If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.</p>
                <h3 className={`${classes.heading_45}`}>For European Union (EU) Users</h3>
                <p data-aos="fade-left"  data-aos-duration="500">If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which you are resident in.</p>
                <h3 className={`${classes.heading_45}`}>Translation Interpretation</h3>
                <p data-aos="fade-left"  data-aos-duration="500">These Terms and Conditions may have been translated if We have made them available to You on our Service.
                    You agree that the original English text shall prevail in the case of a dispute.</p>
                <h3 className={`${classes.heading_45}`}>Changes to These Terms and Conditions</h3>
                <p data-aos="fade-left"  data-aos-duration="500">We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days&apos; notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.</p>
                <p data-aos="fade-left"  data-aos-duration="500">By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.</p>
                <h3 className={`${classes.heading_45}`}>Contact Us</h3>
                <p data-aos="fade-left"  data-aos-duration="500">If you have any questions about these Terms and Conditions, You can contact us:</p>
                <ul>
                    <li>By visiting this page on our website: <a href={process.env.NEXT_PUBLIC_GYC_CONTACT_URL} >https://getyourcollege.in/contact</a></li>
                </ul>
            </div>
        </div>
    </section>
</>
  );
}

export default Terms;