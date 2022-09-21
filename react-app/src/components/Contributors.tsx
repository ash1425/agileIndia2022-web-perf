import { useEffect, useState } from "react";
import { Octokit } from "octokit";
import "./Contributors.css";

type Props = {
  repo: string;
  owner: string;
};

type Contributor = {
  login?: string;
  id?: string;
  avatar_url?: string;
  type: string;
};

const Contributors = ({ repo, owner }: Props) => {
  const [contributors, setContributors] = useState<Contributor[]>([]);

  useEffect(() => {
    const octokit = new Octokit();
    octokit.rest.repos
      .listContributors({ repo: repo, owner: owner })
      .then((response) => {
        const contributors = response.data.map(
          (c) =>
            ({
              login: c.login,
              id: c.id,
              type: c.type,
              avatar_url: c.avatar_url,
            } as Contributor)
        );

        setContributors(contributors);
      })
      .catch((e) => {
        console.error("ERROR ", e);
      });
  }, []);

  return (
    <div>
      {contributors.map((contributor, index) => {
        return (
          <div key={index} className={"Contributor"}>
            <div>
              <img src={contributor.avatar_url} className={"Avatar"} />
            </div>
            <div>
              <span className={"Key"}>Id: </span>
              {contributor.id}
            </div>
            <div>
              <span className={"Key"}>Login: </span>
              {contributor.login}
            </div>
            <div>
              <span className={"Key"}>Type: </span>
              {contributor.type}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Contributors;
