import React, { useEffect, useState } from "react";

const TableList = () => {
  const [cameraData, setCameraData] = useState([]);
  const url = "https://api-app-staging.wobot.ai/app/v1/fetch/cameras";
  const token = import.meta.env.VITE_API_TOKEN;

  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCameraData(data?.data || []);
      })
      .catch((err) => console.error("API fetch error:", err));
  }, []);

  return (
    <div>
      <h2>Camera Table</h2>
      <table border="1" cellPadding="8" cellSpacing="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Recorder</th>
            <th>Tasks</th>
            <th>Status</th>
            <th>Current Status</th>
            <th>Health - Cloud</th>
            <th>Health - Device</th>
            <th>Has Warning</th>
          </tr>
        </thead>
        <tbody>
          {cameraData.map((camera) => (
            <tr key={camera.id}>
              <td>{camera.name}</td>
              <td>{camera.location}</td>
              <td>{camera.recorder || "N/A"}</td>
              <td>{camera.tasks}</td>
              <td>{camera.status}</td>
              <td>{camera.current_status}</td>
              <td>{camera.health?.cloud}</td>
              <td>{camera.health?.device}</td>
              <td>{camera.hasWarning ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableList;
