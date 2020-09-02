import React from "react";
import { useSelector } from "react-redux";
import { RepoCard } from "./WorkZone/RepoCard/RepoCard";

export const WorkZone = () => {
  const isFetching = useSelector((state) => state.isFetching);
  const data = useSelector((state) => state.data);
  const error = useSelector((state) => state.error);
  let repoElement = data.map((i) => (
    <RepoCard
      key={i.id}
      name={i.name}
      url={i.html_url}
      forks={i.forks}
      watchers={i.watchers}
      stargazers={i.stargazers_count}
    />
  ));
  if (error) {
    repoElement = "Oop, we have a problem. Refresh page";
  }
  return <div>{isFetching ? <p>Loading</p> : repoElement}</div>;
};
