import React, { useEffect, useState } from "react";
import { TwitchEmbed } from "react-twitch-embed";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Contact from "../components/Essentials/Contact";
import { fetchAPI } from "../lib/api";
import Footer from "../components/Essentials/Footer";

const Iniciate = ({ contact, footer }) => {
  const [carruseles, setCarruseles] = useState();

  useEffect(() => {}, []);

  return (
    <Layout>
      <div id="container">
        <Contact banners={contact.banner} />

        <Footer footer={footer} />
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [contact, footer] = await Promise.all([
    fetchAPI("/contact"),
    fetchAPI("/footer"),
  ]);

  return {
    props: { contact, footer },
    revalidate: 1,
  };
}

export default Iniciate;
