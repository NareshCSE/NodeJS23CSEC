import React from 'react';

const Register = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Registration Page</h1>
      <form>
        <label>Name</label>
        <input type="text" /><br />
        <label>Email</label>
        <input type="email" /><br />
        <label>Password</label>
        <input type="password" /><br />
        <label>Mobile No.</label>
        <input type="tel" /><br />
        <label>Date of Birth</label>
        <input type="date" /><br />
        <label>Languages:</label><br />
        <input type="checkbox" /> Telugu<br />
        <input type="checkbox" /> English<br />
        <input type="checkbox" /> Hindi<br />
        <label>Gender:</label><br />
        <input type="radio" name="gender" /> Male<br />
        <input type="radio" name="gender" /> Female<br />
        <label>Department:</label>
        <select>
          <option>CSE</option>
          <option>ECE</option>
          <option>AIML</option>
        </select><br />
        <label>Address</label><br />
        <textarea rows="5" cols="30"></textarea><br />
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </form>
    </div>
  );
};

export default Register;
