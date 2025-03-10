import React, { useState } from 'react';
import './styles.css'; // Optional: If you want to separate the styles into a CSS file

const Login = () => {
  const [uname, setUname] = useState('');
  const [pwd, setPwd] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Reset error message before validation
    setErrorMessage('');

    // Validate the form
    if (uname === '' || pwd === '') {
      setErrorMessage('Both username and password are required');
      return;
    }

    if (pwd.length < 8) {
      setErrorMessage('Password must be at least 8 characters');
      return;
    }

    // If validation passes, you can submit or redirect here
    setErrorMessage(''); // Clear error if everything is valid
    console.log('Form submitted:', { uname, pwd });

    // Redirect or perform any other action (for now it's just logging the form values)
    // window.location.href = 'catalogue.html'; // For example, you could redirect to another page here
  };

  return (
    <div className="login">
      <h2><b>Login Page</b></h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="uname">Username:</label>
          <input
            type="text"
            id="uname"
            name="uname"
            value={uname}
            onChange={(e) => setUname(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="pwd">Password:</label>
          <input
            type="password"
            id="pwd"
            name="pwd"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />
        </div>

        {errorMessage && <div className="error">{errorMessage}</div>}

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Login;
