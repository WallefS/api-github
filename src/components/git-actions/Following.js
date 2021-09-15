import React, { useState, useEffect } from "react";
import axios from "axios";
import GitHubUser from "./GitHubUser";

const Following = props => {
  const [following, setFollowing] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://api.github.com/users/${props.match.params.username}/following`
      );
      setFollowing(result.data);
    };
    fetchData();
  }, [props.match.params.username]);

  return !following ? (
    <div>Carregando Seguidores!</div>
  ) : (
    <div className="following-page">
      <h2>{props.match.params.username} follows:</h2>
      {following.map(user => (
        <GitHubUser user={user} />
      ))}
   
      
    </div>
  );
};

export default Following;
