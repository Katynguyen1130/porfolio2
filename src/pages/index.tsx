import Head from "next/head";

import MainLayout from "@/layout/MainLayout";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import Introduction from "@/components/Introduction";

export default function Home() {
  return (
    <>
      <Head>
        <title>Katy Nguyen</title>
        <meta name="description" content="Katy Nguyen - Front End Developer" />
        <meta property="og:description" content="Hi, Nice to meet you!" />
        <meta property="og:title" content="Katy Nguyen - Front End" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <main className={""}>
          <Hero />
          <Introduction />
          <About />
          <TechStack />
          <Experience />
        </main>
      </MainLayout>
    </>
  );
}
