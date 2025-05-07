import React, { useEffect, useState } from 'react';


function Leaderboard() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetch('https://obscure-tribble-57w75grrp6j37rx-8000.app.github.dev/api/leaderboard/')
      .then(res => res.json())
      .then(data => setEntries(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="card mt-4">
      <div className="card-body">
        <h2 className="card-title text-primary mb-4">Leaderboard</h2>
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th scope="col">User</th>
                <th scope="col">Score</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(entries) && entries.map(entry => (
                <tr key={entry._id}>
                  <td>{entry.user}</td>
                  <td>{entry.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
