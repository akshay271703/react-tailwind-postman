import React from 'react';
import { SIDEBAR_ELEMENTS } from '../../data/dummy';

const Options = () => {
  return (
    <section className='d-flex flex-col border-r-2 border-gray-300 '>
      {SIDEBAR_ELEMENTS.map((element, index) => {
        return (
          <section
            className='py-4 d-flex flex-col justify-center cursor-pointer text-center text-xs hover:bg-stone-200'
            key={index}
          >
            <p>{element}</p>
          </section>
        );
      })}
    </section>
  );
};

export default Options;
