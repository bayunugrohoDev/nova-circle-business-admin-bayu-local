import { sideNavItemsProps } from "../types/layout";
import routes from "./routes";

import HomeIcon from "@/components/elements/Icon/Home";

const sideNavItems:sideNavItemsProps[] = [
  {
    name: routes.dashboard.title,
    icon: HomeIcon,
    redirectTo: routes.dashboard.path,
  },
  {
    name: routes.profile.title,
    icon: HomeIcon,
    redirectTo: routes.profile.path,
  },
  {
    name: routes.recomendations.title,
    icon: HomeIcon,
    redirectTo: routes.recomendations.path,
  },
  {
    name: routes.list.title,
    icon: HomeIcon,
    redirectTo: routes.list.path,
  },
  {
    name: routes.communication.title,
    icon: HomeIcon,
    redirectTo: routes.communication.path,
  },
  {
    name: routes.settings.title,
    icon: HomeIcon,
    redirectTo: routes.settings.path,
  },
];

export default sideNavItems;
