import React from 'react'
import { useAuth } from '../store/auth'
import { NavLink } from 'react-router-dom'
import { Fade } from 'react-reveal';


const ServiceCard = () => {

    const handleTop = () => {
        window.scrollTo(0, 0);
    };
    const { services } = useAuth();
    return (
        <>
            <div className="bg-[#eef5ff] dark:bg-slate-900 dark:text-white duration-300 w-full">
                <Fade duration={1000} distance="30px" bottom>
                    <section className="container mx-auto p-2 max-w-[1290px]">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mx-auto pt-8 pb-8">
                            {Array.isArray(services) && services.map((curElem, index) => {
                                const { price, description, service, provider, thumbnailImage, readMore, formsLink, discountPrice } = curElem;
                                console.log(curElem)
                                return (
                                    <div key={index} className="bg-gray-100 dark:bg-slate-800 rounded-sm overflow-hidden shadow-md transform transition-transform duration-300 ease-in-out border border-2-black p-1 text-white">
                                        <div className="mb-4 overflow-hidden">
                                            {/* Image */}
                                            <img
                                                src={thumbnailImage}
                                                alt="our service"
                                                className="w-full h-auto transform hover:scale-110 transition-transform duration-300 ease-in-out"
                                            />
                                        </div>
                                        <div className="p-2">
                                            <div className="grid grid-cols-2 mb-1">
                                                {/* Provider and Price */}
                                                <p className="font-semibold font-monts text-[18px] text-violet-700 dark:text-cyan-500">{provider}</p>
                                                <div className='flex justify-end gap-2 items-center'>
                                                    <p className="text-right font-semibold text-[13px] line-through tracking-wide font-monts text-black dark:text-black opacity-80 bg-gray-300 dark:bg-gray-400 rounded-full px-2 pt-[3px]">{price}</p>
                                                    <p className="text-right font-semibold text-[20px] tracking-wide font-monts text-blue-500 dark:text-white">{discountPrice}/-</p>
                                                </div>
                                            </div>
                                            {/* <div className='flex justify-between pb-2'>
                                                <p className="text-right font-semibold text-[13px] tracking-wide font-monts text-blue-500 dark:text-white">Discount 50%</p>
                                                <p className="text-right font-semibold text-[13px] tracking-wide font-monts text-blue-500 dark:text-white">Price {discountPrice}</p>
                                            </div> */}

                                            {/* Service Title and Description */}
                                            <h2 className="text-2xl font-medium mb-2 font-fira text-slate-900 dark:text-[#a3a9b3] pt-4">{service}</h2>
                                            <p className='text-slate-900 dark:text-[#B6BBC4] text-[15px] pb-4'>{description}</p>
                                        </div>

                                        <div className='flex gap-1 pb-1'>
                                            <NavLink to={readMore} onClick={handleTop} className="w-full rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-purple-600 active:shadow-none shadow-lg bg-gradient-to-tr from-blue-600 to-blue-500 border-blue-700 text-white">
                                                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                                                <span className="relative font-monts uppercase text-[14px]">Read More</span>
                                            </NavLink>



                                            <NavLink to={formsLink} onClick={handleTop} className="w-full rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-purple-600 active:shadow-none shadow-lg bg-gradient-to-tr from-purple-600 to-purple-500 border-purple-700 text-white">
                                                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                                                <span className="relative font-monts uppercase text-[14px]">Buy Now</span>
                                            </NavLink>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                </Fade>
            </div>
        </>
    )
}

export default ServiceCard
