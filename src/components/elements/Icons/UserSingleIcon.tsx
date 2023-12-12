import { IconProps } from "@/types/icon";
import React from "react";

const UserSingleIcon =  ({ color = "black", className }: IconProps ) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 12C14.8847 12 17.2232 9.66151 17.2232 6.7768C17.2232 3.89209 14.8847 1.55359 12 1.55359C9.1153 1.55359 6.77679 3.89209 6.77679 6.7768C6.77679 9.66151 9.1153 12 12 12Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M21.9323 22.4464C21.2575 20.3425 19.9321 18.5072 18.1472 17.2049C16.362 15.9028 14.2096 15.2012 12.0001 15.2012C9.79059 15.2012 7.63816 15.9028 5.85312 17.2049C4.0681 18.5072 2.74268 20.3425 2.06796 22.4464H21.9323Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default UserSingleIcon;
