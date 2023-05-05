import Image from 'next/image'
import { Inter } from 'next/font/google'

import React from 'react'
import ReactPlayer from 'react-player'

import logo from '@/public/logo-white.png'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <div className='bg-cta-home bg-center bg-cover w-full min-h-screen flex items-center justify-center'>
        <div className='p-12 md:p-24 text-center'>
          <Image src={logo}  className='block mx-auto' alt='Logo Advec'/>
          <h1 className='text-white text-4xl pt-10 pb-4 uppercase font-bold'>Seja bem Vindo a ADVEC</h1>
          <h2 className='text-white text-2xl uppercase font-bold'>Somos a Igreja da Palavra</h2>

          <ReactPlayer url='https://www.youtube.com/watch?v=wWgIAphfn2U' />

        </div>
      </div>
    </main>
  )
}
