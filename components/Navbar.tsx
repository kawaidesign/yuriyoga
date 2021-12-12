import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

export default function Navbar() {
  const commonStyle: string = 'hover:text-red-500 duration-200 cursor-pointer';

  return (
    <>
      <div className='px-4 sm:px-0 md:hidden'>
        <p className={commonStyle}>メニュー</p>
      </div>
      <ul className='hidden md:flex justify-around gap-6 items-center invisible md:visible'>
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
