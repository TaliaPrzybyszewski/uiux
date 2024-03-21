import React from 'react'

import SectionHeading from './Section-Heading'
import { Star, StarHalf } from 'lucide-react'

export default function BasicTailwindLayout() {
  return (
    <section className="relative text-sm sm:text-base text-[#3929ff]">
      <SectionHeading>Tailwind Layout Example </SectionHeading>
      <div className="absolute inset-0 bgGrid z-[-1] opacity-50 "></div>
      <header className="sticky top-0 max-w-[1000px] mx-auto w-full p-4 sm:p-8 flex items-center justify-between gap-4 sm:gap-8">
        <h1>Crystal Math</h1>
        <button className="px-7 py-3 lightShadown cursor-pointer rounded-full bg-white blueShadow font-medium">
          <p>Book Now</p>
        </button>
      </header>
      <main className="min-h-screen flex flex-col ">
        <section className="flex flex-col max-w-[1000px] w-full mx-auto p-8 gap-8 md:gap-14 sm:py-14 md:py-20 ">
          <h2 className="font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-center">
            Pure Math Made Crystal Clear
          </h2>
          <p className="mx-auto max-w-[800px] w-full text-center text-base sm:text-lg md:text-xl">
            Experience the euphoric high of greater knowledge, deeper
            understanding and some wild math 🔥{' '}
          </p>
          <div className="grid grid-cols-21 sm:grid-cols-2 gap-4 sm:gap-8 sm:w-fit sm:mx-auto  py-4 ">
            <button className="px-6 lightShadow py-3 sm:px-10 sm:py-4 cursor-pointer rounded-full bg-white blueShadow font-medium ">
              <p className="text-base sm:text-lg md:text-xl ">Book now</p>
            </button>
            <button className="px-6 lightShadow py-3 sm:px-10 sm:py-4 bg-[#3929ff] cursor-pointer rounded-full blueShadow font-medium">
              <p className=" text-base sm:text-lg md:text-xl text-white">
                Get in touch
              </p>
            </button>
          </div>
          <div className="flex items-center gap-4 mx-auto text-base sm:text-lg ">
            <p>4.6</p>

            <div className="flex items-center gap-0.5  ">
              <Star className="text-amber-400" />
              <Star className="text-amber-400" />
              <Star className="text-amber-400" />
              <Star className="text-amber-400" />
              <StarHalf className="text-amber-400" />
            </div>
            <p>(250+)</p>
          </div>
        </section>
      </main>
      <footer className="flex items-center justify-center py-10 ">
        <p>Made with 💛</p>
      </footer>
    </section>
  )
}
