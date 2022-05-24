import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Counter from '../src/components/Counter';
import { useDispatch, useSelector } from 'react-redux';
import { CounterState } from '../src/slice/counterSlice';

const Home: NextPage = () => {
  // src/store/store.ts の counter を指している。
  const count = useSelector((state: { counter: CounterState }) => state);

  return (
    <div className={styles.container}>
      <Head>
        <title>My Portfolio_Redux</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <p>counter: {count.counter.value}</p>
      </div>
    </div>
  );
};

export default Home;
