import React from "react";
import MainLayout from "@/layout/MainLayout";
import Head from "next/head";

function work() {
  return (
    <>
      <Head>
        <title>Katy Nguyen</title>
        <meta name="description" content="Katy Nguyen - Front End Developer" />
        <meta property="og:description" content="My work experiences!" />
        <meta property="og:title" content="Katy Nguyen - Front End" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <div>work</div>
      </MainLayout>
    </>
  );
}

export default work;
