import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import Button from '../components/Button';

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <div className='relative container font-noto'>
          <div style={{ borderRadius: '8px' }} className='absolute right-0 top-0'>
            <Image
              src='/images/main.jpg'
              width={640}
              height={480}
              objectFit='cover'
              alt='YURI YOGA'
              className='rounded-lg'
            />
          </div>
          <h1 className='text-8xl font-readex absolute left-5 top-16'>Let's YOGA!</h1>
          <div className='flex flex-col gap-4 absolute left-5 top-48'>
            <h2 className='mb-7 text-xl font-semibold'>
              平塚市中原公民館、
              <br />
              平塚市内カフェにてレッスン中
            </h2>
            <Button text='レッスンのお申し込み' />
            <Button text='キッズヨガはこちら' />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
