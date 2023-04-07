import React from 'react'
import styles from "./style.module.css"
import Image from 'next/image'
import DummyImg1 from "../../../assets/profile/Mask Group 8.png"
import DummyImg2 from "../../../assets/profile/Mask Group 9.png"
import DummyImg3 from "../../../assets/profile/Rectangle 7277.png"
import ProfileCard from './card'
import {BiRupee} from "react-icons/bi"
import {MdLocationOn} from "react-icons/md"

function MyProfile() {
  return (
    <div className={styles.container} >
        <div className={styles.content1} >
<div className={styles.header} >
<ProfileCard />
<div className={styles.inner} >
  <Image src={DummyImg1} />
  <Image src={DummyImg2} />
</div>
</div>

<hr className='mt-4' />

<div className={styles.description} > 
  <h4>Description</h4>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
</div>

<hr  />

<div className={styles.description} > 
  <h4>Location</h4>
  <p>America</p>
</div>

<div className={styles.description} > 
  <h4>Gender</h4>
  <p>Male</p>
</div>

<div className={styles.about} >
<h4>About</h4>
<div className={styles.table} >
<p>Pets:</p>
<p>Yes</p>

<p>Religion:</p>
<p>Hindu</p>

<p>Interests:</p>
<p>Art,Cooking,Gym</p>
</div>
{/* <p><span>Pets:</span>Yes</p>
<p><span>Religion:</span>Christian</p>
<p><span>Interests:</span>Art,Cooking,Gym</p> */}
</div>

        </div>
        <div className={styles.content2} >
<h4>Your Property</h4>
<div className={styles.inner2} >
  <Image src={DummyImg3} />
  <div className={styles.more} >+3 photos</div>

<div>
<p className='mt-2 fw-600' > <MdLocationOn size={20} /> America</p>
  <p className='mt-2 fw-600' > <span><BiRupee size={20} /></span> 1500/month</p>
</div>

  </div>

        </div>
    </div>
  )
}

export default MyProfile