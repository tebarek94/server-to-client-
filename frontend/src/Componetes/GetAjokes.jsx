import React, { useEffect, useState } from "react";

function GetAjokes() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null); // To handle errors

  useEffect(() => {
    fetch("http://localhost:5000/random")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Parse the response as JSON
      })
      .then((data) => setData(data)) // Set the data into the state
      .catch((err) => setError(err.message)); // Handle any errors
  }, []);

  if (error) {
    return <div>Error: {error}</div>; // Display error if there is one
  }

  return (
    <div>
      {data.length === 0 ? (
        <p>Loading...</p> // Show loading message until data is fetched
      ) : (
        <ul>
          {data.map((data) => (
            <li key={data.id}>{data.jokeText}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default GetAjokes;
