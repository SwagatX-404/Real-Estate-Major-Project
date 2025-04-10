import React from 'react'
//import aboutImg from '../assets/about.png'
import { BsCheck2Circle } from 'react-icons/bs'

const About = () => {
    return (
        <section className='max-padd-container py-16 xl:py-28 '>
             {/* Title...................... */}
             <div className=' text-center pb-16 text-slate-700 font-bold'>
                        <h6 className='mb-4 text-3xl lg:text-5xl'>Few Step to Your New Home</h6>
                        <h2 className='text-3xl lg:text-3xl'>This is How easy It can be</h2>
                    </div>
            <div className='flex flex-col xl:flex-row gap-10 '>
                {/* left..................... */}
                <div className='flex-1'><img src='https://img.freepik.com/free-psd/real-estate-house-property-instagram-post-social-media-banner-template_120329-5635.jpg?t=st=1743867195~exp=1743870795~hmac=76d6ad8aab1992bdeabcd184d3f9c141cc67e68208d2df1d8049692ae37e86b2&w=740' alt="" className='h-[511px] rounded-xl ' /></div>

                {/* right.......................... */}
                <div className='flex-1 flex flex-col justify-center'>
                   
                <ul className='space-y-2 text-slate-600 text-lg'>
                        {[
                            'Access exclusive property listings',
                            'Expert advice from local real estate professionals',
                            'Find your dream home in prime locations',
                            'Seamless online property search experience',
                            'Get personalized property recommendations',
                            'Transparent and hassle-free transactions',
                            '24/7 customer support for all your inquiries',
                            'Comprehensive market analysis and reports'
                        ].map((point, idx) => (
                            <li key={idx} className='flex items-center gap-x-3 py-1'>
                                <BsCheck2Circle className='text-green-600' /> {point}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default About