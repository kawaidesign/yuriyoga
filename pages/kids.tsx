import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import Button from '../components/Button';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <div className='container font-noto text-center py-4'>
          <h1 className='text-3xl font-readex mb-4'>YURI YOGA for kids</h1>
          <div className='w-full mx-auto mb-4'>
            <Image
              src='/images/kids.jpg'
              width={720}
              height={440}
              objectFit='cover'
              alt='YURI YOGA'
              className='sm:rounded-md'
            />
          </div>
          <h1 className='font-semibold text-lg mb-4'>
            YURIYOGA for kidsでは
            <br />
            生きる力を育む素直な時間をテーマに
            <br />
            キッズヨガをお伝えしています。
          </h1>
          <p className='m-auto px-4 text-gray-600 text-justify text-sm leading-loose mb-4 sm:w-5/6'>
            日本ではまだ馴染みの少ないキッズヨガ。アメリカでは授業の１つに組み込まれています。
            キッズヨガの時間の中でアーサナや呼吸法を通して、自分の体を知り、心（素直な気持ち）に気づいていく。
            アーサナでは色々なポーズに挑戦し、「やってみよう!」「できた!」の心を育てます。もちろんできなくても大丈夫。挑戦した自分を認めて、次の「もっとやってみたい!」に繋げていきます。
            挑戦する気持ち、できたときの喜びを感じることで子どもたちの自己肯定感アップに繋がります。
            現代の子どもたちはゲームをしたり、タブレットを見る時間が多くなり、自分を支える体幹の筋力がなく姿勢が悪くなってしまう子が増えています。楽しくアーサナを練習することで姿勢改善や体幹力アップもしていきます。
            <br />
            <br />
            マスク生活が続いている子どもたち。呼吸が浅くなってイライラしたり、疲れやすくなったりしていませんか？
            呼吸法では自分の呼吸を知り、ゆったりとした呼吸を練習していきます。繰り返し練習することで、なんだかイライラしているなと感じた時に、自分で呼吸をコントロールすることで感情のコントロールをしていく。
            <br />
            <br />
            小さい頃からヨガを知っておけば、とても生きやすくなると考えています。
            体の使い方や、感情のコントロールのし方を知ることは生きる力を育むこと。
            たくさんのことを吸収する幼少期に関われる大人の一人として、子どもの純粋でキラキラした目、素直で真っ直ぐな心を受けとめ、キッズヨガを楽しんでいます。
          </p>
        </div>
        <div className='w-full flex justify-center'>
          <Link href='/kids'>
            <a>
              <Button text='キッズヨガはこちら' />
            </a>
          </Link>
        </div>
      </Layout>
    </>
  );
};

export default Home;
