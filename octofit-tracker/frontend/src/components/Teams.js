import React, { useEffect, useState } from 'react';


function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://obscure-tribble-57w75grrp6j37rx-8000.app.github.dev/api/teams/')
      .then(res => res.json())
      .then(data => setTeams(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="card mt-4">
      <div className="card-body">
        <h2 className="card-title text-primary mb-4">Teams</h2>
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th scope="col">Team Name</th>
                <th scope="col">Members</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(teams) && teams.map(team => (
                <tr key={team._id}>
                  <td>{team.name}</td>
                  <td>{team.members && team.members.length}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Teams;
