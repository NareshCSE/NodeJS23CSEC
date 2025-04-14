// src/pages/Login.js
import React from 'react';

const Login = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold">Login</h2>
      <form className="flex flex-col gap-2 mt-4">
        <input type="email" placeholder="Email" className="border p-2" />
        <input type="password" placeholder="Password" className="border p-2" />
        <button className="bg-green-500 text-white p-2 rounded">Login</button>
      </form>
    </div>
  );
};

export default Login;
