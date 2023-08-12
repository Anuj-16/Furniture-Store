import React from 'react'

export const Login = () => {


  
  return (
    <>
      <div className="login-container">
        <h2>Sign-In</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email or mobile phone number</label>
            <input
              type="text"
              id="email"
              name="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })} />
          </div>
          <div className="form-group">
            <input type="submit" value="Sign In" />
            <div className="form-help">
              <Link to="#">Forgot your password?</Link>
              <Link style={{ marginLeft: "10px" }} to={'/signup'}>Back to SignUp</Link>
            </div>
          </div>
        </form>
      <div className="footer">
        <Link to="#">Conditions of Use</Link> |{" "}
        <Link to="#">Privacy Notice</Link> | <Link to="#">Help</Link>
      </div>
    </div>
      <div>
        <Footer />
      </div>
    </>
  )
}
