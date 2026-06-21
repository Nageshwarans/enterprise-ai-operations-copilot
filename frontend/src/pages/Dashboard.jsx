import { useEffect, useState } from "react";
import API from "../services/api";

export default function Dashboard() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    API.get("/")
      .then((res) => {
        setMessage(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>Enterprise Dashboard</h1>

      <h3>Backend Status</h3>

      <p>{message}</p>
    </div>
  );
}