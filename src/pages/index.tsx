import Head from "next/head";

import MainLayout from "@/layout/MainLayout";
import Hero from "@/components/Hero";
import About from "@/components/About";

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
          <div className=" text-[30px] text-center font-bold mt-[60px] font-monterat text-darkGray  dark:text-yellow mx-auto">
            <p className="text-center">Oops! This site is under construction! </p>
          </div>
          <Hero />
          <About />
          <div className="bg-red-500 mx-auto "></div>
        </main>
      </MainLayout>
    </>
  );
}
