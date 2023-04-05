import Image from 'next/image'
import React from 'react'
import NewImg from "../../../assets/check.png"
import styles from "./about.module.css"

function AboutUs() {
  return (
    <div className={styles.container} >
    <h4 className={styles.head1}  >About <span>us</span></h4>
    <div className={styles.head2}  >
        <span />
        <p className='mb-0 px-2 fw-bold' >Our Story</p>
        <span />
    </div>
    <div className={styles.content}  >
        <p>What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br /><br />

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing  packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).<br /><br /></p>
        <Image src={NewImg} className={styles.image}  />
    </div>
    </div>
  )
}

export default AboutUs