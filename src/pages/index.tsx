import Head from "next/head";

import MainLayout from "@/layout/MainLayout";
import Hero from "@/components/Hero";

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
          <div className="bg-red-500 mx-auto "></div>
        </main>
      </MainLayout>
    </>
  );
}
