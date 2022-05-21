import React, { useState } from 'react';
import { dummyRequests } from '../../data/dummy';
import Requests from '../UI/Requests';

const Folder = () => {
  const [reqFolders, setReqFolders] = useState(dummyRequests);

  return (
    <div>
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
    </div>
  );
};

export default Folder;
