import type { NextPage } from "next";
import Layout from "./Layout";
import NavigationBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Jumbotron from "@/components/Jumbotron";
import Announcement from "@/components/Announcement";
import ReactParticles from "@/components/reactparticles";
import SupportedBanks from "@/components/SupportedBanks";
import Faq from "@/components/Faq";
import Price from "@/components/Price";

import { Container, Spacer } from "@nextui-org/react";

const Home: NextPage = () => {
  return (
    <Layout>
      <title>COLIZEUM MONGOLIA</title>

      <ReactParticles />
      <Announcement />
      {/* <NavigationBar /> */}
      <Container
        css={{
          maxWidth: "1400px",
          "@md": {
            px: 50,
          },
        }}
      >
        <Spacer y={2} />
        <Price />
        {/* <Jumbotron /> */}
        {/* <Spacer y={3} /> */}
        {/* <SupportedBanks /> */}
        {/* <Spacer y={3} /> */}
        {/* <Faq /> */}
        {/* Features */}
        {/* Messenger Chat api */}

        <Footer />
      </Container>
    </Layout>
  );
};
export default Home;
