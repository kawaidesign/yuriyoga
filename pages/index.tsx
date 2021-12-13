import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import Layout from '../components/Layout';
import Button from '../components/Button';

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <div className='relative md:flex md:justify-end'>
          {/* SP表示時のメイン画像 */}
          <div className='mb-3 w-full md:hidden'>
            <Image
              src='/images/main.jpg'
              width={480}
              height={400}
              layout={'responsive'}
              objectFit='cover'
              alt='YURI YOGA'
            />
          </div>
          {/* PC表示時のメイン画像 */}
          <div className='hidden md:block md:w-3/5 md:px-0'>
            <Image
              src='/images/main.jpg'
              width={640}
              height={480}
              objectFit='cover'
              alt='YURI YOGA'
              className='rounded-md'
            />
          </div>
          <h1 className='font-readex text-5xl px-2 mb-2 md:text-7xl md:absolute md:left-2 md:top-12 lg:text-8xl lg:top-16'>
            Let&apos;s YOGA!
          </h1>
          <div className='flex flex-col mx-auto w-64 gap-2 md:gap-4 md:absolute md:left-5 md:top-40 md:w-96 lg:top-48'>
            <h2 className='text-l my-2 md:mb-5 lg:mb-7 lg:text-xl font-semibold'>
              平塚市中原公民館、
              <br />
              平塚市内カフェにてレッスン中
            </h2>
            <Button text='レッスンのお申し込み' />
            <Link href='/kids'>
              <a>
                <Button text='キッズヨガはこちら' />
              </a>
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
