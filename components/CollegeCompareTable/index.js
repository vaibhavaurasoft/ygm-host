import React from 'react';
import { isBrowser } from '../../utils/utilsFunctions';
import { getContent } from '../Blog';
import styles from "./collegeCompareTable.module.css";

const CollegeCompareTable = ({ college1, college2 }) => {
    return (
        <div className={styles.fixWidth}>
            <h3 className='Form_main_heading'>Comparision Details </h3>
            {
                isBrowser() &&
                <table className={styles.contentTable}>
                    <thead>
                        <tr>
                            <th>Features</th>
                            <th dangerouslySetInnerHTML={getContent(college1?.college_name)}></th>
                            <th dangerouslySetInnerHTML={getContent(college2?.college_name)}></th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr className={styles.activeRow}>
                            <td width={"12%"}>City</td>
                            <td width={"44%"} dangerouslySetInnerHTML={getContent(college1?.city)}></td>
                            <td width={"44%"} dangerouslySetInnerHTML={getContent(college2?.city)}></td>
                        </tr>
                        <tr className={styles.activeRow}>
                            <td width={"12%"}>State</td>
                            <td width={"44%"} dangerouslySetInnerHTML={getContent(college1?.state)}></td>
                            <td width={"44%"} dangerouslySetInnerHTML={getContent(college2?.state)}></td>
                        </tr>
                        <tr className={styles.activeRow}>
                            <td width={"12%"}>Address</td>
                            <td width={"44%"} dangerouslySetInnerHTML={getContent(college1?.address)}></td>
                            <td width={"44%"} dangerouslySetInnerHTML={getContent(college2?.address)}></td>
                        </tr>

                        <tr className={styles.activeRow}>
                            <td width={"12%"}>Video information</td>
                            <td width={"44%"}><a target="_blank" rel="noreferrer" href={college1?.website_url}>{college1?.website_url || "-"}</a></td>
                            <td width={"44%"}><a target="_blank" rel="noreferrer" href={college2?.website_url}>{college2?.website_url || "-"}</a></td>
                        </tr>
                        <tr className={styles.activeRow}>
                            <td width={"12%"}>About</td>
                            <td width={"44%"} dangerouslySetInnerHTML={getContent(college1?.about)}></td>
                            <td width={"44%"} dangerouslySetInnerHTML={getContent(college2?.about)}></td>
                        </tr>
                        <tr className={styles.activeRow}>
                            <td width={"12%"}>Awards</td>
                            <td width={"44%"} dangerouslySetInnerHTML={getContent(college1?.awards)}></td>
                            <td width={"44%"} dangerouslySetInnerHTML={getContent(college2?.awards)}></td>
                        </tr>
                        <tr className={styles.activeRow}>
                            <td width={"12%"}>Establishment Year</td>
                            <td width={"44%"} dangerouslySetInnerHTML={getContent(college1?.establishment_year)}></td>
                            <td width={"44%"} dangerouslySetInnerHTML={getContent(college2?.establishment_year)}></td>
                        </tr>
                        <tr className={styles.activeRow}>
                            <td width={"12%"}>Recognition</td>
                            <td width={"44%"} dangerouslySetInnerHTML={getContent(college1?.recognition)}></td>
                            <td width={"44%"} dangerouslySetInnerHTML={getContent(college2?.recognition)}></td>
                        </tr>
                        <tr className={styles.activeRow}>
                            <td width={"12%"}>Top Courses</td>
                            <td width={"44%"} dangerouslySetInnerHTML={getContent(college1?.top_courses)}></td>
                            <td width={"44%"} dangerouslySetInnerHTML={getContent(college2?.top_courses)}></td>
                        </tr>
                        <tr className={styles.activeRow}>
                            <td width={"12%"}>Scholarship</td>
                            <td width={"44%"} dangerouslySetInnerHTML={getContent(college1?.scholarship)}></td>
                            <td width={"44%"} dangerouslySetInnerHTML={getContent(college2?.scholarship)}></td>
                        </tr>
                        <tr className={styles.activeRow}>
                            <td width={"12%"}>Admission Criteria</td>
                            <td width={"44%"} dangerouslySetInnerHTML={getContent(college1?.admission_criteria)}></td>
                            <td width={"44%"} dangerouslySetInnerHTML={getContent(college2?.admission_criteria)}></td>
                        </tr>
                        <tr className={styles.activeRow}>
                            <td width={"12%"}>Placement</td>
                            <td width={"44%"} dangerouslySetInnerHTML={getContent(college1?.placement)}></td>
                            <td width={"44%"} dangerouslySetInnerHTML={getContent(college2?.placement)}></td>
                        </tr>
                        <tr className={styles.activeRow}>
                            <td width={"12%"}>Top Companies</td>
                            <td width={"44%"} dangerouslySetInnerHTML={getContent(college1?.top_companies)}></td>
                            <td width={"44%"} dangerouslySetInnerHTML={getContent(college2?.top_companies)}></td>
                        </tr>
                        <tr className={styles.activeRow}>
                            <td width={"12%"}>Infrastructure</td>
                            <td width={"44%"} dangerouslySetInnerHTML={getContent(college1?.infrastructure)}></td>
                            <td width={"44%"} dangerouslySetInnerHTML={getContent(college2?.infrastructure)}></td>
                        </tr>
                        <tr className={styles.activeRow}>
                            <td width={"12%"}>Ranking</td>
                            <td width={"44%"} dangerouslySetInnerHTML={getContent(college1?.ranking)}></td>
                            <td width={"44%"} dangerouslySetInnerHTML={getContent(college2?.ranking)}></td>
                        </tr>
                        <tr className={styles.activeRow}>
                            <td width={"12%"}>Location</td>
                            <td width={"44%"} dangerouslySetInnerHTML={getContent(college1?.location)}></td>
                            <td width={"44%"} dangerouslySetInnerHTML={getContent(college2?.location)}></td>
                        </tr>
                        <tr className={styles.activeRow}>
                            <td width={"12%"}>Available Courses</td>
                            <td width={"44%"}>{college1?.available_courses || "-"}</td>
                            <td width={"44%"}>{college2?.available_courses || "-"}</td>
                        </tr>
                    </tbody>
                </table>
            }
        </div>
    )
}

export default CollegeCompareTable;