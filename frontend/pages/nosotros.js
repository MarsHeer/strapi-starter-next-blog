import React, { useEffect, useState } from "react";
import { TwitchEmbed } from "react-twitch-embed";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Team from "../components/Essentials/Team";
import Procesos from "../components/Essentials/Procesos";
import { fetchAPI } from "../lib/api";
import Footer from "../components/Essentials/Footer";

const Nosotros = ({ about, footer }) => {
  const [carruseles, setCarruseles] = useState();

  useEffect(() => {}, []);

  return (
    <Layout>
      <Team team={about.member} />
      <div className="container">
        <Procesos proceso={about.proceso} />
        <img
          style={{
            display: "block",
            width: "100%",
            height: "300px",
            maxWidth: "1100px",
            margin: "auto",
            objectFit: "cover",
            objectPosition: "center",
          }}
          src={"http://localhost:1337" + about.banner.url}
        />

        <Footer footer={footer} />
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [about, footer] = await Promise.all([
    fetchAPI("/about"),
    fetchAPI("/footer"),
  ]);

  return {
    props: { about, footer },
    revalidate: 1,
  };
}

export default Nosotros;
