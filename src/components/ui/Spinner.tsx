import React from 'react';

// Define the type for the component's props using an interface
interface SpinnerProps {
  text?: string; // Optional text to display below the spinner
}

// Create the component using React.FC (Functional Component) and type its props
const Spinner: React.FC<SpinnerProps> = ({ text }) => {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <div
        className="
          w-12 h-12 
          border-4 border-t-4 border-gray-200 border-t-blue-600 
          rounded-full 
          animate-spin
        "
      ></div>
      {text && <p className="mt-3 text-lg text-gray-700">{text}</p>}
    </div>
  );
};

export default Spinner;