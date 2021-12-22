import type { NextPage } from 'next';
import Layout from '../components/Layout';

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <div className='container font-noto text-center py-4'>
          <h1 className='text-2xl font-semibold tracking-wide mb-4 sm:text-3xl'>
            ご予約・お問い合わせ
          </h1>
        </div>
      </Layout>
    </>
  );
};

export default Home;
