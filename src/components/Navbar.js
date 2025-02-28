import Image from 'next/image'
import React from 'react'
import WeatherIcon from '../img/WeatherIcon.png'
import Link from 'next/link'
const Navbar = () => {
  return (
    <nav className='flex w-full bg-[#032B44] h-22 flex gap-2 p-2 items-center sticky top-0'>
        <Link href='/'>
          <div className='flex gap-2 items-center'>
            <Image 
              src={WeatherIcon}
              width={1200}
              height={1200}
              alt='WeatherIcon'
              className='lg:h-16 lg:w-16 md:h-14 md:w-14 w-12 h-12'
            />
            <h1 className='lg:text-4xl md:text-3xl text-xl'>OpenWeather API</h1>
          </div>
        </Link>
    </nav>
  )
}

export default Navbar
