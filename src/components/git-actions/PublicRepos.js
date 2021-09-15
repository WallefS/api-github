import React, { useState, useEffect } from "react";
import axios from "axios";
import GitHubRepo from "./GitHubRepo";

const PublicRepos = props => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://api.github.com/users/${props.match.params.username}/repos`
      );
      setRepos(result.data);
    };
    fetchData();
  }, [props.match.params.username]);

  return !repos ? (
    <div>Carregando...</div>
  ) : (
    <div className="following-page">
      <h2>{props.match.params.username} Repositories:</h2>

      {repos.map(user => (
          
        <GitHubRepo user={user} />
       
      ))}
   
      
    </div>
  );
};

export default PublicRepos;
