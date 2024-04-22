import React from 'react';

const IndividualInfo = ({ points }) => {
    return (
        <div className="bg-[#eef5ff] dark:bg-slate-900 duration-300 w-full mx-auto px-4 py-6">
            {/* <h2 className="text-3xl font-bold mb-4">Effective Use Of LinkedIn</h2> */}
            <div className="max-w-[1290px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 mx-auto">
                {points.map(point => (
                    <div key={point.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1">
                        <h3 className="text-3xl font-bold mb-4 font-karla dark:text-violet-500 text-violet-500">{point.topic}</h3>
                        <ul>
                            {point.points.map((item, index) => (
                                <li key={index} className="mb-2 text-[18px] font-monts dark:text-white text-black">🏋️‍♂️ {item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IndividualInfo;
