import React, { useEffect, useState } from "react";

function FillterDta() {
  const [fillterData, setFillterdata] = useState([]);
  const [error, setError] = useState(null); // For error handling

  useEffect(() => {
    fetch("http://localhost:5000/jokes")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch jokes");
        }
        return response.json();
      })
      .then((data) => setFillterdata(data))
      .catch((err) => setError(err.message)); // Handle errors
  }, []); // Empty dependency array means this effect runs only once after the first render

  // Render loading or error message
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Render the fetched data
  return (
    <div>
      {fillterData.length === 0 ? (
        <p>Loading...</p> // Show loading until the data is fetched
      ) : (
        <ul>
          {fillterData.map((joke, index) => (
            <li key={index}>{joke}</li> // Assuming the jokes are strings
          ))}
        </ul>
      )}
    </div>
  );
}

export default FillterDta;
