import React from 'react'
import ContactWay from './ContactWay'
import address from '../assets/address.png'
import calling from '../assets/calling.png'
import email from '../assets/email.png'
import { Fade } from 'react-reveal';

const Wayofcontact = () => {
    return (
        <div className='w-full dark:bg-gray-800 bg-[#eef5ff]'>
            <Fade duration={1000} distance="30px" bottom>
                <div className='flex md:flex-row flex-col justify-center items-center gap-20 py-20'>
                    <ContactWay
                        contactimage={calling}
                        contactTitle="Call Us"
                        contactInfo1="+91 9123227497"
                        contactInfo2="+91 7352675671"
                    />
                    <ContactWay
                        contactimage={email}
                        contactTitle="Email"
                        contactInfo1="discover@skillez.in"
                        contactInfo2="skillez.in@gmail.com"
                    />
                    <ContactWay
                        contactimage={address}
                        contactTitle="Address"
                        contactInfo1="KIIT UNIVERSITY"
                        contactInfo2="BHUBANESWAR,ODISHA"
                    />
                </div>
            </Fade>
        </div>
    )
}

export default Wayofcontact
