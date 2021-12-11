import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import Layout from '../components/Layout';
import Button from '../components/Button';

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <div className='md:relative'>
          <div
            style={{ borderRadius: '8px' }}
            className='mx-auto px-4 w-auto md:w-3/5 md:float-right md:px-0 lg:w-auto'
          >
            <Image
              src='/images/main.jpg'
              width={640}
              height={480}
              objectFit='cover'
              alt='YURI YOGA'
              className='rounded-lg'
            />
          </div>
          <h1 className='font-readex text-6xl md:text-7xl md:absolute md:left-5 md:top-12 lg:text-8xl lg:left-5 lg:top-16'>
            Let&apos;s YOGA!
          </h1>
          <div className='flex flex-col gap-4 absolute left-5 top-40 lg:top-48'>
            <h2 className='text-l mb-5 lg:mb-7 lg:text-xl font-semibold'>
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
