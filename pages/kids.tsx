import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <div className='relative container font-noto text-center p-12'>
          <h1 className='text-5xl font-semibold'>キッズヨガ</h1>
        </div>
      </Layout>
    </>
  );
};

export default Home;