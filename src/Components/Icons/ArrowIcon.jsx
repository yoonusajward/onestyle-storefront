import React from 'react';

const paths = {
  'up-right': 'M6 18 18 6M6 6h12v12',
  right: 'M4 12h16m-6-6 6 6-6 6',
  left: 'M20 12H4m6-6-6 6 6 6',
};

// Decorative: the surrounding link or button provides the accessible name.
export default function ArrowIcon({ direction = 'up-right', size = 20, className = '' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={'arrow-icon ' + className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d={paths[direction] || paths['up-right']} />
    </svg>
  );
}
