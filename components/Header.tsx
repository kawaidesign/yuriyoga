import Image from 'next/image';
import Link from 'next/link';

import Navbar from './Navbar';

export default function Header() {
  return (
    <div className='px-2 flex justify-between h-12 items-center lg:px-0 md:h-20'>
      <div className='relative w-36 h-12 md:w-40'>
        <Link href='/'>
          <a>
            <Image
              src='/images/yuriyoga_logo.jpg'
              layout='fill'
              objectFit='contain'
              alt='YURI YOGA'
            />
          </a>
        </Link>
      </div>
      <Navbar />
    </div>
  );
}
