import SimpleInput from '@/components/common/simpleInput'
import React from 'react'
import { Button } from 'react-bootstrap'
import styles from "./contact.module.css"

function ContactRes() {
  return (
    <div className={styles.container} >
        <div className="mb-4" >
        <h4 className={styles.head1} style={{fontSize:"20px"}} ><span>Contact</span> Us</h4>

        <div className={styles.head2}  >
        <span />
        <h4 className={styles.head1} style={{fontSize:"15px",marginBottom:0,padding:"0 5px"}} >We would <span>love to hear</span> from you </h4>
        <span />
    </div>
        </div>
        
        <div className={styles.content2}  >

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

<textarea rows={8}  placeholder="Type your message here..." />
<div className="d-flex mt-2 mb-3 justify-content-between ">
          <div className="d-flex">
            <input
              type="checkbox"
              style={{ width: "25px", height: "15px"}}
            />
           <h4 className={styles.head1} style={{fontSize:"12px"}}  >I agree to the  <span>Terms & Conditions</span> and <span>Privacy Policy</span> </h4>
          </div>
       
        </div>
        <div className='text-center' >
        <Button type="submit" style={{ width: "50%",background: "#f8cd46",borderColor:"transparent" }}>
            Submit
          </Button>
        </div>
        
        </div>
    </div>
  )
}

export default ContactRes