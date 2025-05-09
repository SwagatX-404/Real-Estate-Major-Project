import React from 'react'
import { MdOutlineQuestionAnswer } from 'react-icons/md'
import { BiSelectMultiple } from 'react-icons/bi'
import { GrCertificate } from 'react-icons/gr'

const Features = () => {
    return (
        <section className='max-padd-container py-16 xl:py-32'>

            {/* Title...................... */}
            <div className='text-center pb-16 text-slate-700 font-bold'>
                <h6 className='mb-4 text-3xl lg:text-5xl'>Few Step to Your New Home</h6>
                <h2 className='text-3xl lg:text-3xl'>This is How easy It can be</h2>
            </div>

            {/* Feature............................... */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12'>
                <div className='bg-white rounded-3xl p-8 shadow-md border-2 border-slate-400/50'>
                    <MdOutlineQuestionAnswer className='text-4xl text-purple-500 mb-4' />
                    <h4 className='h4  font-bold text-zinc-800'>Answer Questions </h4>
                    <p  >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum ea vero error modi itaque
                        praesentium minima adipisci perferendis nostrum incidunt provident, quisquam magnam eveniet?
                        Iure natus ipsa ipsam perspiciatis placeat?
                    </p>
                </div>
                <div className='bg-white rounded-3xl p-8 shadow-md border-2 border-slate-400/50'>
                    <BiSelectMultiple className='text-4xl text-yellow-500  mb-4' />
                    <h4 className='h4  font-bold text-zinc-800'>Select Property</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum ea vero error modi</p>
                </div>
                <div className='bg-white rounded-3xl p-8 shadow-md border-2 border-slate-400/50'>
                    <GrCertificate className='text-4xl text-red-500 mb-4' />
                    <h4 className='h4 font-bold text-zinc-800'>Enjoy Living</h4>
                    <p className=''>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum ea vero error modi</p>
                </div>
            </div>
        </section>
    )
}

export default Features