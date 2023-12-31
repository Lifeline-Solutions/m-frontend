import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { selectUser, register } from '../features/userSlice';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  const redirect = location.search ? location.search.split('=')[1] : '/';

  const submitHandler = (e) => {
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
    } else {
      e.preventDefault();
      dispatch(register(name, email, password));
    }
  };
  toast.error(message, {
    position: 'top-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
  });
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  useEffect(() => {
    if (user) {
      navigate(redirect);
    }
  }, [navigate, redirect, user]);
  return (
    <div className="bg-[#000] pt-28">
      {message && <ToastContainer />}
      <div className="bg-[#161616] mx-auto w-[30%] px-10 rounded-lg pb-10">
        <div className="flex justify-center md:flex-row gap-5 pt-10">
          <div className="flex flex-col w-full">
            <label
              htmlFor="name"
              className="text-white mb-3 uppercase font-bold"
            >
              Name
              <br />
              <input
                type="text"
                id="email"
                required
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name.."
                className="bg-[#161616] w-full text-white mt-5 border-[grey] border-[1px] rounded-lg p-2 font-medium focus:outline-none focus:border-[#fae115]"
              />
            </label>
          </div>
        </div>
        <div className="flex justify-center md:flex-row gap-5 pt-10">
          <div className="flex flex-col w-full">
            <label
              htmlFor="email"
              className="text-white mb-3 uppercase font-bold"
            >
              Email Address
              <br />
              <input
                type="text"
                required
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address.."
                className="bg-[#161616] w-full text-white mt-5 border-[grey] border-[1px] rounded-lg p-2 font-medium focus:outline-none focus:border-[#fae115]"
              />
            </label>
          </div>
        </div>
        <div className="flex justify-center md:flex-row mt-10 gap-5">
          <div className="flex flex-col w-full">
            <label
              htmlFor="password"
              className="text-white mb-3 uppercase font-bold"
            >
              Password
              <br />
              <input
                type="password"
                id="password"
                required
                name="name"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your password.."
                className="bg-[#161616] w-full text-white mt-5 border-[grey] border-[1px] rounded-lg p-2 font-medium focus:outline-none focus:border-[#fae115]"
              />
            </label>
          </div>
        </div>
        <div className="flex justify-center md:flex-row mt-10 gap-5">
          <div className="flex flex-col w-full">
            <label
              htmlFor="confirmPassword"
              className="text-white mb-3 uppercase font-bold"
            >
              Password
              <br />
              <input
                type="password"
                required
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password.."
                className="bg-[#161616] text-white mt-5 w-full border-[grey] border-[1px] rounded-lg p-2 font-medium focus:outline-none focus:border-[#fae115]"
              />
            </label>
          </div>
        </div>

        <button
          className="bg-[#fae115] p-3 rounded-lg hover:bg-[#000] hover:text-[#fae115] hover:border hover:border-[#fae115] w-full mt-10 mb-10 "
          onClick={(e) => submitHandler(e)}
          type="submit"
        >
          <h1 className="font-bold">Register</h1>
        </button>
        <p className="text-[#fff] font-medium">
          Already have an account?
          {' '}
          <Link
            to={redirect ? `/login?redirect=${redirect}` : '/login'}
            className="text-[#fae115] font-bold"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
