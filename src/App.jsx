import DashboardLayout from "./components/layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <DashboardLayout>
      <Dashboard title="Analyitical Dashboard" />
    </DashboardLayout>
  );
}

export default App;