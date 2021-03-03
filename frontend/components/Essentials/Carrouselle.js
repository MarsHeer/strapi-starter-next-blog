import React, { useEffect, useState } from "react";
import styles from "./Carrouselle.module.scss";

const Carrouselle = ({ images }) => {
  const [carrouselleImages, setCarrouselleImages] = useState();
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    let imageArray = [];
    Object.keys(images.images).map((key) => {
      imageArray.push(
        <div
          class={styles.carrImg}
          style={{
            backgroundImage: `url('http://localhost:1337${images.images[key].url}')`,
            transform: `translateX(-${currentSlide}00%)`,
          }}
        ></div>
      );
      setCarrouselleImages(imageArray);
    });
  }, [currentSlide]);

  return (
    <>
      {images.titulo ? (
        <h1 class={styles.title} style={{ backgroundColor: images.color }}>
          {images.titulo}
        </h1>
      ) : (
        <></>
      )}
      <div id={styles.container}>
        <div id={styles.carrouselle}>{carrouselleImages}</div>
        <div
          onClick={() =>
            currentSlide != images.images.length - 1
              ? setCurrentSlide(currentSlide + 1)
              : setCurrentSlide(0)
          }
          id={styles.forwardArrow}
        ></div>
        <div
          onClick={() =>
            currentSlide != 0
              ? setCurrentSlide(currentSlide - 1)
              : setCurrentSlide(images.images.length - 1)
          }
          id={styles.backwardArrow}
        ></div>
      </div>
    </>
  );
};

export default Carrouselle;
