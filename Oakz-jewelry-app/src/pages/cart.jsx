import React from 'react';
import Footer from '../components/footer';
import Oakz from '../../public/images/OAKZ(1).svg';
import LocalGroceryStoreTwoToneIcon from '@mui/icons-material/LocalGroceryStoreTwoTone';
import Return from '../../public/images/return-icon.svg';
import CartPage from '../components/cartpage';
import ArrowRoundedBack from "/images/mingcute.svg";
import { Link } from 'react-router-dom';

export default function Cart() {

  return (
    <>
      <div className=' sm:py-[40px] py-[30px] sm:px-[70px] px-[16px] '>
        <div className='flex flex-col gap-[22px]'>
          <div className='flex justify-between items-center'>
            <Link to="/">
             <img src={Oakz} alt="Oakz-logo" />
            </Link>

            <span>
              <LocalGroceryStoreTwoToneIcon fontSize="medium" />
            </span>
          </div>
          <div className='bg-beige py-3 sm:px-8 px-4 flex justify-between items-center'>
            <p className='font-bienvenido sm:text-3xl text-2xl leading-[37.44px]'>Cart</p>
            <Link to={"/"}>  
              <div className='flex gap-1 sm:gap-2 items-center '>
              
                {""}
                <span><img src={ArrowRoundedBack} className=''/></span>
                <span className='sm:text-3xl text-xl leading-[37.44px] text-green font-bienvenido'>Go back</span>
              
              </div>
            </Link>
          </div>
        </div>
        <CartPage/>
      </div>
      <Footer/>
    </>
  );
}
