import React from "react";

const GitHubRepo = ({ user }) => {
  return (
    <div className="user-repository">
      <a href={`${user.html_url}`}target="_blank">
        <p>{user.full_name}</p>
      </a>
    </div>
  );
};

export default GitHubRepo;
