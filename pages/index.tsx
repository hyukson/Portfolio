import type { NextPage } from "next";
import Head from "next/head";
import LineAni from "../components/atoms/LineAni";

import Rap from "../components/atoms/Rap";
import Visual from "../components/atoms/Visual";
import SideNavigation from "../components/molecules/SideNavigation";

import AboutMe from "../components/organisms/AboutMe";

const Home: NextPage = () => {
  const NavList = ["INTRO", "ABOUT ME"];

  return (
    <div>
      <Head>
        <title>Portfolio</title>
      </Head>

      <SideNavigation NavList={NavList} />

      <LineAni />
      <Rap>
        <Visual />

        <AboutMe />
      </Rap>
    </div>
  );
};

export default Home;
