import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import Login from '../auth/login'
import SignUp from '../auth/signup'
import CommonModal from '../common/modal'
import SimpleInput from '../common/simpleInput'
import styles from "./header.module.css"
import Dropdown from 'react-bootstrap/Dropdown'
import { GiHamburgerMenu } from "react-icons/gi";
import {FaRegUserCircle} from "react-icons/fa"
import Badge from 'react-bootstrap/Badge';
import Logo from "../../assets/logo.png"

function Header({responsive = false}) {

    const router = useRouter()
const [auth, setAuth] = useState({login:false,signup:false})
const [token, setToken] = useState(false)


console.log(token,"token");

  return (
    <div className={styles.container} >


<CommonModal 
show={auth.login}
setShow={() => setAuth({login:false,signup:false})}
bodyContent={<Login setAuth={setAuth} auth={auth} setToken={setToken} /> }
/>

<CommonModal 
show={auth.signup}
setShow={() => setAuth({login:false,signup:false})}
bodyContent={<SignUp setAuth={setAuth} auth={auth} /> }
/>

        {/* <h4 style={{width:"100%",marginBottom:0}} >Home Share</h4> */}
        <Image onClick={() => router.push("/")} style={{cursor:"pointer"}} src={Logo} />
       {!responsive ? 
       token ?
       <div className={styles.subAllList} >
       <p  >My Profile</p>
       <p  >My Home</p>
       <p >My Messages <Badge style={{borderRadius:"50%",top:"10px",position:"absolute"}} bg="warning">6</Badge>  </p>
       <p  >Favourites</p>
       <p onClick={() => setToken(false)} > <span><FaRegUserCircle  /> </span> My Account</p>
               </div> :
       <div className={styles.subList} >
<p onClick={() => router.push("/aboutus")} >Our story</p>
<p onClick={() => router.push("/blog")} >Blog</p>
<p onClick={() => setAuth({...auth,login:true})} >Login</p>
<p onClick={() => setAuth({...auth,signup:true})} >Sign Up</p>
        </div> : 
         <Dropdown   className={styles.dropdownToggle} >
         <Dropdown.Toggle id="dropdown-basic" className={styles.dropdownIconToggle} > 
         <GiHamburgerMenu size="30" />
         </Dropdown.Toggle>
   
         <Dropdown.Menu>
           <Dropdown.Item href="/aboutus">Our Story</Dropdown.Item>
           <Dropdown.Item href="/blog">Blog</Dropdown.Item>
           <Dropdown.Item href="/login">Login</Dropdown.Item>
           <Dropdown.Item href="/signup">Sign Up</Dropdown.Item>
         </Dropdown.Menu>
       </Dropdown>
         }
    </div>
  )
}

export default Header