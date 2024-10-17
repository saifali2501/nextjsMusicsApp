import Link from 'next/link';
import React from 'react';
import { Spotlight } from './ui/Spotlight';
import { Button } from "./ui/moving-border";

export default function Hero_Section() {
  return (
    <div className='h-auto md:h-[46rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>
         <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className='relative w-full text-center p-4 z-10 '>
        <h1 className='text-4xl mt-20 md:mt-0 md:text-7xl font-bold bg-clip-text bg-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'>Master the Art of Music</h1>
        <p className='text-base md:text-lg text-neutral-300 max-w-lg mx-auto mt-4 font-normal '>
          Embark on a journey to unleash your musical potential. Our comprehensive music course offers in-depth training in music theory, composition, and production. Whether you're a beginner or looking to sharpen your skills,  
        </p>
        <div className='mt-5'>
        <Link  href={"/Coures"}>
       <Button borderRadius='1.75rem' className='bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800'>Explore Courses</Button> 
        </Link>
        </div>
       
      </div>
    </div>
  );
}

