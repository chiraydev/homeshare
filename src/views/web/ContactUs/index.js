import SimpleInput from '@/components/common/simpleInput'
import React from 'react'
import { Button } from 'react-bootstrap'
import styles from "./contact.module.css"

function Contact() {
  return (
    <div className={styles.container} >
        <div className={styles.content1} >
        <h4 className={styles.head1} style={{fontSize:"25px"}} >We would <span>love to hear</span> from you </h4>
        </div>
        <div className={styles.divider} ></div>
        <div className={styles.content2}  >
<h4>Contact Us</h4>
<SimpleInput placeholder="First Name" />
<SimpleInput placeholder="Last Name" style={{marginTop:"10px"}}  />
<SimpleInput placeholder="Email" style={{marginTop:"10px"}}  />

<div className='pt-3' >
    <p className='fw-600' >Please Select your type of submission</p>
    <div className='d-flex' >
        <input type="radio" name="option" className='me-2' />
        <label>Question</label>
    </div>
    <div className='d-flex' >
        <input type="radio" name="option" className='me-2' />
        <label>General Feedback</label>
    </div>
    <div className='d-flex' >
        <input type="radio" name="option" className='me-2' />
        <label>Other</label>
    </div>
</div>

<textarea rows={8}   />
<div className="d-flex mt-2 mb-3 justify-content-between ">
          <div className="d-flex">
            <input
              type="checkbox"
              style={{ width: "25px", height: "18px", marginTop: "3px" }}
            />
           <h4 className={styles.head1} style={{fontSize:"16px"}}  >I agree to the  <span>Terms & Conditions</span> and <span>Privacy Policy</span> </h4>
          </div>
       
        </div>
        <div className='text-center' >
        <Button type="submit" style={{ width: "20%",padding:"10px 0",background: "#f8cd46",borderColor:"transparent" }}>
            Submit
          </Button>
        </div>
        
        </div>
    </div>
  )
}

export default Contact