import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Register from "./Components/Register"

function App() {

  const appLayout = createBrowserRouter([
    {
      path: "/",
      element: <Register />
    }
  ])

  return (
    <div >
      <RouterProvider router={appLayout} />
    </div>
  );
}

export default App;
