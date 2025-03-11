import React from "react";
import "./styles.css";

export const Registration = () => {
    return (
    <div className="form-container">
      <h2>Register</h2>
      <form>
        <div>
            <label>Username:</label>
            <input type="text" required />
        </div>
        <div>
            <label>Email:</label>
            <input type="email" required />
        </div>
        <div>
            <label>Gender:</label>
            <div className="radio-group">
            <input type="radio" name="gender" value="Male" required /> Male
            <input type="radio" name="gender" value="Female" required /> Female
            <input type="radio" name="gender" value="Other" required /> Other
            </div>
        </div>
        <div>
            <label>Date of Birth:</label>
            <input type="date" required />
        </div>
        <div>
            <label>Address:</label>
            <textarea rows="3" required></textarea>
        </div>
        <div>
            <label>Phone Number:</label>
            <input type="tel" required />
        </div>
        <div>
            <label>Department:</label>
            <select required>
            <option value="">Select Department</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Electronics">Electronics</option>
            <option value="Mechanical">Mechanical</option>
            <option value="Civil">Civil</option>
            </select>
        </div>
        <div>
            <label>Password:</label>
            <input type="password" required />
        </div>
        <div>
            <label>Confirm Password:</label>
            <input type="password" required />
        </div>
        <div>
            <button type="submit">Register</button>
        </div>
        
      </form>
    </div>
  );
};
  
export default Registration;