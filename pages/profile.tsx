import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import Button from '../components/Button';
import Link from 'next/link';
import { FadeIn } from '../components/FadeIn';

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <div className='container font-noto text-center py-4'>
          <FadeIn>
            <div className='w-[120px] mx-auto my-4 sm:w-[160px]'>
              <Image
                src='/images/profile.jpg'
                width={160}
                height={160}
                objectFit='cover'
                alt='YURI YOGA'
                className='rounded-full'
              />
            </div>
            <h2 className='text-xs tracking-wide text-gray-600'>yogini×mama×保育士</h2>
            <h1 className='font-semibold text-2xl tracking-wide mb-16'>YURI</h1>
          </FadeIn>
          <div className='m-auto px-4 text-justify sm:w-[480px]'>
            <FadeIn>
              <section className='mb-16'>
                <h3 className='text-base font-semibold h-10 sm:text-xl'>ヨガに出会うきっかけ</h3>
                <p className='text-gray-600 text-sm leading-loose'>
                  夫の転勤で地元を離れ、知らない土地で何か夢中になれるものはないかと思い、フィットネス感覚で始めたのがヨガでした。
                  ヨガをしていると余計なことを考えず、自然と心と体が整っていく感覚に魅力を感じ、多い時には週に7回レッスンを受けているときもありました。
                </p>
              </section>
            </FadeIn>
            <FadeIn>
              <section className='mb-16'>
                <h3 className='text-base font-semibold h-10 sm:text-xl'>
                  ヨガインストラクターになるきっかけ
                </h3>
                <p className='text-gray-600 text-sm leading-loose'>
                  出産後、2時間おきにやってくる夜間授乳…毎日の寝不足と子育てで「一人になる時間がほしい。ヨガがしたい。」そんな気持ちが芽生えるようになりました。産後もヨガに行くと心と体が整う感覚に救われました。
                  ヨガで整う感覚を伝えたいと思い、保育士として働きながらヨガを学ぶ決意をし、RYT200を修了しました。
                  RYT200修了後から、保育士・ヨガインストラクターとして活動をしています。
                  息子が４歳になり、息子と一緒にヨガをする楽しさを知り、新たにキッズヨガを学んでキッズヨガのインストラクターとしても活動を始めました。
                </p>
              </section>
            </FadeIn>
            <FadeIn>
              <section className='mb-16'>
                <h3 className='text-base font-semibold h-10 sm:text-xl'>YURI YOGA</h3>
                <p className='text-gray-600 text-sm leading-loose'>
                  妻でもない、ママでもない、先生でもない、YURIの時間をつくる大切さに気づき、ヨガの時間はそんな自分を探求する時間にしています。
                  自分と向き合う時間があることで心と体が整って、穏やかに過ごせる日が増えてきました。ママの心と体が元気だと、家族の元気につながると感じています。
                  いつからでも、何歳からでも、進化できる!ママだからと諦めず、自分の可能性を知ってほしい!私が日々体感したことをお伝えしています。
                </p>
              </section>
            </FadeIn>
            <FadeIn>
              <section className='mb-12 p-4 bg-[#efebe3] rounded'>
                <h4 className='text-gray-800 text-sm mb-2'>主な資格</h4>
                <ul className='text-gray-800 text-sm leading-relaxed tracking-wide'>
                  <li>・幼稚園教諭二種免許</li>
                  <li>・保育士資格</li>
                  <li>・RYT200</li>
                  <li>・Five Elements Yoga108h修了</li>
                </ul>
              </section>
            </FadeIn>
          </div>
        </div>
        <div className='w-full flex justify-center'>
          <Link href='/'>
            <a>
              <Button text='レッスンのお申し込み' />
            </a>
          </Link>
        </div>
      </Layout>
    </>
  );
};

export default Home;
