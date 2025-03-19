import React from 'react'
import { MdOutlineQuestionAnswer } from 'react-icons/md'
import { BiSelectMultiple } from 'react-icons/bi'
import { GrCertificate } from 'react-icons/gr'

const Features = () => {
    return (
        <section className='max-padd-container py-16 xl:py-32'>

            {/* Title...................... */}
            <div className='text-center pb-16'>
                <h6 className='capitalize'>Few Step to Your New Home</h6>
                <h2 className='h2 capitalize'>This is How easy It can be</h2>
            </div>

            {/* Feature............................... */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12'>
                <div className='bg-white rounded-3xl p-8 shadow-md'>
                    <MdOutlineQuestionAnswer className='text-4xl text-purple-500 mb-4' />
                    <h4 className='h4'>Answer Questions </h4>
                    <p  >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum ea vero error modi itaque
                        praesentium minima adipisci perferendis nostrum incidunt provident, quisquam magnam eveniet?
                        Iure natus ipsa ipsam perspiciatis placeat?
                    </p>
                </div>
                <div className='bg-white rounded-3xl p-8 shadow-md'>
                    <BiSelectMultiple className='text-4xl text-yellow-500 mb-4' />
                    <h4 className='h4'>Select Property</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum ea vero error modi</p>
                </div>
                <div className='bg-white rounded-3xl p-8 shadow-md'>
                    <GrCertificate className='text-4xl text-red-500 mb-4' />
                    <h4 className='h4'>Enjoy Living</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum ea vero error modi</p>
                </div>
            </div>
        </section>
    )
}

export default Features