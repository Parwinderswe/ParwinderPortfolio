import React from 'react'

function Seltters() {
  return (
    <div>
        <h3 className='mb-4 text-xl font-bold'>NewSeltter</h3>
        <p className='mb-4'>Subscribe to my newsletter for tech insights and industry updates.</p>
        <form className='flex'>
            <input type='email' placeholder='Enter your email ' className='flex-1 px-4 py-2 text-black border rounded-l-md border-border focus:outline-none focus:ring-1 focus:ring-purple-200'>
            </input>
            <button className='px-4 py-2 text-white transition-colors bg-purple-600 rounded-r-md hover:bg-purple-600/90'>Subscribe</button>
        </form>
    </div>
  )
}

export default Seltters