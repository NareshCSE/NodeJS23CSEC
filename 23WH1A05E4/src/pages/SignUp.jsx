import React, { useState } from 'react';
import './styles.css'; // Import the CSS file (optional, if you want to keep the styles separate)

const SignUp = () => {
  const [uname, setUname] = useState('');
  const [mailid, setMailid] = useState('');
  const [mobno, setMobno] = useState('');
  const [pwd, setPwd] = useState('');
  const [uerror, setUerror] = useState('');
  const [pwderror, setPwderror] = useState('');
  const [successmess, setSuccessmess] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    setUerror('');
    setPwderror('');
    setSuccessmess('');

    let isValid = true;

    // Validate username format
    if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]+$/.test(uname)) {
      setUerror('Incorrect username format');
      isValid = false;
    }

    // Validate password length
    if (pwd.length < 8) {
      setPwderror('Password must be at least 8 characters');
      isValid = false;
    }

    // If valid, show success message and simulate form submission
    if (isValid) {
      setSuccessmess('Sign up successful!');
      setTimeout(() => {
        // Simulate form submission or redirect (e.g., redirect to login page)
        // For now, just log the values to console
        console.log('User Signed Up:', { uname, mailid, mobno, pwd });
      }, 2000);
    }
  };

  return (
    <div className="signup">
      <h2><b>Sign-Up Page</b></h2>

      <form id="signup" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            id="uname"
            placeholder="Username"
            value={uname}
            onChange={(e) => setUname(e.target.value)}
          />
        </div>
        <div className="error">{uerror}</div>

        <div className="form-group">
          <input
            type="email"
            id="mailid"
            placeholder="Email"
            value={mailid}
            onChange={(e) => setMailid(e.target.value)}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            id="mobno"
            placeholder="Mobile No"
            value={mobno}
            onChange={(e) => setMobno(e.target.value)}
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            id="pwd"
            placeholder="Password"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />
        </div>
        <div className="error">{pwderror}</div>

        <input type="submit" value="Submit" />
      </form>

      <div className="success-message">{successmess}</div>
    </div>
  );
}

export default SignUp;
