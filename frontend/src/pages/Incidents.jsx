export default function Incidents() {
  return (
    <div>
      <h1>Incident Management</h1>

      <p>
        Monitor, track, and resolve operational incidents across the organization.
      </p>

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "20px",
        }}
      >
        <h3>Open Incidents</h3>
        <p>14 Active Cases</p>
      </div>

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "20px",
        }}
      >
        <h3>Recent Alerts</h3>
        <ul>
          <li>Database Connection Failure</li>
          <li>Payment Gateway Timeout</li>
          <li>Server CPU Usage High</li>
        </ul>
      </div>
    </div>
  );
}