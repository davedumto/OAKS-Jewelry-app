import React from 'react';
import Footer from '../components/footer';
import Oakz from '../../public/images/OAKZ(1).svg';
import LocalGroceryStoreTwoToneIcon from '@mui/icons-material/LocalGroceryStoreTwoTone';
import Return from '../../public/images/return-icon.svg';
import CartPage2 from '../components/cartpage2';

export default function Cart() {

  return (
    <>
      <div className=' sm:py-[40px] py-[30px] sm:px-[70px] px-[20px]'>
        <div className='flex flex-col gap-[22px]'>
          <div className='flex justify-between items-center'>
            <img src={Oakz} alt="Oakz-logo" />
            <span>
              <LocalGroceryStoreTwoToneIcon fontSize="medium" />
            </span>
          </div>
          <div className='bg-beige py-3 sm:px-8 px-6 flex justify-between items-center'>
            <p className='font-bienvenido sm:text-3xl text-2xl leading-[37.44px]'>Cart</p>
            <div className='flex gap-2 items-center'>
              <span><img src={Return}/></span>
              <span className='sm:text-3xl text-2xl leading-[37.44px] text-green font-bienvenido'>Go back</span>
            </div>
          </div>
        </div>
        <CartPage2/>
      </div>
      <Footer/>
    </>
  );
}
