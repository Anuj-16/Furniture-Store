import React from 'react'

export const signup = () => {



  return (
    <><div className="signup-container anuj-signup-container">
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
                <div className="form-group abid-form-group">
                    <label className="abid-label">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={sign.password}
                        onChange={(e) => setSign({ ...sign, [e.target.name]: e.target.value })}
                        className="abid-input" />
                </div>
                <div className="form-group abid-form-group">
                    <input type="submit" value="Sign Up" className="abid-submit-button" />
                    <div className="abid-form-help-s">
                        By signing up, you agree to our <Link id="abid-link-s">Terms of Service</Link> and <Link id="abid-link-s">Privacy Policy</Link>.
                    </div>
                </div>
            </form>
            <div className="footer abid-footer">
                Already have an account? <Link to={"/login"} id="abid-link">Sign In</Link>
            </div>
        </div>
            <div>
                {/* <Footer /> */}
            </div>
        </>
  )
}
