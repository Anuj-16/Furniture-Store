import React, { useState } from 'react'
import { Link } from 'react-router-dom';
//import { useDispatch } from "react-redux";
//import { useNavigate } from "react-router-dom";
import axios from 'axios'

export const Signup = () => {

  //const navigate = useNavigate()
    //const dispatch = useDispatch()
    const initialState = {
        name: "",
        email: "",
        password: ""
    }

    const [sign, setSign] = useState(initialState)


    const handleSubmit = (e) => {
      e.preventDefault();
      
      if (sign.email === '' || sign.name === '' || sign.password === '') {
          alert("fill all the field")
          setSign({ ...sign, email: '', password: "" })
          return
      }
      else{
          axios.post(`https://myjson.onrender.com/users`, sign)
          console.log(sign.name)
          alert("Account Created Succesfully")
          //navigate('/login')
          setSign({ ...sign, name: '', email: '', password: '' })
      }
    
  };


  return (
    <>
    <div className="signup-container anuj-signup-container">
            <h2 className="anuj-heading">Create an Account</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group anuj-form-group">
                    <label htmlFor="name" className="anuj-label">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="anuj-input" />
                        value={sign.name}
                        onChange={(e) => setSign({ ...sign, [e.target.name]: e.target.value })}
                </div>
                <div className="form-group anuj-form-group">
                    <label className="anuj-label">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="anuj-input" />
                        value={sign.email}
                        onChange={(e) => setSign({ ...sign, [e.target.name]: e.target.value })}
                </div>
                <div className="form-group anuj-form-group">
                    <label className="anuj-label">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="anuj-input" />
                        value={sign.password}
                        onChange={(e) => setSign({ ...sign, [e.target.name]: e.target.value })}
                </div>
                <div className="form-group anuj-form-group">
                    <input type="submit" value="Sign Up" className="anuj-submit-button" />
                    <div className="abid-form-help-s">
                        By signing up, you agree to our <Link id="anuj-link-s">Terms of Service</Link> and <Link id="anuj-link-s">Privacy Policy</Link>.
                    </div>
                </div>
            </form>
            <div className="footer anuj-footer">
                Already have an account? <Link to={"/login"} id="anuj-link">Sign In</Link>
            </div>
        </div>
            <div>
                {/* <Footer /> */}
            </div>
        </>
  )
}
