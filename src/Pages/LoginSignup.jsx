import React, { useState } from 'react';
import LoginForm from '../Components/LoginSignup/LoginForm';
import SignupForm from '../Components/LoginSignup/SignupForm';
const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  return <div className="loginsignup">
      <div className="account-intro"><p className="eyebrow">YOUR OWN KIND OF STYLE</p><h1>Good to<br />have you <em>here.</em></h1><p>A place for your everyday favorites.</p><span>THE ONESTYLE COMMUNITY</span></div><div className="loginsignup-container"><p className="eyebrow">WELCOME TO ONESTYLE</p>
        <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
        {isLogin ? <LoginForm /> : <SignupForm />}
        <p className="loginsignup-switch">
          {isLogin ? "Don't have an account? " : 'Already have an account? '}
          <button className="switch-button" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </p>
      </div>
    </div>;
};
export default LoginSignup;
