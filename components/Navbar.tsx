import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import React, { useState } from 'react';

import Menu from './Menu';

export default function Navbar() {
  const commonStyle: string = 'text-xs lg:text-sm hover:text-red-500 duration-200 cursor-pointer';
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      {/* SP表示時 */}
      {openMenu ? (
        <div className='z-30 text-gray-900 text-l md:hidden'>
          <button onClick={() => setOpenMenu((prevState) => !prevState)}>閉じる</button>
        </div>
      ) : (
        <div className='z-30 md:hidden'>
          <button onClick={() => setOpenMenu((prevState) => !prevState)}>
            <svg className='h-6 w-6 fill-current' viewBox='0 0 24 24'>
              <path d='M24 8h-24v-3h24v4zm0 5h-24v3h24v-4zm0 8h-24v3h24v-4z' />
            </svg>
          </button>
        </div>
      )}

      {/* SP表示時 全画面メニュー */}
      {openMenu ? <Menu /> : undefined}

      {/* PC表示時 */}
      <ul className='hidden md:flex justify-around gap-6 items-center invisible md:visible'>
        <Link href='/profile'>
          <a>
            <li className={commonStyle}>プロフィール</li>
          </a>
        </Link>
        <Link href='/lesson'>
          <a>
            <li className={commonStyle}>レッスン紹介</li>
          </a>
        </Link>
        <Link href='/contact'>
          <a>
            <li className={commonStyle}>お問い合わせ</li>
          </a>
        </Link>
        <a href='https://www.instagram.com/yuri___yoga/' target='_blank' rel='noopener noreferrer'>
          <li className={commonStyle}>
            <FontAwesomeIcon icon={faInstagram} size='lg' />
          </li>
        </a>
      </ul>
    </>
  );
}
