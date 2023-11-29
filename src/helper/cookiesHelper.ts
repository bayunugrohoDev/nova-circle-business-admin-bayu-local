import Cookies from "js-cookie";
import { IUser } from "../types/auth";

export const setUserCookies = (data: Object) => {
  localStorage.Cookies.set("user", JSON.stringify(data));
};

export const getUserCookies = ():IUser | null => {
  if(Cookies.get("user") == undefined) {
    return null;
  }

  const user = JSON?.parse(`${Cookies.get("user")}`);
  return user;
};
