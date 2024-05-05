import React, { useState, useEffect, useRef } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import Oakz from '../../public/images/OAKZ.svg';

function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 640);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMobileView) {
      const handleClickOutside = (event) => {
        if (searchRef.current && !searchRef.current.contains(event.target)) {
          setIsSearchOpen(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isMobileView]);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <div className='flex flex-row sm:justify-between font-bienvenido items-center sm:py-8 sm:px-4 pt-2 pb-9 w-full '>
      {/* Block for larger screens -  */}
      <div className='hidden sm:flex justify-center items-center gap-4'>
        <div>
          <img src={Oakz} alt='OAKZ' className='mr-4' />
        </div>
        <div className='py-[2px] h-[34px] flex flex-row gap-1 hover:cursor-text rounded-[50px] bg-transparent border border-green focus-within:border-green focus-within:border active:border-green items-center'>
          <input
            type='search'
            className='py-1 px-3 text-sm w-full active:border-2 focus:text-[#04020099]/90 focus:border-none outline-none bg-inherit h-full text-beige sm:w-56'
            placeholder='Search'
          />
          <div className='w-[30px] h-[30px] cursor-pointer bg-green my-[1px] mx-[2px] p-[2px] rounded-[50px] text-white'>
            <SearchIcon fontSize='medium' />
          </div>
        </div>
        <div className='relative p-1'>
          <span>
            <LocalGroceryStoreOutlinedIcon />
          </span>
          <div className='w-[10px] h-[10px] bg-[#BB2929] absolute top-0 right-0 rounded-full'></div>
        </div>
      </div>

      {/* Block for mobile - Search Icon toggles visibility of Search Bar */}
      <div ref={searchRef} className='flex justify-between items-center gap-4 sm:hidden w-full'>
      <div>
          {isSearchOpen ? null : <img src={Oakz} alt='OAKZ' className='mr-4' />}
        </div>
        <div className='flex gap-2'>
            <div className='py-[2px] h-[34px] flex flex-row gap-1 hover:cursor-text rounded-[50px] bg-transparent border border-green focus-within:border-green focus-within:border active:border-green items-center'>
              <input
                type='search'
                className={`py-1 px-3 text-sm w-full active:border-2 focus:text-[#04020099]/90 focus:border-none outline-none bg-inherit h-full text-beige ${isSearchOpen ? 'block' : 'hidden'} sm:w-56`}
                placeholder='Search'
              />
              <div className={`w-[30px] h-[30px] cursor-pointer bg-green my-[1px] mx-[2px] p-[2px] rounded-[50px] text-white`} onClick={toggleSearch}>
                <SearchIcon fontSize='medium' />
              </div>
            
            </div>
            <div className='relative p-1'>
                <span><LocalGroceryStoreOutlinedIcon/></span>
                <div className='w-[10px] h-[10px] bg-[#BB2929] absolute top-0 right-0 rounded-full'></div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
