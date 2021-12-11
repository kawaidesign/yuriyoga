import Image from 'next/image';
import Link from 'next/link';
import MenuIcon from './MenuIcon';

import Navbar from './Navbar';

export default function Header() {
  return (
    <div className='flex justify-between h-20 items-center'>
      <Link href='/'>
        <a>
          <Image
            src='/images/yuriyoga_logo.jpg'
            width={200}
            height={50}
            objectFit='contain'
            alt='YURI YOGA'
          />
        </a>
      </Link>
      <Navbar />
      <MenuIcon />
    </div>
  );
}
