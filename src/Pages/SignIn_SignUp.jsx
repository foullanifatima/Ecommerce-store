import React from 'react'
import SignIn from '../Components/signIn/SignIn'
import SignUp from '../Components/signUp/SignUp'

function SignIn_SignUp() {
  return (
    <div className="container mt-5">
      <div className="row  g-5 ">
        <div className="col-lg-6 col-sm-12">
          <SignIn />
        </div>
        <div className="col-lg-6 col-sm-12">
          <SignUp />
        </div>
      </div>
    </div>
  )
}

export default SignIn_SignUp
