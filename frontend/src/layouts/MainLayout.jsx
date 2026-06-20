export default function MainLayout({ children }) {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh"
      }}
    >
      <div
        style={{
          width: "250px",
          background: "#111827",
          color: "white",
          padding: "20px"
        }}
      >
        <h2>Enterprise AI</h2>

        <hr />

        <p>📊 Dashboard</p>
        <p>📁 Documents</p>
        <p>🤖 Assistant</p>
        <p>🚨 Incidents</p>
        <p>📅 Meetings</p>
        <p>📈 Reports</p>
      </div>

      <div
        style={{
          flex: 1,
          padding: "20px"
        }}
      >
        {children}
      </div>
    </div>
  );
}