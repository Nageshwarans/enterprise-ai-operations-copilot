export default function Reports() {
  return (
    <div>
      <h1>Analytics & Reports</h1>

      <p>
        View operational insights, AI analytics, and performance reports.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h3>Monthly Performance</h3>
          <h2>92%</h2>
        </div>

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h3>AI Accuracy</h3>
          <h2>96%</h2>
        </div>

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h3>Resolved Incidents</h3>
          <h2>128</h2>
        </div>
      </div>
    </div>
  );
}