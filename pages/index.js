import React, { useEffect } from 'react'

import { useState } from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'

import { YouTubeEmbed } from 'react-social-media-embed'
import FsLightbox from "fslightbox-react";

import Collapse from '../components/Collapse';

import logo from '@/public/logo-white.png'
import thumb from '@/public/thumb.jpg'
import silas from '@/public/photo-silas.jpg'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [youtube, setYoutube] = useState('')
  const [toggler, setToggler] = useState(false);

  useEffect(()=>{
    setYoutube('https://www.youtube.com/watch?v=_0NnVudfYh0')
  })

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <div className='bg-cta-home bg-center bg-cover w-full min-h-screen flex items-center justify-center'>
        <div className='p-12 md:p-24 text-center'>
          <Image src={logo}  className='block mx-auto' alt='Logo Advec'/>
          <h1 className='text-white text-4xl pt-10 pb-4 uppercase font-bold'>Seja bem Vindo a <strong>ADVEC</strong></h1>
          <h2 className='text-white text-2xl uppercase font-bold mt-0'>Somos a Igreja da Palavra</h2>

        </div>
      </div>

      <div className='bg-blue bg-center bg-cover w-full flex items-center justify-center'>
        <div className='p-12 md:p-24 text-center'>
        
        <h3 className='text-white text-2xl pt-10 pb-4 uppercase font-bold'>Uma mensagem do <strong>Pastor Silas Malafaia</strong> especialmente para você!</h3>
        <div className='w-full md:w-4/6 mx-auto rounded-2xl overflow-hidden mt-6'>

			<button onClick={() => setToggler(!toggler)}>
				<Image src={thumb}  className='block mx-auto shadow-xl' alt='Thumb Advec'/>
			</button>
			<FsLightbox
				toggler={toggler}
				sources={[
					"https://www.youtube.com/watch?v=_0NnVudfYh0"
				]}
			/>

        </div>

        </div>
      </div>

      <div className='bg-pillars bg-center bg-cover w-full p-24 flex items-center justify-center'>
        <div className='p-12 md:p-24 text-center'>
          <h4 className='text-white text-4xl pt-10 pb-4 uppercase font-bold'>OS QUATRO <strong>PILARES FUNDAMENTAIS</strong> DA ADVEC</h4>
          <p className='text-white text-xl'>Para que, se eu demorar, você saiba como as pessoas devem se comportar na casa de Deus. Ela é a igreja do Deus vivo, coluna e alicerce da verdade.</p>
          <p className='text-white mt-2 text-xl uppercase font-bold'>- 1 Timóteo 3:15 -</p>

          <div className='w-full mt-6'>
            <Collapse title="Unidade">
              <p className="mb-2">A igreja é corpo | 1 Co 12.12</p>
              <p className="mb-2">Manifestar Cristo | Jo 17.21</p>
              <p className="mb-2">Evitar a Destruição por fatores internos e externos | Mt 12.25</p>
            </Collapse>
            <Collapse title="Visão">
              <p className="mb-2">Conquistar vidas para Cristo</p>
              <p className="mb-2">Abrir igrejas</p>
              <p className="mb-2">Ajudar outros ministérios</p>
              <p className="mb-2">Obras Sociais para soluções definitivas</p>
              <p className="mb-2">Construir escolas</p>
              <p className="mb-2">Estabelecer o reino na terra</p>
              <p className="mb-2">Influenciar em todos os campos da sociedade</p>
              <p>Divisão</p>
            </Collapse>
            <Collapse title="Autoridade">
              <p className="mb-2">&quot;Obedecei a vossos pastores e sujeitai-vos a eles; porque velam por vossa alma, como aqueles que hão de dar conta delas; para que o façam com alegria e não gemendo, porque isso não vos seria útil.&quot; - Hebreus 13.17</p>
              <p className="mb-2">Qualquer organização que não tenha princípio de autoridade, auto se destrói</p>
              <p className="mb-2">Deus não negocia princípio de autoridade</p>
              <p className="mb-2">A igreja do Apocalipse</p>
              <p className="mb-2">Uma vez que o Espírito Santo me Esclareceu este ponto, Ele continuou: &quot;John, quando você estiver perante Mim em julgamento pelo período em que você esteve servindo esta pastor, você não dará conta primeiramente de quantos jovens você levou à salvação em Orlando, Flórida. Você primeiramente será julgado pela sua fidelidade ao pastor sob o qual Eu te coloquei&quot;. Pastor John Bevere</p>
            </Collapse>
            <Collapse title="Palavra de Deus">
              <p className="mb-2">Ela é o manual de vida de todo cristão, aquilo que guia nossas escolhas e decisões, ela engloba todos os assuntos acima citados.</p>
            </Collapse>
          </div>

        </div>
      </div>

      <div className='bg-winne lg:bg-silas bg-left bg-cover w-full p-12 sm:p-24 flex items-center justify-center lg:justify-end'>
        <div className='p-5 md:p-24 text-center lg:text-end w-full lg:w-5/6'>
          <h4 className='text-white text-4xl pt-10 lg:pl-56 pb-4 uppercase font-bold'>PASTOR <strong>SILAS MALAFAIA</strong></h4>
          <Image src={silas}  className='block mx-auto rounded-3xl shadow-2xl mb-4 block lg:hidden' alt='Logo Advec'/>
          <p className='text-white text-lg lg:pl-56'>Defende incansavelmente a fé cristã, os princípios e valores éticos, morais e espirituais da igreja de Jesus Cristo. Lidera há 12 anos a nossa igreja. Conferencista cada vez mais reconhecido, o pastor Silas Malafaia é um incansável pregador da Palavra de Deus com livre circulação nas diversas denominações existentes no Brasil e no exterior. Seu estilo eloqüente, franco, direto e questionador são características que marcam a sua trajetória ao longo de 28 anos como defensor da fé cristã.</p>
        </div>
      </div>



    </main>
  )
}
