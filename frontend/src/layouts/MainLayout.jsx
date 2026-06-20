import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

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
          <Link to="/" style={{ color: "white" }}>
            📊 Dashboard
          </Link>
        </p>

        <p>
          <Link to="/documents" style={{ color: "white" }}>
            📁 Documents
          </Link>
        </p>

        <p>
          <Link to="/assistant" style={{ color: "white" }}>
            🤖 Assistant
          </Link>
        </p>

        <p>
          <Link to="/incidents" style={{ color: "white" }}>
            🚨 Incidents
          </Link>
        </p>

        <p>
          <Link to="/meetings" style={{ color: "white" }}>
            📅 Meetings
          </Link>
        </p>

        <p>
          <Link to="/reports" style={{ color: "white" }}>
            📈 Reports
          </Link>
        </p>
      </div>

      <div
        style={{
          flex: 1,
          background: "#f3f4f6",
        }}
      >
        <Navbar />

        <div style={{ padding: "20px" }}>
          {children}
        </div>
      </div>
    </div>
  );
}