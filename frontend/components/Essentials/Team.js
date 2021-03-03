import React, { useEffect, useState } from "react";
import styles from "./Team.module.scss";

const Team = ({ team }) => {
  const [teamDivs, setTeamDivs] = useState();
  useEffect(() => {
    let teamArray = [];
    Object.keys(team).map((key) => {
      teamArray.push(
        <div class={styles.member}>
          <img src={"http://localhost:1337" + team[key].imagen.url} />
          <h1>{team[key].name}</h1>
          <p>{team[key].title}</p>
        </div>
      );
    });
    setTeamDivs(teamArray);
  }, []);

  return (
    <div id={styles.container}>
      <h1 id={styles.teamHeader}>
        <em>Conoce Al Equipo</em>
      </h1>
      {teamDivs}
    </div>
  );
};

export default Team;
