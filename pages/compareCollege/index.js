import React from 'react';
import CollegeCompareTable from '../../components/CollegeCompareTable';
import apiCall from '../../utils/apiCall';

const CompareCollege = ({ DataToCompare }) => {
  const { college1, college2 } = DataToCompare;
  return (
    <CollegeCompareTable college1={college1} college2={college2} />
  )
}

export async function compareCollege(query) {
  const { college1, college2 } = query || {};
  try {
    const result = await apiCall(`college_comparison.php?college1=${college1}&college2=${college2}`, "get");
    return result.data
  } catch (error) {
    console.log("error", error)
  }
}


export async function getServerSideProps(context) {
  const { query } = context;
  const data = await compareCollege(query)
  return {
    props: {
      DataToCompare: data
    }
  }
}

export default CompareCollege;