import React from 'react';
import Link from 'next/link';
import delve from 'dlv';
import Layout from '../../components/layout';

const Login = ({ global, pageData, preview }) => {
  return (
    <Layout
      global={global}
      type="restaurant-page"
      pageData={pageData}
      preview={preview}
    >
        <h1>LOGIN</h1>
        <form className="rounded-lg border-4 border-black border-double shadow-2xl">
            <label for="email">Email:</label><br></br>
            <input type="text" id="email" name="email" className="border-solid border-2 border-black"></input><br></br>
            <label for="password">Password:</label><br></br>
            <input type="text" id="password" name="password" className="border-solid border-2 border-black"></input><br></br>
            <button type="submit" className="ring-2 ring-black bg-slate-800 text-white">Login</button>
        </form>
    </Layout>   
    );
};

export default Login;
