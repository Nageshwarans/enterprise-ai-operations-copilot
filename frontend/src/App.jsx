import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Dashboard from "./pages/Dashboard";
import Documents from "./pages/Documents";
import Assistant from "./pages/Assistant";
import Incidents from "./pages/Incidents";
import Meetings from "./pages/Meetings";
import Reports from "./pages/Reports";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/assistant" element={<Assistant />} />
          <Route path="/incidents" element={<Incidents />} />
          <Route path="/meetings" element={<Meetings />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;