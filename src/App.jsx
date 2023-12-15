import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Dashboard from "./pages/Dashboard";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import AddStudents from "./pages/AddStudents";
import { Modal } from "bootstrap";
import { createPortal } from "react-dom";

function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path="/"
          element={<Dashboard />}
          errorElement={<div>Error </div>}
        >
          <Route
            path="delete"
            element={createPortal(<Modal />, document.body)}
          />
        </Route>
        <Route path="addStudent" element={<AddStudents />} />
      </>
    )
  );
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
