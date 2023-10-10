import { createBrowserRouter } from "react-router-dom";
import ErrorPage from './components/ErrorPage';
import UsersList from './components/UsersList';
import UserTasks from './components/UserTasks';

const router = createBrowserRouter([
  {
    path: "/",
    element: <UsersList />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/users/:id/tasks",
    element: <UserTasks />,
  },
  
]);
export default router

