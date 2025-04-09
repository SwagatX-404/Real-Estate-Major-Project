import React from 'react'
//import aboutImg from '../assets/about.png'
import { BsCheck2Circle } from 'react-icons/bs'

const About = () => {
    return (
        <section className='max-padd-container py-16 xl:py-28 '>
            <div className='flex flex-col xl:flex-row gap-10 '>
                {/* left..................... */}
                <div className='flex-1'><img src='https://img.freepik.com/free-psd/real-estate-house-property-instagram-post-social-media-banner-template_120329-5635.jpg?t=st=1743867195~exp=1743870795~hmac=76d6ad8aab1992bdeabcd184d3f9c141cc67e68208d2df1d8049692ae37e86b2&w=740' alt="" className='h-[511px] rounded-xl ' /></div>

                {/* right.......................... */}
                <div className='flex-1 flex flex-col justify-center'>
                    {/* Title...................... */}
                    <div className=' pb-2'>
                        <h6 className='capitalize'>Few Step to Your New Home</h6>
                        <h2 className='h2 capitalize'>This is How easy It can be</h2>
                    </div>
                    <ul>
                        <li className='flex items-center gap-x-3 py-2'>
                            <BsCheck2Circle />Access exclusive property listing
                        </li>
                        <li className='flex items-center gap-x-3 py-2'>
                            <BsCheck2Circle />Expert advice from local real estate professionals
                        </li>
                        <li className='flex items-center gap-x-3 py-2'>
                            <BsCheck2Circle />Find your dream home in prime locations
                        </li>
                        <li className='flex items-center gap-x-3 py-2'>
                            <BsCheck2Circle />Seamless online property search experience
                        </li>
                        <li className='flex items-center gap-x-3 py-2'>
                            <BsCheck2Circle />Get personalized property recommendations
                        </li>
                        <li className='flex items-center gap-x-3 py-2'>
                            <BsCheck2Circle />Transparent and hassel-free transactions
                        </li>
                        <li className='flex items-center gap-x-3 py-2'>
                            <BsCheck2Circle />24/7 customer support for all your inquiries
                        </li>
                        <li className='flex items-center gap-x-3 py-2'>
                            <BsCheck2Circle />Comprehensive market analysis and reports
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default About