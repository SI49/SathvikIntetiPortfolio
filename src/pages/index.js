// import sathvik from '../../public/tsquare.jpg'
// import Image from 'next/image'
// import gc from '../../public/gc.jpg'
// import eg from '../../public/eg.jpg'
// import bcs from '../../public/bcs.jpg'
// import ig from '../../public/ig.png'
// import styles from '../styles/Home.module.css'
// import liquidnet from '../../public/liquidnet.png'
// import umd from '../../public/umd.png'
// import { useRouter } from 'next/router';
// import Link from 'next/link';



export default function Home() {
    return (
        <div className='flex font-serif px-[3rem] w-[100%] overflow-y-scroll'>
            <div>
                <div className=' text-light text-[100%]'>
                    <p className='text-[black] text-[150%]'>About Me</p> 
                    <hr />
                    <p className='pt-2'>I&apos;m a researcher & full stack software engineer based in New York, NY and around the D.C. area. I&apos;m
                    currently pursuing a M.S. in Computer Science through University of Maryland, College Park&apos;s <a href='https://undergrad.cs.umd.edu/combined-bsms-program' target="_blank" className='text-[#0000EE] underline'>B.S./M.S. program</a>. I&apos;m being
                    advised by <a href='https://www.cs.umd.edu/~nayeem/' target="_blank" className='text-[#0000EE] underline'>Dr. Mohammed Nayeem Teli</a>.</p>
                </div>
                <br />
                <div className=' text-light text-[100%]'>
                    <p className='text-[black] text-[150%]'>Activities </p>
                    <hr />
                    <p className='pt-2'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    &nbsp;
                    {/*<div className='flex flex-row w-[100%] items-center'>
                    <div className='flex flex-col items-center text-center rounded-[10px] p-1 pb-2 m-3'>
                        <p>I'm currently watching</p>
                        <p className='font-bold w-[12rem]'>Better Call Saul</p>

                        <Image className={`w-[12rem] p-1 rounded-[10px] border-light`} src={bcs} alt="gc" />
                    </div>
                    <div className='flex flex-col items-center text-center  rounded-[10px] p-1 pb-2 m-3'>
                        <p>I'm currently reading</p>
                        <p className='font-bold w-[12rem]'>Ender's Game by Orson Scott Card</p>

                        <Image className={`w-[12rem] p-1 rounded-[10px] border-light`} src={eg} alt="gc" />
                    </div>
                    <div className='flex flex-col items-center text-center  rounded-[10px] p-1 pb-2 m-3'>
                        <p className='inline-block'>I most recently visited</p>
                        <p className='font-bold w-[12rem]'>Grand Canyon, AZ</p>
                        <Image className={`w-[12rem] p-1 rounded-[10px] border-light`} src={gc} alt="gc" />
                    </div>
                    </div> */}
                </div>
                <div className="text-[100%]">
                    <p className='text-[black] text-[150%]'>News</p>
                    <hr />
                    <div className='pt-2'>
                    <ul className="text-light max-h-[240px] px-2 overflow-y-scroll">
                        <li className='p-2 border-[#24423C] border-l-2'>
                        <span className={`relative h-2 w-2 bg-[#FCBE14] inline-block border-[#24423C] border-[1.5px] rounded-[50%] right-[13px]`}></span>
                            5/23/2023 - Graduated from University of Maryland, College Park with a Bachelors Degree in Computer Science and a Minor in statistics
                        </li>
                        <li className='p-2 border-[#24423C] border-l-2'>
                        <span className={`relative h-2 w-2 bg-[#FCBE14] inline-block border-[#24423C] border-[1.5px] rounded-[50%] right-[13px]`}></span>
                            6/05/2022 - Started internship with Liquidnet
                        </li>
                        <li className='p-2 border-[#24423C] border-l-2'>
                        <span className={`relative h-2 w-2 bg-[#FCBE14] inline-block border-[#24423C] border-[1.5px] rounded-[50%] right-[13px]`}></span>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        </li>
                        <li className='p-2 border-[#24423C] border-l-2'>
                        <span className={`relative h-2 w-2 bg-[#FCBE14] inline-block border-[#24423C] border-[1.5px] rounded-[50%] right-[13px]`}></span>
                            Aliquam tincidunt mauris eu risus.
                        </li>
                        <li className='p-2 border-[#24423C] border-l-2'>
                        <span className={`relative h-2 w-2 bg-[#FCBE14] inline-block border-[#24423C] border-[1.5px] rounded-[50%] right-[13px]`}></span>
                            Vestibulum auctor dapibus neque.
                        </li>
                        <li className='p-2 border-[#24423C] border-l-2'>
                        <span className={`relative h-2 w-2 bg-[#FCBE14] inline-block border-[#24423C] border-[1.5px] rounded-[50%] right-[13px]`}></span>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        </li>
                        <li className='p-2 border-[#24423C] border-l-2'>
                        <span className={`relative h-2 w-2 bg-[#FCBE14] inline-block border-[#24423C] border-[1.5px] rounded-[50%] right-[13px]`}></span>
                            Aliquam tincidunt mauris eu risus.
                        </li>
                        <li className='p-2 border-[#24423C] border-l-2'>
                        <span className={`relative h-2 w-2 bg-[#FCBE14] inline-block border-[#24423C] border-[1.5px] rounded-[50%] right-[13px]`}></span>
                            Vestibulum auctor dapibus neque.
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};