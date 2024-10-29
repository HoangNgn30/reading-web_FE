/* eslint-disable react/prop-types */
import { FaArrowRight } from 'react-icons/fa';

function SimpleGrid({ listOb }) {
    return (
        <div className="scrollbar-custom overflow-x-auto flex flex-col px-24">
            <button className="flex items-center text-black font-medium text-base md:self-end self-center mb-8">
                Tìm hiểu thêm
                <span className="flex items-center ml-2 bg-red-600 text-white py-1 font-bold px-4 text-center content-center rounded-full">
                    <FaArrowRight className="ml-1" />
                </span>
            </button>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-8 gap-y-8">
                {listOb.map((ob, index) => (
                    <div key={index} className="flex-shrink-0 border border-[#E2E4E9] rounded-lg">
                        <div className="bg-white rounded-lg flex flex-col items-center">
                            <div className="w-full">
                                <img src={ob.image} className="w-full rounded-t-lg h-64 object-cover" alt="member" />
                            </div>
                            <div className="p-3 h-40 text-[#172554]">
                                <p className="text-lg font-medium">{ob.content}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SimpleGrid;
