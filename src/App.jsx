import { Outlet } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Container from "./components/Container";

function App() {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}

export default App;
