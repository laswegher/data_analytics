import Head from 'next/head';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import MemberShip from '../components/MemberShip';
import Newslater from '../components/Newslater';
import Section from '../components/Section';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Data Analytics</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

      <Hero />

      <Section />

      <Newslater />

      <MemberShip />

      <Footer />
    </div>
  );
}
