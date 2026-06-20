export default function Dashboard() {
  const cardStyle = {
    background: "#1f2937",
    color: "white",
    padding: "20px",
    borderRadius: "12px",
  };

  return (
    <div>
      <h1>Enterprise Dashboard</h1>
      <p>Welcome to Enterprise AI Operations Copilot</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <div style={cardStyle}>
          <h3>Users</h3>
          <h2>120</h2>
        </div>

        <div style={cardStyle}>
          <h3>Documents</h3>
          <h2>580</h2>
        </div>

        <div style={cardStyle}>
          <h3>Incidents</h3>
          <h2>14</h2>
        </div>

        <div style={cardStyle}>
          <h3>AI Queries</h3>
          <h2>1245</h2>
        </div>
      </div>
    </div>
  );
}