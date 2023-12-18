import Dashboard from "./pages/Dashboard";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import FormPage from "./pages/Form";
import { getStudents } from "./utils";
import ErrorPage from "./pages/Error";

function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path="/"
          loader={getStudents}
          element={<Dashboard />}
          errorElement={<ErrorPage />}
        ></Route>
        <Route
          path="editStudent"
          element={<FormPage />}
          errorElement={<ErrorPage />}
        />
        <Route path="addStudent" element={<FormPage />} />
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
