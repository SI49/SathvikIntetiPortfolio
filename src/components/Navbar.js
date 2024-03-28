import React from 'react';
import styles from '../styles/NavBar.module.css'
import Link from 'next/link';
import { useRouter } from 'next/router';
// import Logo from '@/components/Logo.js'
//import { motion } from 'framer-motion'
import sathvik from '../../public/tsquare.jpg'
import Image from 'next/image'

const ModifyLink = ({ href, title, className = "" }) => {

    const router = useRouter();

    return (
        <Link href={href} className="group p-4 border-l-2 border-[#24423C] text-light" >
            <span>
                <div className={`group-hover:text-[red] w-[120px] inline-block text-[1.5rem] ${router.asPath === href ? 'text-[skyblue]' : ''}`}>
                    {title}
                </div>
                <span className={` ${router.asPath === href ? 'relative h-2 w-2 bg-[#FCBE14] inline-block border-[#24423C] border-[1.5px] rounded-[50%] z-10 bottom-[5px] right-[141px]' : 'relative h-2 w-2 bg-[transparent] inline-block'}`}></span>
            </span>
        </Link>

    );
};


const NavBar = () => {
    return (
        <div className="flex font-serif items-center justify-center px-[2rem] w-[27rem] bg-[#EED9C4] flex-col ">
                <p className='text-[2rem]'>Sathvik Inteti</p>
                &nbsp;
                <Image className={`w-[15rem] rounded-[25px] border-light`} src={sathvik} alt="sathvik" />
                <div>
                    <div className="text-center">
                        &nbsp;
                        <p className=''>Master's Student @ <text className=''>UMD</text></p>
                        <p className='font-mono'>sinteti@umd.edu</p>
                        &nbsp;
                        <nav>
                            <ModifyLink href="/" title="about" className="" />
                            <ModifyLink href="/research" title="research" className="" />
                            <ModifyLink href="/experience" title="experience" className="" />
                            <ModifyLink href="/projects" title="projects" className="" />
                            <ModifyLink href="/contact" title="contact" className="" />
                        </nav>
                    </div>
                </div>
        </div>
    );
};

export default NavBar;