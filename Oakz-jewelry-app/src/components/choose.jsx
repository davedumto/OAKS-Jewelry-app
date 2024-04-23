import React from 'react';
import './choose.css'
import Oakz from '../../public/images/OAKZ.svg'
import Vector from '../../public/images/ic_outline-gpp-good.svg'
import HandShake from '../../public/images/mdi_handshake-outline.svg'

function Choose() {
  return (
    <div className='w-full flex justify-center items-center py-10 px-10 font-bienvenido'>
        <div className='grid grid-cols-2 justify-between gap-5 p-2'>
            <div className='flex flex-row justify-center items-center px-5 gap-3 background-img text-[48px] leading-[56px]'>
                <span className='text-ghost'>Why </span>
                <span className='text-ghost'>Choose</span>
                <img src={Oakz}/>
                <span className='text-brownbg'>Jewellry</span>
            </div>
            <div className='grid grid-cols-2 gap-4'>
                <div className='flex flex-col justify-end items-end bg-[#172D1333]/20 rounded-xl gap-4 py-5 px-6'>
                    <div className='flex items-center justify-center gap-2'>
                        <h1 className='text-3xl leading-9 text-brownbg'>Top Quality</h1>
                        <div className='w-[50px] h-[50px] rounded-full bg-green text-[#FEFEF3] flex justify-center items-center'><img src={Vector}/></div>
                    </div>
                    <p className='leading-[18px] text-green'>
                    Oakz Jewelry is the sure plug for all quality accessories 
                    you need to beautify and adorn yourself for all your events. 
                    We have all specifications needed for you to look good.
                    </p>
                </div>
                <div className='flex flex-col justify-end items-end bg-[#172D1333]/20 rounded-xl gap-4 py-5 px-6'>
                    <div className='flex items-center gap-2'>
                        <h1 className='text-3xl leading-9 text-brownbg'>Reliable</h1>
                        <div className='w-[50px] h-[50px] rounded-full bg-green text-[#FEFEF3] flex justify-center items-center'><img src={HandShake}/></div>
                    </div>
                    <p className='leading-[18px] text-green'>
                    You can trust us to pull up for you at your time of need with in-time delivery,
                     efficient and clean packaging always. It is always as you see it.
                    </p>
                </div>
                <div className='flex flex-col justify-end items-end bg-[#172D1333]/20 rounded-xl gap-4 py-5 px-6'>
                    <div className='flex items-center gap-2'>
                        <h1 className='text-3xl leading-9 text-brownbg'>Top Quality</h1>
                        <div className='w-[50px] h-[50px] rounded-full bg-green text-[#FEFEF3] flex justify-center items-center'><img src={Vector}/></div>
                    </div>
                    <p className='leading-[18px] text-green'>
                    Oakz Jewelry is the sure plug for all quality accessories 
                    you need to beautify and adorn yourself for all your events. 
                    We have all specifications needed for you to look good.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Choose