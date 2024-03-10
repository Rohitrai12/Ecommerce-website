/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const Pagination = ({ productsPerPage, totalProducts, paginate, activePage }) => {
    const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="default-pagination lab-ul">
    <li>
        <a href="#"
         onClick={() => {
          if (activePage < pageNumbers.length) {
            paginate(activePage - 1); // Navigate to the next page
          }
        }}
        
        ><i className="icofont-rounded-left"></i></a>
    </li>

    {pageNumbers.map((number) => (
        <li key={number} className={`page-item ${number === activePage ? 'bg-warning' : ''}`} >
          <button onClick={() => paginate(number)} className='bg-transparent'>
            {number}
          </button>
        </li>
      ))}

    <li>
        <a href="#" 
        onClick={() => {
            if (activePage < pageNumbers.length) {
              paginate(activePage + 1); // Navigate to the next page
            }
          }}
        ><i className="icofont-rounded-right"></i></a>
    </li>
</ul>
  )
}

export default Pagination