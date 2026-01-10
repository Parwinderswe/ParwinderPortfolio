import React from 'react'

function Seltters() {
  return (
    <div>
        <h3 className='mb-4 text-xl font-bold'>NewSeltter</h3>
        <p className='mb-4'>Subscribe to my newsletter for tech insights and industry updates.</p>
        <form className='flex'>
            <input type='email' placeholder='Enter your email ' className='flex-1 px-4 py-2 text-black border rounded-l-md border-border focus:outline-none focus:ring-1 focus:ring-brand-gold/50'>
            </input>
            <button className='px-4 py-2 text-white transition-colors bg-brand-teal-dark rounded-r-md hover:bg-brand-teal'>Subscribe</button>
        </form>
    </div>
  )
}

export default Seltters
