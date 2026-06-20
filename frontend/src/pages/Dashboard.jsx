export default function Dashboard() {
  return (
    <div>
      <h1 style={{ marginBottom: "20px" }}>
        Enterprise Dashboard
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px"
        }}
      >
        <div
          style={{
            background: "#1f2937",
            color: "white",
            padding: "20px",
            borderRadius: "10px"
          }}
        >
          <h3>Users</h3>
          <h2>120</h2>
        </div>

        <div
          style={{
            background: "#1f2937",
            color: "white",
            padding: "20px",
            borderRadius: "10px"
          }}
        >
          <h3>Documents</h3>
          <h2>580</h2>
        </div>

        <div
          style={{
            background: "#1f2937",
            color: "white",
            padding: "20px",
            borderRadius: "10px"
          }}
        >
          <h3>Incidents</h3>
          <h2>14</h2>
        </div>

        <div
          style={{
            background: "#1f2937",
            color: "white",
            padding: "20px",
            borderRadius: "10px"
          }}
        >
          <h3>AI Queries</h3>
          <h2>1,245</h2>
        </div>
      </div>
    </div>
  );
}