import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import ParwinderImg from '../../assets/MyPortfolioImg/ParwinderImg.jpg';

function HeroSection() {
  return (
    <section className="relative flex items-center min-h-screen pt-20 overflow-hidden text-black transition-colors duration-500 bg-white dark:bg-gray-950 dark:text-white">
    <div className='absolute inset-0 bg-gradient-to-br from-brand-teal/20 to-brand-gold/10 dark:from-brand-teal/10 dark:to-black -z-10'></div>
    <div className='noise-bg'></div>
    <div className='container px-4 mx-auto md:px-6'>
        <div className='grid items-center grid-cols-1 gap-12 lg:grid-cols-2'>
            <div className='order-2 space-y-6 text-center lg:order-1 lg:text-left'>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Hi, I'm{" "}
              <span className="inline-block ml-2 whitespace-nowrap text-brand-teal dark:text-brand-teal">
                Parwinder Kaur
              </span>
            </h1>
            <p className="max-w-xl mx-auto text-lg text-gray-700 dark:text-gray-400 md:text-xl lg:mx-0">
              Hi, I&apos;m a full‑stack software engineer who turns complex requirements into elegant, reliable web experiences.
            </p>
            <p className="max-w-xl mx-auto text-base text-gray-600 dark:text-gray-400 md:text-lg lg:mx-0">
              With 6+ years in product delivery, I build React interfaces, Java services, and SQL-backed systems with a focus on performance, security, and maintainability.
            </p>
            <p className="max-w-xl mx-auto text-base text-gray-600 dark:text-gray-400 md:text-lg lg:mx-0">
              I&apos;m looking for ambitious teams and projects where thoughtful engineering and polished UX make a real impact.
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm font-medium text-gray-700 dark:text-gray-300 lg:justify-start">
              <span className="px-3 py-1 border rounded-full shadow-sm bg-white/80 border-gray-200/70 dark:bg-gray-900/40 dark:border-gray-800">6+ Years Experience</span>
              <span className="px-3 py-1 border rounded-full shadow-sm bg-white/80 border-gray-200/70 dark:bg-gray-900/40 dark:border-gray-800">Module Lead at Bebo</span>
              <span className="px-3 py-1 border rounded-full shadow-sm bg-white/80 border-gray-200/70 dark:bg-gray-900/40 dark:border-gray-800">Frontend, Backend</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-semibold lg:justify-start">
              <span className="px-3 py-1 text-white rounded-full bg-brand-teal">React</span>
              <span className="px-3 py-1 text-white rounded-full bg-brand-gold">Java</span>
            </div>
            <div className='flex flex-col justify-center gap-4 pb-8 text-white sm:flex-row lg:justify-start'>
                <button className='inline-flex items-center justify-center h-12 px-6 text-lg font-medium text-white transition-colors rounded-md bg-brand-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold disabled:opacity-50 hover:bg-brand-teal-dark group' 
                onClick={() => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }}
                >Contact Me
                <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                </button>
                <button className="inline-flex items-center justify-center h-12 px-6 text-lg font-medium text-black transition-colors bg-transparent border rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold disabled:opacity-50 border-input dark:text-white hover:bg-brand-gold hover:text-white"
                onClick={() => {
                  document.getElementById('portfolio')?.scrollIntoView({behavior:'smooth'});
                }}
                >View Portfolio</button>
            </div>
            </div>
            <div className='flex justify-center order-1 mt-2 lg:order-2 lg:mt-0 lg:justify-end'>
                <div className='relative text-center lg:text-left'>
                    <div className='absolute rounded-full -inset-10 bg-brand-teal/20 blur-3xl'></div>
                    <div className='absolute w-24 h-24 rounded-full -right-8 -top-8 bg-brand-gold/30 blur-xl'></div>
                    <div className='relative w-56 h-56 overflow-hidden border-[6px] border-white/80 rounded-full shadow-2xl sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 dark:border-gray-900'>
                        <img src={ParwinderImg} alt='Parwinder Kaur' 
                        className='object-cover object-center w-full h-full'></img>
                    </div>
                    <span className="block mt-4 text-center font-medium text-brand-gold dark:text-brand-gold lg:hidden">
                      Software Engineer
                    </span>
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default HeroSection
