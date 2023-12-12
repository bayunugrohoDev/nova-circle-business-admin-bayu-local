import { sideNavItemsProps } from "../types/layout";
import routes from "./routes";

import ListIcon from "@/components/elements/Icons/ListIcon";
import HomeIcon from "@/components/elements/Icons/HomeIcon";
import WishListIcon from "@/components/elements/Icons/WishListIcon";
import UserSingleIcon from "@/components/elements/Icons/UserSingleIcon";
import SettingIcon from "@/components/elements/Icons/SettingIcon";
import ChatBubleIcon from "@/components/elements/Icons/ChatBubleIcon";
import { IconProps } from "@/types/icon";

const sideNavItems: sideNavItemsProps[] = [
  {
    name: routes.dashboard.title,
    redirectTo: routes.dashboard.path,
    icon: ({ color, className }: IconProps) => (
      <HomeIcon className={className} color={color} />
    ),
  },
  {
    name: routes.profile.title,
    redirectTo: routes.profile.path,
    icon: ({ color, className }: IconProps) => (
      <UserSingleIcon className={className} color={color} />
    ),
  },
  {
    name: routes.recomendations.title,
    redirectTo: routes.recomendations.path,
    icon: ({ color, className }: IconProps) => (
      <WishListIcon className={className} color={color} />
    ),
  },
  {
    name: routes.list.title,
    redirectTo: routes.list.path,
    icon: ({ color, className }: IconProps) => (
      <ListIcon className={className} color={color} />
    ),
  },
  {
    name: routes.communication.title,
    redirectTo: routes.communication.path,
    icon: ({ color, className }: IconProps) => (
      <ChatBubleIcon className={className} color={color} />
    ),
  },
  {
    name: routes.settings.title,
    redirectTo: routes.settings.path,
    icon: ({ color, className }: IconProps) => (
      <SettingIcon className={className} color={color} />
    ),
  },
];

export default sideNavItems;
