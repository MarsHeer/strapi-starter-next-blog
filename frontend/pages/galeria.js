import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Carrouselle from "../components/Essentials/Carrouselle";
import { fetchAPI } from "../lib/api";
import Footer from "../components/Essentials/Footer";

const Galeria = ({ gallery, footer }) => {
  const [carruseles, setCarruseles] = useState();

  useEffect(() => {
    let carruselArray = [];
    Object.keys(gallery.galeria).map((key) => {
      carruselArray.push(<Carrouselle images={gallery.galeria[key]} />);
    });
    setCarruseles(carruselArray);
  }, []);

  return (
    <Layout>
      <Seo seo={gallery.seo} />
      <div className="container">
        {carruseles}

        <Footer footer={footer} />
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [gallery, footer] = await Promise.all([
    fetchAPI("/gallery"),
    fetchAPI("/footer"),
  ]);

  return {
    props: { gallery, footer },
    revalidate: 1,
  };
}

export default Galeria;
