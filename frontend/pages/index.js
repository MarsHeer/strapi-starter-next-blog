import React from "react";
import Articles from "../components/articles";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Carrouselle from "../components/Essentials/Carrouselle";
import Presupuesto from "../components/Essentials/Presupuesto";
import Experience from "../components/Essentials/Experience";
import Testimonials from "../components/Essentials/Testimonials";
import Footer from "../components/Essentials/Footer";
import { fetchAPI } from "../lib/api";

const Home = ({ articles, categories, homepage, footer }) => {
  return (
    <Layout categories={categories}>
      <Seo seo={homepage.seo} />
      <div className="container">
        <Carrouselle images={homepage.hero} />
        <Presupuesto />
        <Testimonials content={homepage.Testimonios} />
        <Experience content={homepage.experiencia} />
        <Footer footer={footer} />
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles, categories, homepage, footer] = await Promise.all([
    fetchAPI("/articles?status=published"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
    fetchAPI("/footer"),
  ]);

  return {
    props: { articles, categories, homepage, footer },
    revalidate: 1,
  };
}

export default Home;
