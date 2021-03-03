import React, { useEffect, useState } from "react";
import { TwitchEmbed } from "react-twitch-embed";
import styles from "./Twitch.module.scss";

const Twitch = ({ channel }) => {
  useEffect(() => {}, []);

  return (
    <div id={styles.container}>
      <h1>Directos de Twitch</h1>
      <TwitchEmbed channel={channel} id="twitch-embed" theme="light" />
    </div>
  );
};
export default Twitch;
