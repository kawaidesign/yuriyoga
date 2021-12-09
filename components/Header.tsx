import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from './Navbar';

export default function Header() {
  return (
    <div className='flex justify-between p-6'>
      <Image
        src='/images/yuriyoga_logo.jpg'
        width={200}
        height={50}
        objectFit='contain'
        alt='YURI YOGA'
      />
      <Navbar />
    </div>
  );
}
