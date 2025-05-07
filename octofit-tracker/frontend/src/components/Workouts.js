import React, { useEffect, useState } from 'react';


function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch('https://obscure-tribble-57w75grrp6j37rx-8000.app.github.dev/api/workouts/')
      .then(res => res.json())
      .then(data => setWorkouts(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="card mt-4">
      <div className="card-body">
        <h2 className="card-title text-primary mb-4">Workouts</h2>
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th scope="col">Workout Name</th>
                <th scope="col">Description</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(workouts) && workouts.map(workout => (
                <tr key={workout._id}>
                  <td>{workout.name}</td>
                  <td>{workout.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Workouts;
