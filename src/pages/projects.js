import React from 'react'
import Image from 'next/image'
import terpexchange from '../../public/terpexchange.png'

const projects = () => {
  return (
    <>
    <br />
    <div className='flex font-serif px-[3rem] w-[100%] overflow-y-scroll'>
              <div>
                  <p className=' text-light text-[100%]'>
                    <p className='text-[black] text-[150%]'>Projects</p>
                    <hr />
                    <div className='flex flex-row pt-2'>
                      <Image className='w-[300px] h-[150px]' src={terpexchange} alt='umd' />
                      <div className='text-light pl-2'>
                          <p><b>TerpExchange</b></p>
                          <p><i>React Native, Supabase</i></p>
                          <ul>
                            <li>Developed a mobile app to create a safe and secure community where UMD students and staff can buy and sell goods</li>
                          </ul>
                          <p><a href="" className='text-[#0000EE] underline'>[Code]</a></p>
                      </div>
                    </div>
                    &nbsp; 
                  </p>
              </div>
      </div>
      </>
  )
}

export default projects