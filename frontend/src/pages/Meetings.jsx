export default function Meetings() {
  return (
    <div>
      <h1>Meeting Intelligence</h1>

      <p>
        AI-powered meeting summaries, action items, and team collaboration.
      </p>

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "20px",
        }}
      >
        <h3>Today's Meetings</h3>

        <ul>
          <li>Operations Review - 10:00 AM</li>
          <li>Client Success Meeting - 1:00 PM</li>
          <li>AI Strategy Discussion - 4:00 PM</li>
        </ul>
      </div>

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "20px",
        }}
      >
        <h3>AI Meeting Summary</h3>

        <p>
          Last meeting generated 12 action items and 3 follow-up tasks.
        </p>
      </div>
    </div>
  );
}