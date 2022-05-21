import React, { useState } from 'react';
import requestHTTP from '../../api/apiHandler';
import {
  dummyBody,
  dummyHeaders,
  dummyParams,
  REQUEST_TYPES,
} from '../../data/dummy';
import InputSection from '../UI/InputSection';
import Response from '../UI/Response';
import Folder from './Folder';

export default function Feature() {
  const [reqOptions, setReqOptions] = useState(['Params', 'Headers', 'Body']);
  const [currentReqOption, setCurrentReqOption] = useState([reqOptions[0]]);
  const [reqParams, setReqParams] = useState(dummyParams);
  const [reqHeaders, setReqHeaders] = useState(dummyHeaders);
  const [reqBody, setReqBody] = useState(dummyBody);
  const [reqURL, setReqURL] = useState('');
  const [responseJSON, setResponseJSON] = useState({});
  const [reqMethod, setReqMethod] = useState('GET');
  function handleReqOption(option) {
    setCurrentReqOption(option);
  }

  function handleURLChange(event) {
    setReqURL(event.target.value);
  }

  function handleSetMethod(event) {
    setReqMethod(event.target.value);
  }

  async function handleHTTPCall() {
    const headers = {};
    const params = {};
    reqHeaders.forEach((item) => {
      headers[item.key] = item.value;
    });
    reqParams.forEach((item) => {
      params[item.key] = item.value;
    });
    const time1 = new Date().getTime();
    try {
      const result = await requestHTTP(
        reqMethod.toLowerCase(),
        reqURL,
        params,
        headers
      );
      const time2 = new Date().getTime();
      setResponseJSON({
        data: result.data,
        status: result.status,
        time: time2 - time1,
      });
    } catch (error) {
      const time2 = new Date().getTime();
      setResponseJSON({ ...error.response, time: time2 - time1 });
    }
  }

  return (
    <div className='p-5 w-[100%] relative'>
      <Folder />
      {/* Actual Request Body */}
      <section
        className='my-4 flex'
        value={reqMethod}
        onChange={handleSetMethod}
      >
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
          value={reqURL}
          onChange={handleURLChange}
        />
        <button
          className='bg-blue-600 text-white w-28 rounded-md ml-4'
          onClick={handleHTTPCall}
        >
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
        <Response json={responseJSON} />
      </section>
    </div>
  );
}
