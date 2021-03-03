import React, { useEffect, useState } from "react";
import styles from "./Footer.module.scss";

const Footer = ({ footer }) => {
  const [columns, setColumns] = useState();

  useEffect(() => {
    let columnsArray = [];
    Object.keys(footer.column).map((key) => {
      let itemsArray = [];
      Object.keys(footer.column[key].hijo).map((childKey) => {
        itemsArray.push(
          <p
            onClick={() =>
              window.open(footer.column[key].hijo[childKey].url, "_blank")
            }
          >
            {footer.column[key].hijo[childKey].nombre}
          </p>
        );
      });
      columnsArray.push(
        <div id={styles.column}>
          <h1>{footer.column[key].titulo}</h1>
          {itemsArray}
        </div>
      );
    });
    setColumns(columnsArray);
  }, []);

  return (
    <div id={styles.footer}>
      <div id={styles.innerFooter}>
        {columns}
        <div id={(styles.column, styles.copyrightHolder)}>
          <div id={styles.grow}></div>
          <p id={styles.copyright}>
            © {new Date().getFullYear()} | 3Dimensiones
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
