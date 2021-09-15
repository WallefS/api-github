import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import axios from "axios";
import Followers from "./git-actions/Followers";
import Following from "./git-actions/Following";
import PublicRepos from "./git-actions/PublicRepos";

const User = props => {
  const [user, setUser] = useState({});

  const stats = [
    {
      name: "Repository",
      value: user.public_repos,
      url: `/user/${props.match.params.username}/repos`
    },
    {
      name: "Followers",
      value: user.followers,
      url: `/user/${props.match.params.username}/followers`
    },
    {
      name: "Following",
      value: user.following,
      url: `/user/${props.match.params.username}/following`
    }
  ];

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://api.github.com/users/${props.match.params.username}`
      );
      setUser(result.data);
    };

    fetchData();
  }, [props.match.params.username]);

 
  const renderStat = stat => {
    return (
      <li key={stat.name} className="user-info__stat">
        <Link to={stat.url}>
          <p className="user-info__stat-value">{stat.value}</p>
          <p className="user-info__stat-name">{stat.name}</p>
        </Link>
      </li>
    );
  };

  return !user ? (

    <div className="user-page">Carregando...</div>
  ) : (
    <div className="user-page">
      <div className="user-info">
        <Link className="user-info__text" to={`/user/${user.login}`}>
          <img
			
            className="user-info__avatar"
            src={user.avatar_url}
            alt={`${user.login} avatar`}
          />
          <h2 className="user-info__title">
           {user.login} ({user.name})
          </h2>
          <p className="user-info__bio">{user.bio}</p>
        </Link>
        <ul className="user-info__stats">{stats.map(renderStat)}</ul>
      </div>
      <Route path={`${props.match.path}/followers`} component={Followers} />
      <Route path={`${props.match.path}/following`} component={Following} />
      <Route path={`${props.match.path}/repos`} component={PublicRepos} />
    </div>
  );
};

export default User;
