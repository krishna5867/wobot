import { useState } from "react";
import useFetch from "./hooks/useFetch";
import Searchbar from "./common/Searchbar";
import Dropdown from "./common/Dropdown";
import LocationIcon from "../assets/location-icon.svg?react";
import StatusIcon from "../assets/share.svg?react";
import ActivateIcon from "../assets/activate.svg?react";
import DeactiveIcon from "../assets/deactivate.svg?react";

const TableList = () => {
  const url = "https://api-app-staging.wobot.ai/app/v1/fetch/cameras";
  const token = import.meta.env.VITE_API_TOKEN;

  const { data, error, isLoading } = useFetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  console.log("data", data);
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("");

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  const handleSearch = (value) => {
    console.log(value);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h2
            style={{
              fontFamily: "Inter",
              fontWeight: 500,
              fontStyle: "medium",
              fontSize: "22px",
              lineHeight: "100%",
              letterSpacing: "0px",
            }}
          >
            Cameras
          </h2>
          <p
            style={{
              fontFamily: "Inter",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "14px",
              lineHeight: "100%",
              letterSpacing: "0px",
            }}
          >
            Manage your cameras here.
          </p>
        </div>
        <div>
          <Searchbar onSearch={handleSearch} />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <Dropdown
          label="Location"
          icon={<LocationIcon style={{ width: "16px", height: "16px" }} />}
          options={["Delhi", "Mumbai", "Bangalore"]}
          selected={location}
          onSelect={setLocation}
        />

        <Dropdown
          label="Status"
          icon={<StatusIcon style={{ width: "16px", height: "16px" }} />}
          options={["Online", "Offline", "Idle"]}
          selected={status}
          onSelect={setStatus}
        />
      </div>
      <div
        style={{
          minWidth: "100%",
          overflow: "auto",
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontFamily: "sans-serif",
            fontSize: "14px",
          }}
        >
          <thead>
            <tr style={{ textAlign: "left", color: "#777", fontWeight: 500 }}>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Health</th>
              <th style={styles.th}>Location</th>
              <th style={styles.th}>Recorder</th>
              <th style={styles.th}>Tasks</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((camera) => (
              <tr key={camera.id || camera._id} style={styles.tr}>
                <td style={styles.td}>{camera.name}</td>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "2px",
                  }}
                >
                  <td style={styles.td}>{camera.health?.cloud}</td>
                  <td style={styles.td}>{camera.health?.device}</td>
                </div>
                <td style={styles.td}>{camera.location}</td>
                <td style={styles.td}>{camera.recorder || "N/A"}</td>
                <td style={styles.td}>
                  {Array.isArray(camera.tasks)
                    ? camera.tasks.join(", ")
                    : camera.tasks}
                  &nbsp; {camera.tasks === "1" ? "Task" : "Tasks"}
                </td>
                <td style={styles.td}>{camera.status}</td>
                <td style={styles.td}>
                  {camera.hasWarning ? <DeactiveIcon /> : <ActivateIcon />}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const styles = {
  th: {
    padding: "12px 10px",
    borderBottom: "1px solid #ddd",
    backgroundColor: "#FAFAFA",
  },
  td: {
    padding: "14px 10px",
    borderBottom: "1px solid #eee",
    verticalAlign: "middle",
  },
  tr: {
    backgroundColor: "#fff",
  },
};

export default TableList;
