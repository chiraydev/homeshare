import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import SimpleInput from '../common/simpleInput'
import styles from "./auth.module.css"
import {AiOutlineArrowLeft} from "react-icons/ai"

function Login({responsive = false,setAuth,auth,setToken}) {


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

  return (
    <div >
  
   {responsive ? <div className={styles.headRes} >
      <div className='d-flex justify-content-around' >
        <AiOutlineArrowLeft className='mt-2 fs-4' />
    <h4 className={styles.title} >Welcome to HomeShare</h4>

      </div>
<p className={styles.num} >1</p>
    </div> : <h4 className='text-center pt-2 pb-3' >Welcome to HomeShare</h4>  }

    <div style={{width:responsive ? "90%" : "70%",margin:"auto"}} >
    <SimpleInput placeholder="Email" value={email} onClick={(e) => setEmail(e.target.value)} />
    <SimpleInput placeholder="Password" value={password} onClick={(e) => setPassword(e.target.value)} style={{marginTop:"10px"}} />
    <div className="d-flex mt-3 mb-2 justify-content-between ">
          <div className="d-flex mb-4">
            <input
              type="checkbox"
              style={{ width: "25px", height: responsive ? "14px" : "18px", marginTop: responsive ? "1px" : "3px"}}
            />
            <p style={{fontSize:responsive ? "12px" : "16px"}} >Keep me logged in</p>
          </div>
          <p style={{fontSize:responsive ? "12px" : "16px"}} >
            <span style={{cursor:"pointer", }} onClick={() => setAuth({forgot: true,verify: false,signup:false,login:false}) }  >Forgot Password ?</span>
          </p>
        </div>
        <Button type="submit" style={{ width: "100%",padding:"12px 0", background: "#f8cd46",borderColor:"transparent" }} onClick={() => {
          setAuth({...auth,login:false})
          setToken(false)
          }} >
            Login
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

          <h4 className={styles.head1}  >Dont have an account? <span>Sign Up</span></h4>
    </div>

</div>
  )
}

export default Login