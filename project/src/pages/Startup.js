import React from 'react';
import '../styles/Startup.css';

const Startup = () => {
    return (
        <section className="start">
            <img src="assets/pngwing.com (2).png" className="art" alt="art" />
            <div className="startbtn">        
                <button id="signup">GET STARTED</button>
                <button id="login">ALREADY HAVE AN ACCOUNT</button>
            </div>

            <div className="auth-container">
                <div className="auth-box">
    
                    {/* login form */}
                    <span className="closebtn" id="dialog">&times;</span>
                    <div className="auth-form" id="loginForm">
                        <h2>Log in</h2>
                        <form action="#" method="post">
                            <div className="input-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" required />
                            </div>
                            <div className="input-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" name="password" required />
                            </div>
                        </form>
                    </div>
    
                    <div className="button-container">
                        <button type="submit" className="auth-btn">Log In</button>
                        <hr className="divider" />
                    </div>
    
                    {/* Continue with Google and Facebook */}
    
                    <div className="social-login">
                        <button className="google-btn">
                            <p>Continue with Google</p>
                            <img src="assets/pngwing.com.png" alt="Google logo" className="social-icon" />
                        </button>
                        <button className="facebook-btn">
                            <p>Continue with Facebook</p>
                            <img src="assets/pngwing.com (1).png" alt="Facebook logo" className="social-icon" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Startup;
