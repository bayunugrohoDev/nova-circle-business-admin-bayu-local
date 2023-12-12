import { IconProps } from "@/types/icon";
import React from "react";

const PencilIcon = ({ color = "currentColor", className }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clip-path="url(#clip0_1647_169)">
        <path
          d="M8.7857 20.4213L1.55356 22.4463L3.57856 15.2141L16.8214 2.03555C16.971 1.88248 17.1499 1.76085 17.3471 1.67781C17.5445 1.59478 17.7565 1.552 17.9705 1.552C18.1846 1.552 18.3966 1.59478 18.5939 1.67781C18.7911 1.76085 18.97 1.88248 19.1196 2.03555L21.9643 4.89627C22.1149 5.04567 22.2344 5.22342 22.3161 5.41927C22.3977 5.61511 22.4397 5.82518 22.4397 6.03734C22.4397 6.2495 22.3977 6.45957 22.3161 6.65541C22.2344 6.85124 22.1149 7.02901 21.9643 7.17841L8.7857 20.4213Z"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1647_169">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default PencilIcon;
