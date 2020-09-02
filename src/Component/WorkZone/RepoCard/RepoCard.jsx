import React from "react";
import s from "./RepoCard.module.css";
import { GoRepoForked, GoEye, GoStar } from "react-icons/go";
export const RepoCard = (props) => {
  return (
    <div className={s.repoCard}>
      <a href={props.url}>{props.name}</a>
      <div className={s.stat}>
        <div>Forks:</div>
        <div className={s.icons}>
          <GoRepoForked />
          {props.forks}
        </div>
        <div>Watchers: </div>
        <div className={s.icons}>
          <GoEye />
          {props.watchers}
        </div>

        <div>Stargazers:</div>
        <div className={s.icons}>
          <GoStar />
          {props.stargazers}
        </div>
      </div>
    </div>
  );
};
