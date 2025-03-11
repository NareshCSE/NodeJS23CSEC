import React from 'react';
import {useNavigate} from 'react-router';
import './styles.css';

const Register = () => {
     const navigate=useNavigate()
      const handlesubmit=()=>{
        navigate("/Register")
      }
  return (
    <div className="register">
        <h2> Create a new account</h2>
        <form>
        <div>
        <label htmlFor="fname">Full name:</label>
        <input type="text" id="fname" name="fname" />
        </div>

        <div>
        <label htmlFor="email">email id:</label>
        <input type="text" id="email" name="email" />

        <label htmlFor="pwd">Password:</label>
        <input type="password" id="pwd" name="pwd"/>
        </div>
    
        <div>
        <label htmlFor="phno">Phone number</label>
        <input type="text" id="Phone number" name="Phone number"/>

        <label htmlFor="DOB">Date of birth:</label>
        <input type="Date" id="DOB" name="DOB"/>
        </div>
{/*}
        <div className="form-group">
        <label htmlFor="Languages">Languages known:</label>
        <input type="checkbox" id="language1" name="language1" value="English"/>
        <label htmlFor="vehicle1"> English</label>
        <input type="checkbox" id="language2" name="language2" value="Telugu"/>
        <label htmlFor="vehicle2"> Telugu</label>
        <input type="checkbox" id="language3" name="language3" value="hindi"/>
        <label htmlFor="vehicle3"> Hindi</label>
        </div>

        <div className="form-group">
        <label htmlFor="gender">Gender:</label>
        <input type="radio" id="female" name="gender" value="female"/>
        <label htmlFor="female">Female</label>
        <input type="radio" id="male" name="gender" value="male"/>
        <label htmlFor="male">Male</label>
        </div>
*/}
        <div className="form-group">
        <label for="Address">Address:</label>
        <textarea  placeholder="Enter your address here....." ></textarea>
        </div>
        <button type="submit" onClick={handlesubmit}> Submit</button>
        <label for="register">Already have an account?<a href="/login">Login</a></label>
        
        </form>
    </div>
  );
};

export default Register;