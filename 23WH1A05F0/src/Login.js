import { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Login requested for ${email}`);
  };

  return (
    <div>
      <h2>Student Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
