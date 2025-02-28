import Image from 'next/image';
import React from 'react'
import Navbar from './components/Navbar';

const MainLayout = (props) => {
    const {children} = props;
    return (
        <div className="flex flex-col justify-center items-center h-full bg-gray-200">
        <Navbar/>
      <main className="flex  flex-col w-full justify-center">
        {children}
      </main>
      
    </div>
    )
}

export default MainLayout
