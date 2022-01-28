import type { NextPage } from "next";
import Head from "next/head";
import LineAni from "../components/atoms/LineAni";

import Rap from "../components/atoms/Rap";
import Visual from "../components/atoms/Visual";

import AboutMe from "../components/organisms/AboutMe";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
      </Head>

      <LineAni />
      <Rap>
        <Visual />

        <AboutMe />
      </Rap>
    </div>
  );
};

export default Home;
