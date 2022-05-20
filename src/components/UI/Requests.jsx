import React from 'react';

export default function Requests({ requests }) {
  return (
    <section className='flex mb-5'>
      <section>
        {requests &&
          requests.map((req) => {
            return (
              <div
                className={
                  'py-2 px-5 cursor-pointer inline-block ' +
                  (req.active ? 'tab-active' : 'tab-inactive')
                }
              >
                <span className='mr-2 text-[8px]'>{req.type}</span>
                <span key={req.id} className='text-sm'>
                  {req.title}
                </span>
              </div>
            );
          })}
      </section>
      <div
        className='grow p-0 m-0'
        style={{ borderBottom: '1px solid #ddd', height: '43px' }}
      ></div>
    </section>
  );
}
