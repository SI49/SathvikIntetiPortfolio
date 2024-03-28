import React from 'react'
// import umd from '../../public/umd.png'
import Reliance from '../../public/Reliance.jpg'
import MultiMesher from '../../public/MultiMesh.png'
import Image from 'next/image'

const research = () => {
  return (
  <>
  <br />
  <div className='flex font-serif px-[3rem] pl-[3rem] w-[100%] overflow-y-scroll'>
              <div>
                  <div className=' text-light text-[100%]'>
                    <p className='text-[black] text-[150%]'>Research</p>
                    <hr />
                    <div className='flex flex-row pt-2'>
                      <Image className='w-[250px] h-[125px]' src={MultiMesher} alt='umd' />
                      <div className='text-light pl-2'>
                          <p><b>Multi-Mesher: Diffusion Driven 2D to 3D Mesh Reconstruction</b></p>
                          <p>Sai Teja Gilukara, Shyamsundar Prabhakar Indra, <u>Sathvik Inteti</u>, Andrew Zhong</p>
                          <p><a href="https://drive.google.com/file/d/1DDLVJJj9tIO-mXEQ0hQIa4bus_Q-TO8v/view?usp=sharing" className='text-[#0000EE] underline'>[Paper (PDF)]</a> | <a href="" className='text-[#0000EE] underline'>[Code]</a></p>
                      </div>
                    </div>
                    &nbsp; 
                    <div className='flex flex-row'>
                      <Image className='w-[250px]' src={Reliance} alt='umd' />
                      <div className='text-light pl-2'>
                          <p><b>Reliance of Object Detection Models on Background Context</b></p>
                          <p>Daniel Ekpo, Jacob Clements, <u>Sathvik Inteti</u>, Sukriti Paul, Tanmay Haldankar, Zack Sating</p>
                          <p><a href="https://drive.google.com/file/d/1nTvEK3OEATAA0YreCxjT2e8CJyjkHye8/view?usp=sharing" className='text-[#0000EE] underline'>[Paper (PDF)]</a> | <a href="https://github.com/daniekpo/cmsc828i_group_project" className='text-[#0000EE] underline'>[Code]</a></p>
                      </div>
                    </div>
                  </div>
              </div>
  </div>
  </>
  )
}

export default research