import React, { useEffect, useState } from "react";
import styles from "./Testimonials.module.scss";

const Testimonials = ({ content }) => {
  useEffect(() => {}, []);

  return (
    <>
      <div id={styles.container}>
        <div class={styles.testimonial}>
          <p>
            <em>"{content.Testimonio1}"</em>
          </p>
          <p class={styles.clients}>- {content.Autor1}</p>
        </div>
        <div class={styles.testimonial}>
          <p>
            <em>"{content.Testimonio2}"</em>
          </p>
          <p class={styles.clients}>- {content.Autor2}</p>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
