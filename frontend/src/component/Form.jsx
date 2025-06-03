import React, { useState } from'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'


const Form = ()=> {
    const [username, setuname] = useState("");
    const [passwd, setpasswd] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    function handleusername(evt) {
        setuname(evt.target.value);
        setError(""); // Clear error when user types
    }

    function handlepasswd(evt) {
        setpasswd(evt.target.value);
        setError(""); // Clear error when user types
    }

    async function check() {
        if (!username || !passwd) {
            setError("Please enter both username and password");
            return;
        }

        setIsLoading(true);
        setError("");
          try {
            console.log('Attempting to connect to:', import.meta.env.VITE_API_URL);
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/login?username=${username}&passwd=${passwd}`);
            console.log('Response:', response);
            const data = response.data;
            if (data.success) {
                localStorage.setItem('user', JSON.stringify(data.user));
                navigate('/dashboard');
            } else {
                setError(data.message || "Invalid credentials");
            }
        } catch (err) {
            console.error("Login error details:", {
                message: err.message,
                response: err.response?.data,
                status: err.response?.status,
                url: err.config?.url
            });
            setError(`Error: ${err.response?.data?.message || err.message || "An error occurred. Please try again."}`);
            console.error("Login error:", err);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="min-h-screen bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg')] bg-cover bg-center">
  <div className="bg-black/60 min-h-screen flex flex-col items-center pt-20">
    <h1 className='text-red-600 text-6xl font-bold mb-10'>NETFLIX</h1>
    
    <div className="flex flex-col items-center justify-center bg-black/70 p-12 rounded-md w-full max-w-md">
      <h2 className="text-white text-3xl font-bold mb-6">Sign In</h2>
      
      <input 
        type="text" 
        placeholder="Email or phone number" 
        name="username" 
        onChange={handleusername} 
        className="bg-gray-700 text-white mb-4 p-3 rounded w-full placeholder-gray-400" 
      />
      
      <input 
        type="password" 
        placeholder="Password" 
        name="passwd" 
        onChange={handlepasswd} 
        className="bg-gray-700 text-white mb-6 p-3 rounded w-full placeholder-gray-400" 
      />
        {error && (
        <div className="w-full p-3 mb-4 text-sm text-red-500 bg-red-100 rounded">
          {error}
        </div>
      )}
      
      <button 
        onClick={check} 
        disabled={isLoading}
        className={`${
          isLoading ? 'bg-red-400' : 'bg-red-600 hover:bg-red-700'
        } text-white font-bold py-3 px-4 rounded w-full text-lg relative`}
      >
        {isLoading ? 'Signing In...' : 'Sign In'}
      </button>
      
      <div className="flex justify-between w-full mt-3 text-gray-400 text-sm">
        <label className="flex items-center">
          <input type="checkbox" className="mr-1"/> Remember me
        </label>
        <a href="#" className="hover:underline">Need help?</a>
      </div>
      
      <p className="text-gray-400 mt-8">
        New to Netflix? <a href="#" className="text-white hover:underline">Sign up now</a>.
      </p>
    </div>
  </div>
</div>
    )
}
export  default Form;