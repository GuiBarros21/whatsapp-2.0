import Head from 'next/head';
import Sidebar from '../components/Sidebar';
import styled from 'styled-components';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Whatsapp 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Sidebar />
    </div>
  )
}
