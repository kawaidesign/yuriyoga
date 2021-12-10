import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

export default function Navbar() {
  const commonStyle: string = 'hover:text-red-500 duration-200 cursor-pointer';

  return (
    <>
      <ul className='flex justify-around w-2/4 items-center'>
        <Link href='/kids'>
          <a>
            <li className={commonStyle}>キッズヨガ</li>
          </a>
        </Link>
        <li className={commonStyle}>プロフィール</li>
        <a href='https://www.instagram.com/yuri___yoga/' target='_blank' rel='noopener noreferrer'>
          <li className={commonStyle}>
            <FontAwesomeIcon icon={faInstagram} size='lg' />
          </li>
        </a>
        <li className={commonStyle}>お問い合わせ</li>
      </ul>
    </>
  );
}
