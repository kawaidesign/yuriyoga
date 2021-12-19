import type { NextPage } from 'next';
import Layout from '../components/Layout';

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <div className='container font-noto text-center py-4'>
          <h1 className='text-md font-semibold tracking-wide mb-4 sm:text-lg'>
            お問い合わせ・レッスンのお申し込み
          </h1>
        </div>
      </Layout>
    </>
  );
};

export default Home;
