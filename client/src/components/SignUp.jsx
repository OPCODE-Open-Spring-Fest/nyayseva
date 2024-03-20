import React, {useState} from 'react'
import SignUpLSP from './SignUpUser';
import SignUpUser from "./SignUpLSP"
import "./signUpIn.css"
import Logo from "../Assets/Sample_logo.png"


const SignUp = () => {
const [bool ,setBool] = useState(1)
const [classStateUser, setClassStateUser] = useState("btn")
const [classStateLSP, setClassStateLSP] = useState("btn active")
   
const handelActive =(e) => {
    if(e.target.name === "lsp"){
        setClassStateLSP("btn")
        setClassStateUser("btn active")
        setBool(0)
    }
    else{
        setClassStateLSP("btn active")
        setClassStateUser("btn")
        setBool(1)
    }
}
  return (
  
      <div class="flex min-h-full flex-col justify-center px-6 py-20 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
  <img
            className="mx-auto h-20 w-auto"
            src={Logo}
            alt="Your Company"
          />
  </div>
      <div className='selector'>
      <button type="submit" className={classStateLSP} onClick={handelActive} name='user'>LSP</button>
        <button type="submit" className={classStateUser}onClick={handelActive} name='lsp'>User</button>

      </div>
  {
    bool ?  <SignUpUser/>:<SignUpLSP/> 
  }
  </div>

   
  )
}

export default SignUp
