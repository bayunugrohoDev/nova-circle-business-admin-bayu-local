import { IconProps } from "@/types/icon";
import React from "react";

const ChatBubleIcon = ({ color = "black", className }: IconProps) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1249_762)">
        <path
          d="M7.89285 21.0357L1.32143 22.6786L2.96428 17.75V2.96428C2.96428 2.52856 3.13738 2.1107 3.44546 1.80261C3.75356 1.49451 4.17142 1.32143 4.60714 1.32143H21.0357C21.4714 1.32143 21.8893 1.49451 22.1974 1.80261C22.5054 2.1107 22.6786 2.52856 22.6786 2.96428V19.3929C22.6786 19.8285 22.5054 20.2465 22.1974 20.5545C21.8893 20.8626 21.4714 21.0357 21.0357 21.0357H7.89285Z"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7.89285 8.71428H17.75"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7.89285 13.6429H14.4643"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1249_762">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ChatBubleIcon;
