import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import CustomLogin from '../components/CustomLogin';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    email: '',
  });

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleTextInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submit = async (e) => {
    e.preventDefault();

    const fieldData = new FormData();
    fieldData.append('name', formData.name);
    fieldData.append('email', formData.email);
    fieldData.append('password', formData.password);

    try {
      setLoading(true);
      const { data } = await axios.post(
        // `http://localhost:4000/user/register`,
`https://fulltesting.vercel.app/user/register`,
        fieldData,
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      if (data) {
        navigate('/');
        toast.success(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };
  
  const handleGoogleLoginSuccess = async (response) => {
    try {
      const { data } = await axios.post(
        `https://fulltesting.vercel.app/auth/google`,
        { token: response.credential },
        { withCredentials: true }
      );
      navigate('/');
      toast.success('Signed in with Google!');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Google sign-in failed');
    }
  };

  const handleGoogleLoginError = () => {
    toast.error("Google Login Failed !!!")
    toast.error('Google sign-in failed');
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <form onSubmit={submit} className="max-w-sm space-y-3">
          <div className="relative">
            <input
              type="text"
              required
              className="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              placeholder="Enter name"
              value={formData.name}
              name="name"
              onChange={handleTextInput}
            />
          </div>
          <div className="relative">
            <input
              required
              type="password"
              className="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              value={formData.password}
              name="password"
              onChange={handleTextInput}
              placeholder="Enter password"
            />
          </div>
          <div className="relative">
            <input
              type="email"
              name="email"
              onChange={handleTextInput}
              value={formData.email}
              className="peer p-4 bg-gray-100 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600"
              placeholder="you@email.com"
              required
            />
          </div>
          <center>
            <button
              type="submit"
              className="py-3 mx-auto px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-gray-500 text-white hover:bg-gray-600 focus:outline-none focus:bg-gray-600 disabled:opacity-50 disabled:pointer-events-none"
            >
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </center>
          <div className="flex justify-center">

            <GoogleLogin
              onSuccess={response =>{
                console.log(response.credential) ; 
                const credential = jwtDecode(response.credential)
                console.log( "Credentials",  credential);
                toast.success("Google Login Success Full ");
                alert(credential.name);
                 }
              }
              onError={handleGoogleLoginError}
            />

            {/* <CustomLogin/> */}


          </div>
        </form>
      </div>
    </>
  );
}
