import React, { useState } from 'react';
import {
  dummyBody,
  dummyHeaders,
  dummyParams,
  dummyRequests,
  REQUEST_TYPES,
} from '../../data/dummy';
import InputSection from '../UI/InputSection';
import Requests from '../UI/Requests';
import Response from '../UI/Response';

export default function Feature() {
  const [reqOptions, setReqOptions] = useState(['Params', 'Headers', 'Body']);
  const [currentReqOption, setCurrentReqOption] = useState([reqOptions[0]]);
  const [reqParams, setReqParams] = useState(dummyParams);
  const [reqHeaders, setReqHeaders] = useState(dummyHeaders);
  const [reqBody, setReqBody] = useState(dummyBody);
  const [reqFolders, setReqFolders] = useState(dummyRequests);

  function handleReqOption(option) {
    setCurrentReqOption(option);
  }

  return (
    <div className='p-5 w-[100%] relative'>
      <section>
        <Requests requests={reqFolders} />
      </section>
      <section className='header flex justify-between items-center'>
        <section>
          <h1>Folder / Request Details</h1>
        </section>
        <section>
          <button>Save</button>
        </section>
      </section>

      {/* Actual Request Body */}
      <section className='my-4 flex'>
        <select className='w-24 cursor-pointer bg-stone-100 rounded-none p-2 border-2 border-transparent focus:bg-white focus:border-2 focus:border-gray-100'>
          {REQUEST_TYPES.map((type) => {
            return (
              <option key={type} value={type}>
                {type}
              </option>
            );
          })}
        </select>
        <input
          type='text'
          className='w-[100%] bg-stone-100 border-2 border-transparent ml-1 focus:outline-none pl-5 focus:bg-white focus:border-2 focus:border-gray-100'
        />
        <button className='bg-blue-600 text-white w-28 rounded-md ml-4'>
          Send
        </button>
      </section>

      <section>
        {reqOptions.map((option) => {
          return (
            <span
              key={option}
              className='mr-4 mb-2 inline-block cursor-pointer hover:text-green-500'
              onClick={() => handleReqOption(option)}
            >
              {option}
            </span>
          );
        })}
        <p className='text-gray-400 text-sm mb-2'>{currentReqOption}</p>
      </section>

      <section id='request-data'>
        {currentReqOption === 'Params' && <InputSection list={reqParams} />}
        {currentReqOption === 'Headers' && <InputSection list={reqHeaders} />}
        {currentReqOption === 'Body' && <InputSection list={reqBody} />}
      </section>

      <section>
        <Response />
      </section>
    </div>
  );
}
