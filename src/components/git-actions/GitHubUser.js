import React from "react";
import { Link } from "react-router-dom";

const GitHubUser = ({ user }) => {
  return (
    <Link to={`/user/${user.login}`}>
      <div className="user">
        <img className="user-info__avatar" src={user.avatar_url} alt="" />
        <p >{user.login}</p>
      </div>
    </Link>
  );
};

export default GitHubUser;
