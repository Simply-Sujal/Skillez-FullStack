import React, { useState } from 'react'
import { BiChevronDown } from 'react-icons/bi'
import { motion, AnimatePresence } from "framer-motion"

const Accordian = ({ question, answer }) => {
    const [show, setShow] = useState(false);

    return (
        <>
            {/* Question part  */}
            <div onClick={() => setShow(!show)} className='flex justify-between items-center cursor-pointers'>
                <h1 className='text-1xl text-start md:text-xl font-semibold text-[#3182CE] font-monts'>{question}</h1>
                <BiChevronDown className={`text-3xl transition-all duration-500 ${show ? "rotate-180" : ""}`}></BiChevronDown>
            </div>

            {/* Answer Part  */}

            <AnimatePresence>
                {show && (
                    <motion.div initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3 }}
                        className='overflow-clip'>
                        <p className='pt-3 text-sm md:text-base text-start font-karla'>{answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Accordian
