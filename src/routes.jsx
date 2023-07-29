import { Home, ProfilePhu, SignIn, SignUp } from "@/pages";
import {
  HomeIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import ProfileDan from "./pages/profileDan";

export const routes = [
  {
    icon: HomeIcon,
    name: "Home",
    path: "/home",
    element: <Home />,
  },

];

export default routes;
