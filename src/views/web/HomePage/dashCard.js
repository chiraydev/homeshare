import Image from 'next/image'
import React from 'react'
import NewImg from "../../../assets/new.png"
import styles from "./home.module.css"
import DummyImg from "../../../assets/check.png"
import {MdLocationOn} from "react-icons/md"
import {FaMoneyBillAlt} from "react-icons/fa"

function DashCard({mates}) {
  return (
    <div >
        <Image src={NewImg} className={styles.thumbnail}  />
        <div  className='d-flex mt-1' >
     { !mates && <Image src={DummyImg} className={styles.userProfile}  />}
            <div style={{width:"100%"}} >
                <div className='d-flex justify-content-between' >
                <p className='fs-10 mb-0 fw-bolder' > {!mates ?  "Alenas Home" : "Jone,27"}</p>
<p  className='fs-10 mb-0'  > <span> <FaMoneyBillAlt color='#3ca244' /> </span> 35000/month</p>
                </div>
<p  className='fs-10 mb-0' > <span><MdLocationOn color='#83dfe9' /></span> Pretoria</p>
            </div>
        </div>
        
    </div>
  )
}

export default DashCard