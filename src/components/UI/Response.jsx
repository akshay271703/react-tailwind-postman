import React from 'react';
import ReactJson from 'react-json-view';
import reqMap from '../../api/reqMap';

export default function Response({ json }) {
  const responseMap = reqMap;
  return (
    <div className='response-window'>
      <section className='flex justify-between items-center pr-5'>
        <h1 className='text-lg text-zinc-400 px-3 py-2'>Response</h1>
        {json && json.status && responseMap[json.status] && (
          <section className={'text-xs ' + `${responseMap[json.status].class}`}>
            <span>Status: {json.status ? json.status : '200'} -</span>
            <span className='mx-1 '>
              {responseMap[json.status].description}
            </span>
            <span>Time - {json.time}ms </span>
          </section>
        )}
      </section>

      {json && (
        <section className='p-5'>
          <ReactJson src={json.data ? json.data : json} />
        </section>
      )}
    </div>
  );
}
