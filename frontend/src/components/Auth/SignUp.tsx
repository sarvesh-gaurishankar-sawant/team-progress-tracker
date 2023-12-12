import React, { useState } from 'react';

const SignUp: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [phone, setPhone] = useState('');


  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string): boolean => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
  };

  const handleEmailBlur = () => {
    if (!validateEmail(email)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordBlur = () => {
    if (!validatePassword(password)) {
      setPasswordError('Password must have at least 8 characters, one uppercase, one number, and one special character.');
    } else {
      setPasswordError('');
    }
  };

  const handleSignUp = (event: React.FormEvent) => {
    event.preventDefault();
    if (!validateEmail(email)) {
      console.error('Invalid email address');
      return;
    }

    if (!validatePassword(password)) {
      console.error('Password must have at least 8 characters, one uppercase, one number, and one special character.');
      return;
    }

    console.log('SignUp successful', { firstName, lastName, email, phone, password });
  };

  const url1 = '/assests/loginpage1.png';
  const url2 = '/assests/loginpage2.png';
  return (
    <div className="flex items-center justify-center h-screen" style={{ background: 'linear-gradient(90deg, rgba(77,47,138,1) 0%, rgba(131,26,152,1) 55%, rgba(176,92,194,1) 100%)' }}>
      <div className="w-[50%] flex items-center justify-center">
        <div className='w-[70%] gap-5 flex flex-col'>
          <div className="text-white text-5xl font-bold">TaskSphere brings all your tasks, teammates, and tools together</div>
          <div className="text-white text-3xl">Keep everything in the same place, even if your team isn’t.</div>
          <div className='flex'>
            <img src={url1} alt="" style={{ width: '300px', height: '250px' }}/>
            <img src={url2} alt=""  style={{ width: '300px', height: '250px' }}/>
          </div>
        </div>
      </div>
      <div className="w-[50%] flex items-center justify-center">
        <div className="w-full max-w-lg">
          <form className="shadow-md rounded px-2 pt-2 pb-2" onSubmit={handleSignUp}>
            <div className="flex items-center justify-between">
            <div className="w-full ">
              <form className="bg-black bg-opacity-50 shadow-md rounded-md px-4 pt-6 pb-8">
                <div className="mb-4">
                  <h1 className="text-white text-2xl mb-2">Sign Up</h1>

                  {/* Firstname */}
                  <div>
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="fname">
                    First Name
                    </label>
                    <input
                      className="mb-2 bg-black border-white shadow appearance-none border rounded w-full py-4 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                      id="firstname"
                      type="text"
                      placeholder="John"
                    />
                  </div>

                  {/* last name */}
                  <div>
                    <label className="block text-white text-sm font-bold mb-2 mt-2" htmlFor="lname">
                      Last Name
                    </label>
                    <input
                      className="mb-2 bg-black border-white shadow appearance-none border rounded w-full py-4 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                      id="lastname"
                      type="text"
                      placeholder="Doe"
                    />
                  </div>

                  {/* email  */}
                  <div>
                    <label className="block text-white text-sm font-bold mb-2 mt-2" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="bg-black border-white shadow appearance-none border rounded w-full py-4 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="text"
                      placeholder="johndoe@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onBlur={handleEmailBlur}
                    />
                    {emailError && <p className="text-red-500 text-xs italic">{emailError}</p>}
                  </div>
                </div>

                {/* password */}
                <div>
                  <label className="block text-white text-sm font-bold mb-2 mt-2" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="mb-2 bg-black border-white shadow appearance-none border rounded w-full py-4 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="********"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onBlur={handlePasswordBlur}
                  />
                  {passwordError && <p className="text-red-500 text-xs italic">{passwordError}</p>}
                </div>

                {/* phone number */}
                <div>
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="phno">
                      Phone No.
                    </label>
                    <input
                      className="bg-black border-white shadow appearance-none border rounded w-full py-4 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                      id="phno"
                      type="number"
                      placeholder="000-000-0000"
                    />
                  </div>

                <div className="flex items-center justify-between">
                  <button
                    className="mt-4 text-white font-bold py-4 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                    type="button"
                    // onClick={handleLogin}
                    style={{
                        background: '#6644ab',
                        // border: '1px solid #fff',
                      }}
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
