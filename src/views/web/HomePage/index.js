import React, { useState } from 'react'
import DashCard from './dashCard'
import styles from "./home.module.css"
import {TbFilter} from "react-icons/tb"
import {AiOutlineSearch} from "react-icons/ai"

function HomePage() {

const [selected, setSelected] = useState(1)

  return (
    <div className={styles.container} >
      <div className='d-flex justify-content-between mt-5 mb-4' >
        <div className={styles.head1} >
          <div style={{cursor:"pointer"}} >
          <p className='fw-bolder' onClick={() => setSelected(1)} >HouseMates</p>
{selected == 1 && <div style={{borderTop:"4px solid #f8d157"}} ></div>}
          </div>
          <div style={{cursor:"pointer"}} >
          <p className='fw-bolder ' onClick={() => setSelected(2)} >Homes</p>
     {selected == 2 &&  <div style={{borderTop:"4px solid #f8d157"}} ></div>}
          </div>
        </div>
      <div className={styles.head2} >
        <div style={{position:"relative"}} >
        <input type="input" className={styles.searchBar} placeholder="Search Here" /> 
      <AiOutlineSearch className={styles.searchIcon}  />
        </div>
    
<div className={styles.filter} >
  <TbFilter />
<p>Filter</p>
</div>
      </div>
      </div>

      <div className={styles.content} >
        {[...Array(8).keys()]?.map((v,i) => {
            return <DashCard mates={selected == 1} key={i} />
        })}
    </div>

    </div>
  )
}

export default HomePage