'use client';

import { useEffect } from 'react';

import Lenis from 'lenis'

import Intro from '@/src/components/Intro';

import Description from '@/src/components/Description';



export default function Home() {



  useEffect( () => {

    const lenis = new Lenis()



    function raf(time) {

      lenis.raf(time)

      requestAnimationFrame(raf)

    }



    requestAnimationFrame(raf)

  }, [])



  return (

    <main>

      <Intro />

      <Description />

      <div className='h-screen'></div>

    </main>

  );

}