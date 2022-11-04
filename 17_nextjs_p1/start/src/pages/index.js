import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Link href="/07_router">
        <a>/07_router</a>
      </Link>
    </>
  );
}
