import React from 'react'
import SignUp from './Signup';
import { Link } from 'react-router-dom'
import Footer from './Footer';
import Contactus from './Contactus';
import About from './About';
const Hero = () => {
  return (
    <div>
      <div class="bg-white">
    <header class="bg-[#FCF8F1] bg-opacity-30">
        <div class="px-4 mx-auto sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16 lg:h-20">
                <div class="flex-shrink-0">
                    <Link to={'/'} title="" class="flex">
                    <h1 class="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
    Asim
  </h1>
                    </Link>
                </div>

                <button type="button" class="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">
                 
                    <svg class="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16"></path>
                    </svg>

                    
                    <svg class="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>

                <div class="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
                    <Link to={'/'} title="" class="text-base text-black transition-all duration-200 hover:text-opacity-80"> Home </Link>

                    <Link to={'/services'} title="" class="text-base text-black transition-all duration-200 hover:text-opacity-80"> Services </Link>

                    <Link to={'/About'} title="" class="text-base text-black transition-all duration-200 hover:text-opacity-80"> About us </Link>

                    <Link to={'/pricing'} title="" class="text-base text-black transition-all duration-200 hover:text-opacity-80"> Pricing </Link>
                </div>

                <Link to={"/Signup"} title="" class="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-yellow-300 hover:text-black focus:text-black focus:bg-yellow-300 font-semibold text-white bg-black rounded-full" role="button"> Sign Up </Link>
            </div>
        </div>
    </header>

    <section class="bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-24">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                <div>
                    <p class="text-base font-semibold tracking-wider text-blue-600 uppercase">Expant your business to worldwide</p>
                    <h1 class="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-8xl">Asim, the Developer Brand</h1>
                    <p class="mt-4 text-base text-black lg:mt-8 sm:text-xl">Fast and responsive </p>

                    <Link to={'/Contactus'} title="" class="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-yellow-400" role="button">
                        Contact us
                        <svg class="w-6 h-6 ml-8 -mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </Link>

                    <p class="mt-5 text-gray-600">Already joined us? <Link to={'/Login'} title="" class="text-black transition-all duration-200 hover:underline">Log in</Link></p>
                </div>

                <div>
                    <img class="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/1/hero-img.png" alt="" />
                </div>
            </div>
        </div>
    </section>
    <section>
        <Footer/>
    </section>
</div>

    </div>
  )
}

export default Hero
