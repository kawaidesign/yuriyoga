import { NextPage } from 'next';
import Header from './Header';

type Props = {
  children?: React.ReactNode;
  home?: boolean;
};

const Layout: NextPage<Props> = ({ children, home }: Props) => {
  return (
    <>
      <div className='container mx-auto font-noto xl:max-w-7xl'>
        <Header />
        <main>{children}</main>
        <p className='text-gray-500 text-xs my-6 text-center tracking-wider'>©︎YURI YOGA 2022</p>
      </div>
    </>
  );
};

export default Layout;
