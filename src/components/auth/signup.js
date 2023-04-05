import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import SimpleInput from '../common/simpleInput'
import styles from "./auth.module.css"
import {AiOutlineArrowLeft} from "react-icons/ai"


function SignUp({responsive}) {


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

  return (
    <div  >
     {responsive ? <div className={styles.headRes} >
      <div className='d-flex justify-content-around' >
        <AiOutlineArrowLeft className='mt-2 fs-4' />
    <h4 className={styles.title} >Welcome to HomeShare</h4>

      </div>
<p className={styles.num} >2</p>
    </div> : <h4 className='text-center pt-2 pb-3' >Welcome to HomeShare</h4>  }

    <div className={styles.content} >
    <SimpleInput placeholder="Email" value={email} onClick={(e) => setEmail(e.target.value)} />
    <SimpleInput placeholder="Password" value={password} onClick={(e) => setPassword(e.target.value)} style={{marginTop:"10px"}} />
<SimpleInput placeholder="Confirm Password" value={confirmPassword} onClick={(e) => setConfirmPassword(e.target.value)} style={{marginTop:"10px"}} />
    <div className="d-flex my-3 justify-content-between ">
          <div className="d-flex">
            <input
              type="checkbox"
              style={{ width: "25px", height: responsive ? "14px" : "18px", marginTop: responsive ? "1px" : "3px" }}
            />
           <h4 className={styles.head1} style={{fontSize:responsive ? "12px" : "16px"}}  >I agree to the  <span>Terms & Conditions</span></h4>
          </div>
       
        </div>
        <Button type="submit" style={{ width: "100%",padding:"12px 0", background: "#f8cd46",borderColor:"transparent" }}>
            Sign Up
          </Button>
          <div className={styles.head2}  >
        <span />
        <p className='mb-0 px-2 ' >Or</p>
        <span />
    </div>
    <Button type="submit" style={{ width: "100%",padding:"10px 0" ,background: "#fff",color:"black",borderColor:"black" }}>
            Login with Google
          </Button>
    <Button type="submit" style={{ width: "100%",padding:"10px 0",margin:"15px 0 40px",background: "#fff",color:"black",borderColor:"black" }}>
            Login with FaceBook
          </Button>

          <h4 className={styles.head1}  >Already have an account? <span> Login</span></h4>
    </div>

</div>
  )
}

export default SignUp