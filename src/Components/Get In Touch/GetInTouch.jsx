import React from 'react';
import './GetInTouch.css'
import { BiRightArrowAlt } from "react-icons/bi";
import { FaFacebookF } from 'react-icons/fa';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';

const GetInTouch = () => {
    return (
        <div>
            {/* Address info */}
            <div className='main-get mt-10'>
                <div className='get-left'>
                    <div>
                        <div className='get-text mb-8'>
                            <h2>Get in Touch</h2>
                        </div>
                        <span>100 Main St, Blacktown NSW 2148, <br /> Australia</span> <br />
                        <span className='email'>support@bold.com, info@youtmail.com</span> <br />
                        <span>+256-4516-556, +(257)56812749</span>
                    </div>
                    <div className='i-div'>
                        <h4>Share : </h4>
                        <div className='icons'>
                            <a href="facebook.com"><FaFacebookF /></a>
                            <a href="twitter.com"><AiFillTwitterCircle /></a>
                            <a href="linkdin.com"><AiFillLinkedin /></a>
                            <a href="github.com"><AiFillGithub /></a>
                        </div>
                    </div>
                </div>
                {/* messege feild */}
                <div className='get-right'>
                    <input className='input inputt p-2' type="text" placeholder='Name Heare*' />
                    <input className='input inputt p-2' type="text" placeholder='Email Heare*' /> <br />
                    <textarea className='input mt-4 p-2' placeholder='Messege Heare*' name="Message Heare" id="" cols="50" rows="5"></textarea>
                    <div className='button'>
                        <h5 className='text-left ms-2'>Are you a Human? <span>11+5 =</span>
                            <input className='human-input ms-3' type="text" />
                        </h5>
                        <button>SEND MESSAGE<BiRightArrowAlt /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetInTouch;