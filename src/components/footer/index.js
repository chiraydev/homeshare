import { useRouter } from 'next/router'
import React from 'react'
import styles from "./footer.module.css"
import FooterResp from './responsive'

function Footer({responsive}) {

const router = useRouter()

  return (
  !responsive ?  <div className={styles.container} >
        <div className={styles.contentFirst} >
            <p onClick={() => router.push("/privacy")} >Privacy & Terms</p>
            <p>|</p>
            <p onClick={() => router.push("/pricing")} >Pricing</p>
            <p>|</p>
            <p onClick={() => router.push("/aboutus")} > About Us</p>
            <p>|</p>
            <p onClick={() => router.push("/contact")} > Contact Us</p>
        </div>
        <div className={styles.contentSecond} >
            <p className='mb-0' >fb</p>
            <p className='mb-0' >ins</p>
        </div>
        <hr />
        <p className='text-center' >COPYRIGHT @ 2022 HOME SHARE ALL RIGHTS RESERVED</p>
    </div> : <FooterResp />
  )
}

export default Footer