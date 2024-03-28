import React from 'react'
import Image from 'next/image'
import liquidnet from '../../public/liquidnet.png'
import umd from '../../public/umd.png'

const experience = () => {
  return (
    <div className="flex flex-col font-serif px-[3rem] w-[100%]">
                <div className='px-2'>
                    <p className="text-[black] text-[150%]">Work Experience</p>
                    <hr />
                        <div className='flex flex-row pt-2'>
                        <Image className='w-[50px] h-[50px] rounded-[50%]' src={liquidnet} alt='liquidnet' />
                        <div className='inline text-light pl-2'>
                            <p>Software Engineer Internship</p>
                            <a href='https://www.liquidnet.com/' target="_blank" className='text-[#0000EE] underline'>Liquidnet</a>
                            <p>New York, NY</p>
                        </div>
                        </div>
                        <br />

                    <p className="text-[black] text-[150%]">Education</p>
                    <hr />
                    <div className='flex flex-row pt-2'>
                        <Image className='w-[50px] h-[50px] rounded-[50%]' src={umd} alt='umd' />
                        <div className='text-light pl-2'>
                            <p>M.S. in Computer Vision with Thesis</p>
                            <a href='https://cmns.umd.edu/graduate' target="_blank" className='text-[#0000EE] underline'>University of Maryland, College Park</a>
                            <p>Sept. 2023 - May 2024 | GPA: 4.0</p>
                            <p>Advisor: <a href='https://www.cs.umd.edu/~nayeem/' target="_blank" className='text-[#0000EE] underline'>Dr. Mohammed Nayeem Teli</a></p>
                        </div>
                    </div>
                    <br />
                    <div className='flex flex-row'>
                        <Image className='w-[50px] h-[50px] rounded-[50%]' src={umd} alt='umd' />
                        <div className='text-light pl-2'>
                            <p>B.S. in Computer Science with Minor in Statistics</p>
                            <a href='https://undergrad.cs.umd.edu/' target="_blank" className=''>University of Maryland, College Park</a>
                            <p>Sept. 2020 - May 2023 | GPA: 3.736</p>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default experience