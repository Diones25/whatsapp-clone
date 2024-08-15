import { createBrowserRouter } from "react-router-dom";
import HomePage from "@/components/Home";

export const Router = createBrowserRouter([
  {
    path: '/',
    Component() {
      return (
        <HomePage />
      )
    }
  }
]);

export default Router;