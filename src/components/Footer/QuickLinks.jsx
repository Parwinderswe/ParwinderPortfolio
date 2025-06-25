import React from 'react'

function QuickLinks() {
    // const linksList =["About",""]
  return (
    <div>
    <h3 className='mb-4 text-xl font-bold'>Quick Links</h3>
    <ul className='space-y-2 '>
        <li>
            <a href="#about" className='transition-colors hover:text-purple-500'>About</a>
            </li>
            <li>
                <a href="#skills" className='transition-colors hover:text-purple-500'>Skills</a>
            </li>
        <li>
            <a href="#portfolio" className='transition-colors hover:text-purple-500'>Portfolio</a>
        </li>
        <li>
            <a href="#contact" className='transition-colors hover:text-purple-500'>Contact</a>
        </li>
        
        
    </ul>
    </div>
  )
}

export default QuickLinks