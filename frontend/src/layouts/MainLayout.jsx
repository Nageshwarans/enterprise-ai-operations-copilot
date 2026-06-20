import { Link } from "react-router-dom";

export default function MainLayout({ children }) {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          width: "250px",
          background: "#111827",
          color: "white",
          padding: "20px",
        }}
      >
        <h2>Enterprise AI</h2>

        <hr />

        <p>
          <Link to="/">Dashboard</Link>
        </p>

        <p>
          <Link to="/documents">Documents</Link>
        </p>

        <p>
          <Link to="/assistant">Assistant</Link>
        </p>

        <p>
          <Link to="/incidents">Incidents</Link>
        </p>

        <p>
          <Link to="/meetings">Meetings</Link>
        </p>

        <p>
          <Link to="/reports">Reports</Link>
        </p>
      </div>

      <div
        style={{
          flex: 1,
          padding: "20px",
        }}
      >
        {children}
      </div>
    </div>
  );
}