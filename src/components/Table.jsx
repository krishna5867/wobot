import ActivateIcon from "../assets/activate.svg?react";
import DeactiveIcon from "../assets/deactivate.svg?react";
import HealthCloudIcon from "../assets/cloud-icon.svg?react";
import HealthDeviceIcon from "../assets/edge-icon.svg?react";
import { getHealthColor } from "../utils";

const Table = ({ data, handleUpdateStatus }) => {
  return (
    <>
      <div
        style={{
          minWidth: "100%",
          overflow: "auto",
        }}
      >
        {data?.length > 0 ? (
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
                <tr key={camera?._id} style={styles.tr}>
                  <td style={styles.td}>
                    <span
                      style={{
                        display: "flex",
                        alignItems: "start",
                        gap: "2px",
                      }}
                    >
                      <span
                        style={{
                          width: "12px",
                          height: "12px",
                          border: "1px solid #CED4DA",
                          display: "inline-block",
                          borderRadius: "4px",
                          marginRight: "10px",
                          marginTop: "5px",
                        }}
                      ></span>
                      <span
                        style={{
                          width: "10px",
                          height: "10px",
                          backgroundColor: "#029262",
                          borderRadius: "50%",
                          marginTop: "5px",
                        }}
                      ></span>
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <span
                          style={{
                            whiteSpace: "nowrap",
                          }}
                        >
                          {camera.name}
                        </span>
                        <span
                          style={{
                            fontSize: "12px",
                          }}
                        >
                          sherwinwilliams@wobot.ai
                        </span>
                      </span>
                    </span>
                  </td>
                  <td style={styles.td}>
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <span style={styles.span}>
                        <HealthCloudIcon style={styles.icon} />
                        <span
                          style={{
                            ...styles.healthRing,
                            border: `2px solid ${getHealthColor(
                              camera.health?.cloud
                            )}`,
                          }}
                        >
                          {camera.health?.cloud}
                        </span>
                      </span>
                      <span style={styles.span}>
                        <HealthDeviceIcon style={styles.icon} />
                        <span
                          style={{
                            ...styles.healthRing,
                            border: `2px solid ${getHealthColor(
                              camera.health?.device
                            )}`,
                          }}
                        >
                          {camera.health?.device}
                        </span>
                      </span>
                    </span>
                  </td>
                  <td style={styles.td}>{camera.location}</td>
                  <td style={styles.td}>{camera.recorder || "N/A"}</td>
                  <td style={{ ...styles.td, whiteSpace: "nowrap" }}>
                    {Array.isArray(camera.tasks)
                      ? camera.tasks.join(", ")
                      : camera.tasks}
                    &nbsp; {camera.tasks === "1" ? "Task" : "Tasks"}
                  </td>
                  <td style={styles.td}>
                    <button
                      onClick={() =>
                        handleUpdateStatus(
                          camera?.id,
                          camera.status === "Active" ? "Inactive" : "Active"
                        )
                      }
                      style={{
                        cursor: "pointer",
                        border: "none",
                        background:
                          camera.status === "Active"
                            ? "rgba(2, 146, 98, 0.1)"
                            : "rgba(240, 240, 240, 1)",
                        color:
                          camera.status === "Active" ? "#029262" : "#545454",
                      }}
                    >
                      {camera.status}
                    </button>
                  </td>
                  <td style={styles.td}>
                    {camera.hasWarning ? (
                      <DeactiveIcon
                        style={{
                          fontSize: "26px",
                          marginLeft: "-4px",
                        }}
                      />
                    ) : (
                      <ActivateIcon />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
              minHeight: "50vh",
            }}
          >
            No results found 🔍
          </div>
        )}
      </div>
    </>
  );
};

const styles = {
  span: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "2px",
  },
  healthRing: {
    width: "24px",
    height: "24px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "10px",
    fontWeight: 700,
    lineHeight: 1,
  },
  th: {
    padding: "12px 10px",
    borderBottom: "1px solid #ddd",
    backgroundColor: "#FAFAFA",
  },
  td: {
    padding: "14px 10px",
    borderBottom: "1px solid #eee",
    verticalAlign: "middle",
    whiteSpace: "nowrap",
  },
  tr: {
    backgroundColor: "#fff",
  },
  icon: {
    fontSize: "24px",
    color: "#333",
    height: "100%",
    width: "18px",
  },
};
export default Table;
