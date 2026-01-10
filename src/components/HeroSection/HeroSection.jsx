import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import ParwinderImg from '../../assets/MyPortfolioImg/ParwinderImg.jpg';

function HeroSection() {
  return (
    <section className="relative flex items-center min-h-screen pt-20 overflow-hidden bg-white text-black dark:bg-gray-950 dark:text-white transition-colors duration-500">
    <div className='absolute inset-0 bg-gradient-to-br from-brand-teal/20 to-brand-gold/10 dark:from-brand-teal/10 dark:to-black -z-10'>HeroSection</div>
    <div className='noise-bg'></div>
    <div className='container px-4 mx-auto'>
        <div className='grid items-center grid-cols-1 gap-12 lg:grid-cols-2'>
            <div className='space-y-6 text-center lg:text-left'>
             <span className="inline-block font-medium text-brand-gold dark:text-brand-gold">Software Engineer</span>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Hi, I'm <span className="ml-2 text-brand-teal dark:text-brand-teal">Parwinder Kaur</span>
            </h1>
            <p className="max-w-lg mx-auto text-lg text-gray-700 dark:text-gray-400 md:text-xl lg:mx-0">
              Passionate software engineer with 6 years of experience crafting high-performance web applications and scalable solutions.
            </p>
            <div className='flex flex-col justify-center gap-4 text-white sm:flex-row lg:justify-start '>
                <button className='inline-flex items-center justify-center h-12 px-6 text-lg font-medium transition-colors bg-brand-teal rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold disabled:opacity-50 text-white hover:bg-brand-teal-dark group' 
                onClick={() => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }}
                >Contact Me
                <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                </button>
                <button className="inline-flex items-center justify-center h-12 px-6 text-lg font-medium transition-colors bg-transparent border rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold disabled:opacity-50 border-input text-black dark:text-white hover:bg-brand-gold hover:text-white"
                onClick={() => {
                  document.getElementById('portfolio')?.scrollIntoView({behavior:'smooth'});
                }}
                >View Portfolio</button>
            </div>
            </div>
            <div className='justify-center hidden lg:flex lg:justify-end'>
                <div className='relative'>
                    <div className='w-64 h-64 overflow-hidden border-4 border-white rounded-full shadow-xl md:w-80 md:h-80 dark:border-gray-800'>
                        <img src={ParwinderImg} alt='Parwinder Kaur' 
                        className='object-cover w-full h-full'></img>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default HeroSection
