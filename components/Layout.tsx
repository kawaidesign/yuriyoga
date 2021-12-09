import { NextPage } from 'next';
import Header from './Header';

type Props = {
  children?: React.ReactNode;
  home?: boolean;
};

const Layout: NextPage<Props> = ({ children, home }: Props) => {
  return (
    <>
      <div className='w-screen mx-auto max-w-screen-lg font-noto'>
        <Header />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
