import React from 'react';

const CountBox = ({ count, label, bg, last = false }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center py-8 shadow-lg ${bg} center transition-transform md:col-span-1 ${
        last ? 'col-span-2' : ''
      }`}
    >
      <h2 className="text-3xl font-bold text-white">{count}+</h2>
      <p
        className="text-white
            "
      >
        {label}
      </p>
    </div>
  );
};

export default CountBox;
