import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Register from "./Components/Register"
import Category from "./Components/Category";

function App() {

  const appLayout = createBrowserRouter([
    {
      path: "/",
      element: <Register />
    },
    {
      path:"/genre",
      element: <Category />
    }
  ])

  return (
    <div >
      <RouterProvider router={appLayout} />
    </div>
  );
}

export default App;
