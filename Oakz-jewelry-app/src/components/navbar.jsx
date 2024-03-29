import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';

function Navbar() {
  return (
    <div className='flex flex-row justify-between items-center py-8 px-4'>
        <div>
            <h1 className='text-6xl text-brownbg font-normal'>OAKZ</h1>
        </div>
        <div>
            <div className="flex justify-center items-center gap-4">
                <div className='px-[px] py-[1px] h-[32px] flex flex-row gap-1 hover:cursor-text rounded-[50px] bg-transparent border-2 border-brownbg focus-within:border-brownbg focus-within:border-2 active:border-brownbg items-center'>
                        <input type="search" className='py-1 px-3 text-sm w-full active:border-2 focus:text-[#04020099]/90 focus:border-none outline-none bg-inherit h-full  text-beige' placeholder='Search'  />
                        {/* <button className="absolute top-0 right-0 mr-3 mt-1 p-1 text-gray-500 hover:text-gray-700 focus:outline-none" onClick="document.querySelector('input[type=search]').value = ''">
                          <svg className="h-[5px] w-[5px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                          </svg>
                        </button> */}
                        <div className='cursor-pointer bg-brownbg p-[2px] rounded-[50px]'>
                            <SearchIcon fontSize='medium'/>   
                            
                        </div>  
                </div>
                <div className='relative p-1'>
                    <span><LocalGroceryStoreOutlinedIcon/></span>
                    <div className='w-[10px] h-[10px] bg-[#BB2929] absolute top-0 right-0 rounded-full'></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar