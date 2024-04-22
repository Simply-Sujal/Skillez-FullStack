import React from 'react';
import { Fade } from 'react-reveal';
import FirebaseLogo from '../images/Firebase.png';
import awsLogo from '../images/aws.png';
import nodeLogo from '../images/nodelogo.png';
import expressLogo from '../images/expressjslogo.png';
import androidLogo from '../images/andstudio.png';
import htmlLogo from '../images/HTML.jpg';
import jsLogo from '../images/JavaScript-logo.png';
import nextLogo from '../images/next.png';
import reactLogo from '../images/React-icon.svg.png';

const TechnologyWeUsedToBuild = () => {
    const techstack = [
        {
            id: 1,
            title: 'Full Stack',
            logo: "https://www.xbytesolutions.com/assets/img/services/fullstack-development.png",
            tools: [awsLogo, nodeLogo, expressLogo, FirebaseLogo, htmlLogo, jsLogo, nextLogo, reactLogo],
        },
        {
            id: 2,
            title: 'App Dev',
            logo: "https://www.xbytesolutions.com/assets/img/services/fullstack-development.png",
            tools: [androidLogo, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl6OleXpqew8m-LKrpg-GJwX42SAxyyaH5LQ&usqp=CAU", "https://web-strapi.mrmilu.com/uploads/flutter_logo_470e9f7491.png", "https://banner2.cleanpng.com/20181122/krs/kisspng-java-programming-language-selenium-computer-softwa-july-2-16-halab-4-dev-5bf78387a7bb41.028192901542947719687.jpg", "https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png"],
        },
        {
            id: 3,
            title: 'Database',
            logo: "https://www.xbytesolutions.com/assets/img/services/fullstack-development.png",
            tools: ["https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png", "https://w7.pngwing.com/pngs/441/460/png-transparent-postgresql-plain-wordmark-logo-icon-thumbnail.png", "https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-images-are-download-crazypng-21.png", FirebaseLogo],
        },
        {
            id: 4,
            title: 'Server',
            logo: "https://www.xbytesolutions.com/assets/img/services/fullstack-development.png",
            tools: ["https://cdn-icons-png.flaticon.com/512/919/919825.png", "https://www.djangoproject.com/m/img/logos/django-logo-positive.png", FirebaseLogo],
        },
    ];

    return (
        <section className='bg-[#EEF5FF] dark:bg-slate-900 dark:text-white duration-300 relative w-full py-8 md:py-16'>
            <div className='max-w-[1290px] mx-auto'>
                <h1 className='text-3xl md:text-5xl font-karla text-center mb-2 font-bold'>Technology We <span className='text-[#3182CE]'>Play </span>With</h1>
                <Fade duration={1000} distance="30px" bottom>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-5 px-4'>
                        {techstack.map((item) => (
                            <div key={item.id} className='dark:bg-slate-800 bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 flex flex-col items-center'>
                                <div className='pb-2'>
                                    <img src={item.logo} alt={item.title} className='w-16 h-16 object-contain mb-2' />
                                    <h1 className='text-xl font-semibold mb-2 text-black dark:text-white'>{item.title}</h1>
                                </div>

                                <div className='grid grid-cols-2 justify-start'>
                                    {item.tools.map((tool, index) => (
                                        <img key={index} src={tool} alt={`tool-${index + 1}`} className='w-10 h-12 object-contain rounded-md mb-2 mx-10' />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </Fade>
            </div>
        </section>
    );
};

export default TechnologyWeUsedToBuild;
