import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Navbar() {
  const commonStyle: string = 'hover:text-red-500 duration-200 cursor-pointer';

  return (
    <>
      <ul className='flex justify-around w-2/4 items-center'>
        <li className={commonStyle}>キッズヨガ</li>
        <li className={commonStyle}>プロフィール</li>
        <li className={commonStyle}>
          <FontAwesomeIcon icon={faInstagram} size='lg' />
        </li>
        <li className={commonStyle}>お問い合わせ</li>
      </ul>
    </>
  );
}
