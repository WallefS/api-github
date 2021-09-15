import React, { useState, useEffect } from "react";
import axios from "axios";
import GitHubUser from "./GitHubUser";

const Followers = props => {
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://api.github.com/users/${props.match.params.username}/followers`
      );
      setFollowers(result.data);
    };
    fetchData();
  }, [props.match.params.username]);

  return !followers ? (
    <div>Carregando Seguidores!!</div>
  ) : (
    <div className="followers-page">
      <h2>{props.match.params.username} followers</h2>
      {followers.map(user => (
        <GitHubUser user={user} />
      ))}
    </div>
  );
};

export default Followers;
