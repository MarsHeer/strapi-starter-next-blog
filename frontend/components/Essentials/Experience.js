import React, { useEffect, useState } from "react";
import styles from "./Experience.module.scss";

const Experience = ({ content }) => {
  useEffect(() => {}, []);

  return (
    <>
      <div id={styles.container}>
        <div class={styles.experienceContainer}>
          <h1>
            <em>{content.cantidad1}</em>
          </h1>
          <p>{content.experiencia1}</p>
        </div>
        <div class={styles.experienceContainer}>
          <h1>
            <em>{content.cantidad2}</em>
          </h1>
          <p>{content.experiencia2}</p>
        </div>
        <div class={styles.experienceContainer}>
          <h1>
            <em>{content.cantidad3}</em>
          </h1>
          <p>{content.experiencia3}</p>
        </div>
        <div class={styles.experienceContainer}>
          <h1>
            <em>{content.cantidad4}</em>
          </h1>
          <p>{content.experiencia4}</p>
        </div>
      </div>
    </>
  );
};

export default Experience;
