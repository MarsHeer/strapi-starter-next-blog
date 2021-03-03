import React, { useEffect, useState } from "react";
import Youtube from "react-youtube-embed";
import styles from "./Videos.module.scss";

const Videos = ({ videos }) => {
  const [videoDivs, setVideoDivs] = useState();
  useEffect(() => {
    let videoArray = [];
    Object.keys(videos).map((key) => {
      videoArray.push(
        <div id={styles.youtube}>
          <Youtube id={videos[key].videoid} />
        </div>
      );
    });
    setVideoDivs(videoArray);
  }, []);

  return (
    <div id={styles.container}>
      <h1>Video tutoriales</h1>
      <div id={styles.tutorials}>{videoDivs}</div>
    </div>
  );
};
export default Videos;
