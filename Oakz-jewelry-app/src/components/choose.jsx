import React from 'react';
import './choose.css';
import Vector from '/images/ic_outline-gpp-good.svg';
import HandShake from '/images/mdi_handshake-outline.svg';
import WhyChoose from '/images/Whychoose.svg';

// Card component to display each feature
const Card = ({ title, iconSrc, description }) => (
  <div className=' text-center flex flex-col justify-end  bg-[#172D1333]/20 rounded-xl gap-4 py-5 px-6'>
    <div className='flex items-center justify-center gap-2'>
      <h1 className='text-3xl leading-9 text-brownbg'>{title}</h1>
      <div className='w-[50px] h-[50px] rounded-full bg-green text-[#FEFEF3] flex justify-center items-center'>
        <img src={iconSrc} alt={title} />
      </div>
    </div>
    <p className='leading-[18px] text-green'>
      {description}
    </p>
  </div>
);

function Choose() {
  // Data array containing the info for each card
  const cardsData = [
    {
      title: 'Top Quality',
      iconSrc: Vector,
      description: 'Oakz Jewelry is the sure plug for all quality accessories you need to beautify and adorn yourself for all your events. We have all specifications needed for you to look good.'
    },
    {
      title: 'Reliable',
      iconSrc: HandShake,
      description: 'You can trust us to pull up for you at your time of need with in-time delivery, efficient and clean packaging always. It is always as you see it.'
    },
    {
      title: 'Top Quality',
      iconSrc: Vector,
      description: 'Oakz Jewelry is the sure plug for all quality accessories you need to beautify and adorn yourself for all your events. We have all specifications needed for you to look good.'
    }
  ];

  return (
    <div className='pt-0 px-3  pb-5 w-full flex justify-center items-center lg:py-10 md:px-10 font-bienvenido'>
      <div className='grid flex-col lg:grid-cols-2 justify-between gap-5 p-2'>
        <div className='w-[191px] md:w-full  lg:w-full'>
            <h1 className='font-[400] text-[32px] md:text-[50px] lg:hidden'>Why choose <span className='text-orange-600'>Oaks Jewelry</span></h1>
          <img className='hidden lg:block ' src={WhyChoose} alt="Why Choose Us" />
        </div>
        <div className='  flex-col flex justify-between gap-4 lg:grid lg:grid-cols-2 lg:gap-4'>
          {cardsData.map((card, index) => (
            <Card key={index} title={card.title} iconSrc={card.iconSrc} description={card.description} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Choose;