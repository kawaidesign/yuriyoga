import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Seo from '../components/Seo';

import Layout from '../components/Layout';
import Button from '../components/Button';

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Seo
          pageImg={'https://yuriyoga.vercel.app/images/ogp.jpg'}
          pageImgWidth={1280}
          pageImgHeight={960}
        />
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
          <div className='hidden md:block md:w-3/5 md:px-0 xl:w-2/3'>
            <Image
              src='/images/main.jpg'
              width={860}
              height={640}
              objectFit='cover'
              alt='YURI YOGA'
              className='rounded-md'
            />
          </div>

          <h1 className='font-readex text-center text-5xl mb-2 md:text-7xl md:absolute md:left-2 md:top-12 lg:text-8xl lg:top-16 xl:top-32'>
            Let&apos;s YOGA!
          </h1>

          <div className='flex flex-col mx-auto w-64 gap-2 md:gap-4 md:absolute md:left-5 md:top-40 md:w-96 lg:top-56 xl:top-64'>
            <h2 className='text-l my-2 md:mb-5 lg:mb-7 lg:text-2xl font-semibold'>
              平塚市中原公民館、
              <br />
              平塚市内カフェにてレッスン中
            </h2>
            <Link href='/contact'>
              <a>
                <Button text='ご予約・お問い合わせ' />
              </a>
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
