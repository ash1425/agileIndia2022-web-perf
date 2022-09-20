import { useEffect, useState } from "react";
import { Octokit } from "octokit";
import "./Contributors.css";

type Props = {
  repo: string;
  owner: string;
};

type Contributor = {
  name?: string;
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
              name: c.name,
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
            <div>Id: {contributor.id}</div>
            <div>Name: {contributor.name}</div>
            <div>type: {contributor.type}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Contributors;
