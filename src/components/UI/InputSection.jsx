import React from 'react';
import InputGroup from './InputGroup';

export default function InputSection({ list }) {
  return (
    <React.Fragment>
      <section className='grid grid-cols-3 full-border'>
        <span className='text-sm font-bold text-gray-500'>KEY</span>
        <span className='text-sm font-bold text-gray-500'>VALUE</span>
        <span className='text-sm font-bold text-gray-500'>DESCRIPTION</span>
      </section>
      {list.map((el) => {
        return (
          <section className='' key={el.id}>
            <InputGroup keyValue={el.key} value={el.value} />
          </section>
        );
      })}
      <InputGroup key={''} value={''} />
    </React.Fragment>
  );
}
