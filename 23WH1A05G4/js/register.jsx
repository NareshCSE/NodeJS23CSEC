// src/pages/Register.js
import React from 'react';

const Register = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold">Register</h2>
      <form className="flex flex-col gap-2 mt-4">
        <input type="text" placeholder="Name" className="border p-2" />
        <input type="email" placeholder="Email" className="border p-2" />
        <input type="password" placeholder="Password" className="border p-2" />
        <button className="bg-blue-500 text-white p-2 rounded">Register</button>
      </form>
    </div>
  );
};

export default Register;
