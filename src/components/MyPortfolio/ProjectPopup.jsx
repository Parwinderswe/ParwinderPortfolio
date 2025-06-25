import React from 'react'
import { FaLessThan,FaGreaterThan  } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
function ProjectPopup({onClose,name,img,alt,projOverview,tech,onNext,onPrev}) {
  return (
   <div className='fixed inset-0 z-50 flex items-center justify-center p-4'>
<div className='bg-card rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto'>
<div className='sticky top-0 z-10 flex items-center justify-between p-4 text-black bg-white border-b border-gray-500 dark:text-white dark:border-gray-200 dark:bg-slate-900'>

    <h3 className='text-2xl font-bold '>{name}</h3>
    <button className='p-1 rounded-full hover:bg-gray-200'
    onClick={onClose}
    ><MdCancel size={40} />
    </button>
</div>
<div className='relative h-64 sm:h-80 md:h-96'>
    <img src={img} alt={alt} className='object-cover w-full h-full'/>
    <button className='absolute flex items-center justify-center w-10 h-10 text-white -translate-y-1/2 rounded-full left-2 top-1/2 bg-black/50 hover:bg-black/70'
    onClick={onPrev}> <FaLessThan/></button>
     <button className='absolute flex items-center justify-center w-10 h-10 text-white -translate-y-1/2 rounded-full right-2 top-1/2 bg-black/50 hover:bg-black/70'
     onClick={onNext}
     > <FaGreaterThan /></button>
</div>

<div className='p-6 bg-white dark:bg-gray-900'>
  <h4 className='mb-2 text-xl font-bold text-left'>Project Overview</h4>
  <p className='mb-6 text-left dark:text-gray-400 text-muted-foreground'>{projOverview}</p>
  <h4 className='mb-2 text-xl font-bold text-left'>Technologies Used</h4>
  <div className='flex flex-wrap gap-2 mb-6'>
    {tech.map((item)=>(<span key={item} className='px-3 py-1 text-xs bg-gray-200 rounded-full dark:bg-gray-700'>{item}</span>))}
  
</div>

<div className='flex justify-center mt-4 '>
<a href='#' target='_blank' rel='noreferrer'>
  <button className='inline-flex items-center justify-center h-10 px-4 font-medium text-white transition-colors bg-purple-400 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 text-Purple-600 hover:bg-purple-400/80'
  >Visit Project</button>
</a>
</div>
</div>

</div>
</div>
  )
}

export default ProjectPopup