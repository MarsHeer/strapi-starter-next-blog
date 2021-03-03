import React, { useEffect, useState } from "react";
import styles from "./Presupuesto.module.scss";

const Presupuesto = () => {
  useEffect(() => {}, []);

  return (
    <>
      <div id={styles.container}>
        <h1>¡Pide un presupuesto sin ningún tipo de compromiso!</h1>
        <p>Estamos a tu disposición para cualquier clase de consulta</p>
        <div id={styles.buttonDiv}>
          <div id={styles.fillUpDiv}></div>
          <button
            onClick={() => window.open("http://wa.me/0034665441913", "_blank")}
            id={styles.whatsapp}
          >
            Solicitar presupuesto
          </button>
        </div>
      </div>
    </>
  );
};

export default Presupuesto;
