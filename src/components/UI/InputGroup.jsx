import React from 'react';

export default function InputGroup(props) {
  return (
    <section className='grid grid-cols-3 full-border'>
      <input
        type='text'
        placeholder='Key'
        className='focus:outline-none text-xs'
        value={props.keyValue}
      />
      <input
        type='text'
        placeholder='Value'
        className='focus:outline-none text-xs'
        value={props.value}
      />
      <input
        type='text'
        placeholder='Description'
        className='focus:outline-none text-xs'
      />
    </section>
  );
}
