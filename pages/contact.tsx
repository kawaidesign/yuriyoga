import type { NextPage } from 'next';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import { FadeIn } from '../components/FadeIn';

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Seo
          pageTitle={'Contact'}
          pageImg={'https://yuriyoga.vercel.app/images/ogp.jpg'}
          pageImgWidth={1280}
          pageImgHeight={960}
        />
        <div className='container font-noto text-center py-4'>
          <h1 className='text-xl font-semibold tracking-wide mb-4 sm:text-2xl'>
            ご予約・お問い合わせ
          </h1>
        </div>

        <div className='px-4 container flex flex-col sm:flex-row sm:justify-center gap-6 sm:gap-9 sm:px-0'>
          <FadeIn>
            <section className='bg-gray-200 p-4 rounded-lg text-center w-full sm:w-[320px] lg:w-[400px] h-40 sm:h-48'>
              <h2 className='text-md text-gray-600 mb-8 sm:mb-12'>メールからのご連絡はこちら</h2>
              <p className='text-xl font-readex sm:text-md lg:text-2xl'>y0806.a0726@gmail.com</p>
            </section>
          </FadeIn>
          <FadeIn>
            <section className='bg-gray-200 p-4 rounded-lg text-center w-full sm:w-[320px] lg:w-[400px] h-40 sm:h-48'>
              <h2 className='text-md text-gray-600 mb-8 sm:mb-12'>LINEからのご連絡はこちら</h2>
              <a
                href='http://line.me/ti/p/%40321wmfzo'
                className='bg-black text-white text-md tracking-wide rounded-full h-10 w-48 mx-auto flex items-center text-center justify-center hover:bg-red-500 duration-200'
              >
                LINE友達追加
              </a>
            </section>
          </FadeIn>
        </div>
      </Layout>
    </>
  );
};

export default Home;
