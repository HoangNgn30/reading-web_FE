import React from 'react';

const Back = () => {
    return (
        <div className="relative bg-gradient-to-r from-blue-100 to-blue-300 h-screen flex items-center justify-center z-1000">
            <svg
                className="absolute inset-0 w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 800 600"
                fill="none"
                stroke="white"
                strokeWidth="2"
                opacity="0.5"
            >
                <circle cx="100" cy="100" r="2"></circle>
                <circle cx="120" cy="110" r="2"></circle>
                <circle cx="140" cy="120" r="2"></circle>
                {/* Add more circles to create the full wave effect */}
            </svg>

            <div className="relative text-center z-10">
                <h1 className="text-4xl font-bold text-blue-900">Intelligence for Tomorrow, Today!</h1>
                <p className="text-lg text-blue-900 mt-4">Bringing tomorrow's AI solutions to today's challenges</p>
                <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-full">Schedule a Demo</button>
            </div>
        </div>
    );
};

export default Back;
