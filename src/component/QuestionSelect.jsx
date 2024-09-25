import React from 'react';

const QuestionSelect = ({ question, value, onChange }) => {
  return (
    <label className="block w-full font-bold text-gray-700">
      {question}
      <div className="relative mt-2">
        <select
          value={value}
          onChange={onChange}
          className="block appearance-none w-full bg-white border border-gray-300 text-gray-400 py-3 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:border-green-500"
        >
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 border-l border-gray-400">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
        </div>
      </div>
    </label>
  );
};

export default QuestionSelect;
