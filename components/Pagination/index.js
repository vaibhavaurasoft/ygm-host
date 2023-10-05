import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';


function Pagination({ totalPages, handlePageChange, pageName, currentPage, paramsExist }) {
  const router = useRouter();
  function handlePageChange(page) {
    paramsExist ? router.push(`/${pageName}&page=${page}`) : router.push(`/${pageName}?page=${page}`)
  }
  return (
    <nav className="ms-3" aria-label="Page navigation example">
      <ul className="pagination">
        {Number(currentPage) !== 1 && <li className="page-item"><a className="page-link" onClick={() => handlePageChange(Number(currentPage) - 1)}>Prev</a></li>}
        {paramsExist ?
          Array.from({ length: totalPages }).map((_, i) => (
            <Link key={i} href={`/${pageName}&page=${i + 1}`}>
              <li className={`page-item ${Number(currentPage) == i + 1 ? "active" : ""}`}><a className="page-link" >{i + 1}</a></li>
            </Link>
          ))
          :
          Array.from({ length: totalPages }).map((_, i) => (
            <Link key={i} href={`/${pageName}?page=${i + 1}`}>
              <li className={`page-item ${Number(currentPage) == i + 1 ? "active" : ""}`}><a className="page-link" >{i + 1}</a></li>
            </Link>
          ))
        }
        {Number(currentPage) !== totalPages && <li className={`page-item ${Number(currentPage) == totalPages ? "disabled" : ""}`}><a className="page-link" onClick={() => handlePageChange(Number(currentPage) + 1)}>Next</a></li>}
      </ul>
    </nav>
  )
}

export default Pagination;