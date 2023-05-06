import { useState } from 'react';

function Collapse({ title, children }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className='bg-white p-4 rounded-lg w-full md:w-1/2 mx-auto mb-2'>
      <button onClick={() => setIsExpanded(!isExpanded)} className='w-full font-bold'>
        {title} {isExpanded ? '-' : '+'}
      </button>
      <div className={`overflow-hidden transition-height duration-300 ease-out ${isExpanded ? 'h-auto mt-4 mb-2' : 'h-0'}`}>
        {children}
      </div>
    </div>
  );
}

export default Collapse;
