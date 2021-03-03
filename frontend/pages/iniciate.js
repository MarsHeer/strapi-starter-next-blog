import React, { useEffect, useState } from "react";
import { TwitchEmbed } from "react-twitch-embed";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Twitch from "../components/Essentials/Twitch";
import Videos from "../components/Essentials/Videos";
import { fetchAPI } from "../lib/api";
import Footer from "../components/Essentials/Footer";

const Iniciate = ({ iniciate, footer }) => {
  const [carruseles, setCarruseles] = useState();

  useEffect(() => {}, []);

  return (
    <Layout>
      <Seo seo={iniciate.seo} />
      <div id="container">
        <Twitch channel={iniciate.twitch} />
        <Videos videos={iniciate.youtube} />

        <Footer footer={footer} />
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [iniciate, footer] = await Promise.all([
    fetchAPI("/iniciate"),
    fetchAPI("/footer"),
  ]);

  return {
    props: { iniciate, footer },
    revalidate: 1,
  };
}

export default Iniciate;
