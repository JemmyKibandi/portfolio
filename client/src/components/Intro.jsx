import React from 'react';
import Image from 'next/image';
import Background from '../components/images/2.jpeg'; // Ensure the path is correct
import { useScroll, useTransform, motion } from 'framer-motion';

export default function Intro() {
  // Scroll progress relative to the entire window
  const { scrollYProgress } = useScroll();

  // Transform y-position based on scroll progress
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);

  return (
    <div className='h-screen overflow-hidden'>
      <motion.div style={{ y }} className='relative h-full'>
        <Image
          src={Background}
          fill
          alt="background image"
          style={{ objectFit: 'cover' }}
        />
      </motion.div>
    </div>
  );
}
