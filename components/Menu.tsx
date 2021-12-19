import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

export default function Menu() {
  return (
    <div className='flex justify-center items-center text-center top-0 left-0 fixed w-screen h-screen z-20 bg-white bg-opacity-90 md:hidden'>
      <ul>
        <Link href='/profile'>
          <a>
            <li className='text-gray-900 mb-12 text-3xl font-semibold'>プロフィール</li>
          </a>
        </Link>

        <Link href='/lesson'>
          <a>
            <li className='text-gray-900 mb-12 text-3xl font-semibold'>レッスン紹介</li>
          </a>
        </Link>

        <Link href='/contact'>
          <a>
            <li className='text-gray-900 mb-12 text-3xl font-semibold'>お問い合わせ</li>
          </a>
        </Link>

        <a href='https://www.instagram.com/yuri___yoga/' target='_blank' rel='noopener noreferrer'>
          <li className='text-gray-900 mb-12 text-3xl font-semibold'>
            <FontAwesomeIcon icon={faInstagram} size='lg' />
          </li>
        </a>
      </ul>
    </div>
  );
}
