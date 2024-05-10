import React from 'react';
import aboutLeftImg from '../../assets/image/2d87418e-3174-4504-96a5-27136f54a41d.jpg'
import './About.css'
import { FaFacebookF } from 'react-icons/fa';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import logo1 from '../../assets/about img/1.jpg'
import logo2 from '../../assets/about img/2.jpg'
import logo3 from '../../assets/about img/3.jpg'

const About = () => {
    return (
        <div className=''>
            {/* about me first row */}
            <div className='firstAbout'>
                <div className='f-a-l'>
                    <img src={aboutLeftImg} alt="" />
                </div>
                <div className='f-a-r'>
                    <div className='about-meText'>
                        <h2>About Me</h2>
                    </div>
                    <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, blanditiis deleniti! Ipsa fugiat velit quibusdam ipsam, delectus animi voluptatem pariatur harum ducimus.
                        Neque, repudiandae ratione accusamus, vitae soluta eaque deleniti, itaque quas vel reiciendis exercitationem iure delectus odio. Possimus odio debitis dignissimos doloribus excepturi aliquam quo dolor. Perspiciatis veniam optio nihil voluptatem. <br /> <br />
                        Aut tempore expedita odio cumque? Maiores quibusdam eum magni nesciunt fuga vel voluptas, soluta ut delectus. Repudiandae, iusto tempora! Modi saepe officiis voluptate labore quae consequuntur quisquam ducimus minima iusto.
                        Pariatur voluptates similique tempora ipsam, inventore culpa ratione ullam minus delectus laborum doloremque praesentium ipsum iste. Expedita harum vero velit cum! Pariatur.</span>
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
            </div>
            {/* about me next section */}
            <div className='secondAbout mt-20 mb-5'>
                {/* 1 */}
                <div className='s-about'>
                    <div className='about-img'>
                        <img className='ab-img' src={logo1} alt="" />
                    </div>
                    <div className='about-info'>
                        <h3>Web Design</h3>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                {/* 2 */}
                <div className='s-about'>
                    <div className='about-img'>
                        <img src={logo2} alt="" />
                    </div>
                    <div className='about-info'>
                        <h3>Illustrator</h3>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                {/* 3 */}
                <div className='s-about'>
                    <div className='about-img'>
                        <img src={logo3} alt="" />
                    </div>
                    <div className='about-info'>
                        <h3>Branding Identity</h3>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;