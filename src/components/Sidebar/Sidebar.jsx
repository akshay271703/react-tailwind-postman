import React from 'react';
import { FaPlus, FaFilter, FaUser } from 'react-icons/fa';
import { COLLECTIONS } from '../../data/dummy';
import Collection from './Collection';
import Options from './Options';
export default function Sidebar() {
  return (
    <div
      className='h-screen border-2 bg-zinc-50 '
      style={{
        maxWidth: '350px',
        minWidth: '350px',
      }}
    >
      <header className='flex items-center p-4 justify-between'>
        <section>
          <FaUser className='inline' />
          <span className='text-md mx-4'>My Workspace</span>
        </section>
        <section>
          <button className=' w-16 bg-stone-200 mx-2 px-2 py-1 rounded-md text-xs'>
            New
          </button>
          <button className='w-16 bg-stone-200 px-2 py-1 rounded-md text-xs'>
            Import
          </button>
        </section>
      </header>

      <section
        className=''
        style={{
          display: 'grid',
          gridTemplateColumns: '3fr 7fr',
        }}
      >
        <Options />
        <section>
          <div className='collection-options flex text-sm py-5 px-2'>
            <FaPlus className='mr-2 cursor-pointer' />
            <FaFilter className='cursor-pointer' />
          </div>
          {COLLECTIONS.map((element) => {
            return <Collection key={element} title={element} />;
          })}
        </section>
      </section>
    </div>
  );
}
