import React from 'react';
import MailIcon from '@mui/icons-material/Mail';
import SearchIcon from '@mui/icons-material/Search';
import PhoneEnabledOutlinedIcon from '@mui/icons-material/PhoneEnabledOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Oakz from '../../public/images/OAKZ.svg'
import './footer.css'

export default function Footer() {
  
  const time = new Date().getFullYear()
    
  return (
    
    <>
    <div className='w-full py-5 px-6 font-bienvenido bg-green flex flex-col gap-3 '>
        <div className='flex flex-col justify-between gap-2 w-full px-4 background'>
          <div className=' '>
              <div className="flex flex-row justify-between pt-2">
                  <div className='flex flex-col gap-2'>
                  <span className='text-6xl text-brownbg  font-normal'>
                  <img src={Oakz} alt="" />
              </span>
                    <p className='leading-[18px] font-bienvenido text-beige'>At OAKZ, everyone is family. <br/>
                      We strive our best to make sure you look your best</p>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <h3 className='text-beige leading-9 text-[32px]  font-normal'>What do you need?</h3>
                    <div className=' py-[1px] h-[34px] flex flex-row justify-end gap-1 hover:cursor-text rounded-[50px] bg-transparent border border-brownbg focus-within:border-brownbg focus-within:border active:border-brownbg items-center'>
                      <input type="search" className='py-1 px-3 text-sm w-full active:border focus:text-beige focus:border-none outline-none bg-inherit h-full  text-beige' placeholder='Search'  />
                      {/* <button className="absolute top-0 right-0 mr-3 mt-1 p-1 text-gray-500 hover:text-gray-700 focus:outline-none" onClick="document.querySelector('input[type=search]').value = ''">
                        <svg className="h-[5px] w-[5px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                      </button> */}
                      <span className='flex justify-center items-center cursor-pointer w-[30px] h-[30px] bg-brownbg p-[6px] my-[2px] mx-[1px] rounded-[50px]'><SearchIcon fontSize='medium'/></span>
                    </div>
                  </div>
              </div>
              <div className='flex flex-row  justify-end gap-2 items-center pt-2'>
                  <button className='bg-beige py-2 px-2 w-[180px] rounded-3xl flex justify-center items-center'><a href='mailto:nnamaninwanne@gmail.com'><span className='px-1 leading-3'><MailIcon fontSize='small'/></ span >mail@gmail.com</a></button>
                  <button className='bg-beige rounded-[50%] px-2 py-[6px]'>
                    <a><PhoneEnabledOutlinedIcon fontSize='small'/></a>
                  </button>
                  <button className='bg-beige rounded-[50%] px-2 py-[6px]'>
                    <a><WhatsAppIcon fontSize='small' /></a>
                  </button>
              </div>
          </div>
          <hr/>
          <div className='flex justify-center gap-10'>
            <div>
              <p className='leading-[18.72px] text-[#FFFFFF]'> &copy; {time} - OKAZ JEWELLRY</p>
            </div>
            <div>
              <p className='leading-[18.72px] text-[#FFFFFF]/30'><a className='hover:underline' href="">Terms</a>  •  <a className='hover:underline'  href="">Privacy</a></p>
            </div>
          </div>
        </div>

    </div>
    </>
  )
}
