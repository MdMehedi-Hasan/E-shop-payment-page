import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const [signInWithGoogle, guser] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user
    ] = useCreateUserWithEmailAndPassword(auth);
    if (user || guser) {
        navigate('/')
    }
    return (
        <div className='ml-8'>
            <div className="hero min-h-screen">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                    <div className="card-body">
                        <h3 className='text-center text-2xl font-semibold'>SIGN UP</h3>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text" >Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-success" onClick={() => createUserWithEmailAndPassword(email, password)}>SIGN UP</button>
                            <div className="divider">OR</div>
                            <button className="btn btn-success" onClick={() => signInWithGoogle()}><Icon className='mr-4 text-2xl bg-white rounded-full' icon="flat-color-icons:google" /> Sign up with Google</button>
                        </div>
                    </div>
                </div>
            </div>
            <Link to="/" className='flex items-center text-black mt-[-40px]'><span><Icon icon="gg:arrow-long-left" /></span><span className='ml-3'>Previous</span></Link>
        </div>
    );
};

export default Signup;