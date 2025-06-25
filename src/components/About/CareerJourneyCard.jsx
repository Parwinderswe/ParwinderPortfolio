import React from 'react'

function CareerJourneyCard({year,position,company,description,cardDisplay=false}) {
    // choose flex direction & text alignment based on `invert`
    // let containerClasses;
    // let textAlign;
    // if(!cardDisplay){
    //      containerClasses ='md:flex-row-reverse';
    //      textAlign= 'text-left';
    // }
    // else {
    //      containerClasses ='md:flex-row';
    //      textAlign= 'text-left';
    // }
  const containerClasses = cardDisplay
    ? 'md:flex-row'
    : 'md:flex-row-reverse';
    const textAlign= cardDisplay?'text-left':'text-right'
  return (
    <>
    <div className="relative">
              <div className="absolute z-10 flex items-center justify-center w-8 h-8 font-bold text-white transform -translate-x-1/2 -translate-y-4 bg-purple-500 rounded-full left-1/2">
                <span className="text-xs">{year}</span>
              </div>
              <div className={`flex flex-col gap-8 ${containerClasses}`}>
                <div className="md:w-1/2 "></div>
                <div className={`p-6 ${textAlign} dark:bg-gray-950 rounded-lg shadow-md md:w-1/2 bg-card`}>
                  <h4 className="text-xl font-bold text-purple-600 ">
                    {position}
                  </h4>
                  <h5 className="mb-3 text-lg font-medium">
                    {company}
                  </h5>
                  <p className="text-gray-600 dark:text-gray-400 ">
                    {description}
                  </p>
                </div>
              </div>
            </div>
            
    </>
  )
}

export default CareerJourneyCard