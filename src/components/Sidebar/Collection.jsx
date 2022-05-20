import React from 'react';

import { FaChevronRight } from 'react-icons/fa';
export default function Collection(props) {
  return (
    <div className='flex items-center cursor-pointer px-2 py-1 hover:bg-stone-200'>
      <span>
        <FaChevronRight className='inline text-xs' />
      </span>
      <span className='mt-1 ml-2 text-xs'>{props.title}</span>
    </div>
  );
}
