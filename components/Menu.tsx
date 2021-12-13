import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

export default function Menu() {
  return (
    <div className='flex justify-center items-center text-center top-0 left-0 fixed w-screen h-screen z-20 bg-white bg-opacity-90 md:hidden'>
      <ul>
        <Link href='/kids'>
          <a>
            <li className='text-gray-600 mb-12 text-4xl font-semibold'>キッズヨガ</li>
          </a>
        </Link>
        <li className='text-gray-600 mb-12 text-4xl font-semibold'>プロフィール</li>
        <a href='https://www.instagram.com/yuri___yoga/' target='_blank' rel='noopener noreferrer'>
          <li className='text-gray-600 mb-12 text-4xl font-semibold'>
            <FontAwesomeIcon icon={faInstagram} size='lg' />
          </li>
        </a>
        <li className='text-gray-600 mb-12 text-4xl font-semibold'>お問い合わせ</li>
      </ul>
    </div>
  );
}
