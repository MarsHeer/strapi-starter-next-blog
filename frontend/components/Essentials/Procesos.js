import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import styles from "./Procesos.module.scss";

const Procesos = ({ proceso }) => {
  return (
    <div id={styles.container}>
      {console.log(proceso.descripcion)}
      <h1>
        <em>{proceso.titulo}</em>
      </h1>
      <p>
        <ReactMarkdown>{proceso.descripcion}</ReactMarkdown>
      </p>
    </div>
  );
};

export default Procesos;
