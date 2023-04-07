import Image from 'next/image'
import React from 'react'
import NewImg from "../../../assets/profile/Group 5532.png"
import styles from "./style.module.css"
import {MdLocationOn} from "react-icons/md"
import {FaMoneyBillAlt} from "react-icons/fa"

function ProfileCard() {
  return (
    <div >
        <Image src={NewImg} className={styles.thumbnail}  />
        <div  className='d-flex mt-1' style={{width:"95%"}} >
            <div style={{width:"100%"}} >
                <div className='d-flex justify-content-between' >
                <p className='fs-10 mb-0 fw-bolder' > Jone,27</p>
<p  className='fs-10 mb-0'  > <span> <FaMoneyBillAlt color='#3ca244' /> </span> 35000/month</p>
                </div>
<p  className='fs-10 mb-0' > <span><MdLocationOn color='darkgray' /></span> Pretoria</p>
            </div>
        </div>
        
    </div>
  )
}

export default ProfileCard