import { RouterProvider } from "react-router-dom";
import router from "./router";

function Root() {
  return (
    <div className="w-full h-full fixed left-0 top-0 p-0 m-0 flex overflow-hidden">
      <RouterProvider router={router} />
    </div>
  );
}

export default Root;
