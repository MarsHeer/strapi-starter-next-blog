import React, { useEffect, useState } from "react";
import styles from "./Contact.module.scss";

const Contact = ({ banners }) => {
  const [content, setContent] = useState();

  useEffect(() => {
    let bannersArray = [];
    Object.keys(banners).map((key) => {
      bannersArray.push(
        <div
          class={styles.banner}
          style={{
            backgroundColor: banners[key].colordefondo,
            backgroundImage: `url(${
              banners[key].imagendefondo[0] != undefined
                ? "http://localhost:1337" + banners[key].imagendefondo[0].url
                : ""
            })`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {banners[key].logo ? (
            <img src={"http://localhost:1337" + banners[key].logo.url} />
          ) : (
            <></>
          )}
          <h1>
            <em>{banners[key].titulo}</em>
          </h1>
          <p>{banners[key].subtitulo}</p>
          <button onClick={() => window.open(banners[key].buttonUrl, "_blank")}>
            {banners[key].buttonText}
          </button>
        </div>
      );
    });
    setContent(bannersArray);
  }, []);

  return <div id={styles.container}>{content}</div>;
};

export default Contact;
