import React, { useState } from 'react'
import ProjectGrid from './ProjectGrid';

function ProjectSelection() {
     const categories = ['All Projects', 'Frontend', 'Backend', 'Java','Tailwind CSS'];
    const [activeCategory,setActiveCategory]=useState("All Projects")
 
    const btnBase ='inline-flex items-center justify-center h-10 px-4 font-medium transition-colors border rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50';

  return (
    <div>
  <div className='flex flex-wrap justify-center gap-4 mb-12'>
    {categories.map((category,index)=>{ 
        const isActive =category===activeCategory;
        return(
        <button key={index} 
        onClick={()=>setActiveCategory(category)}
        className={`${btnBase} ${isActive
            ?'bg-purple-400 text-black border-transparent'
            :'bg-transparent dark:text-white border-input hover:bg-red-400 hover:text-gray-100'}`}>
                {category}
            </button>
)})}
            </div>
            <ProjectGrid category={activeCategory}/>
            </div>

            
  )
}

export default ProjectSelection