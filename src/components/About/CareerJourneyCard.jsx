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
    const textAlign = cardDisplay
      ? 'text-center md:text-left'
      : 'text-center md:text-right';
    const accentAlign = cardDisplay ? 'mx-auto md:mx-0' : 'mx-auto md:ml-auto';
  return (
    <>
    <div className="relative">
              <div className="absolute z-10 items-center justify-center w-8 h-8 font-bold text-white transform -translate-x-1/2 -translate-y-4 bg-brand-gold rounded-full left-1/2 hidden md:flex">
                <span className="text-xs">{year}</span>
              </div>
              <div className={`flex flex-col gap-6 ${containerClasses}`}>
                <div className="md:w-1/2 "></div>
                <div className={`p-6 ${textAlign} rounded-2xl shadow-sm md:w-1/2 bg-gradient-to-br from-white to-brand-cream/60 border border-black/5 hover:shadow-lg hover:-translate-y-0.5 transition dark:from-gray-900 dark:to-gray-950/60 dark:border-white/10`}>
                  <div className="inline-flex items-center justify-center w-10 h-10 mb-4 text-sm font-bold text-white bg-brand-gold rounded-full md:hidden">
                    {year}
                  </div>
                  <div className={`h-1 w-12 rounded-full bg-brand-gold/80 ${accentAlign}`}></div>
                  <h4 className="text-xl font-bold text-brand-teal ">
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
