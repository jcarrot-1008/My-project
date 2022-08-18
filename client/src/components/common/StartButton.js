import React from 'react';
import { SparklesIcon } from '@heroicons/react/solid';
import Link from 'next/link';

const StartButton = props => {
  const { destination, text } = props;

  return (
    <Link href={destination}>
      <button
        className="bg-blue-500 
    hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex flex-row"
      >
        <SparklesIcon className="h-6 w-6" />
        {text}
      </button>
    </Link>
  );
};

export default StartButton;
