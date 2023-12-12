import { IconProps } from "@/types/icon";
import React from "react";

const WishListIcon = ({ color = "black", className }: IconProps ) => {
  return (
    <svg
     className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1249_918)">
        <path
          d="M17.75 9.5357V2.96427C17.75 2.05694 17.0145 1.32141 16.1071 1.32141H2.96428C2.52856 1.32141 2.1107 1.4945 1.80261 1.80259C1.49451 2.11069 1.32143 2.52855 1.32143 2.96427V19.3928C1.32143 19.8285 1.49451 20.2465 1.80261 20.5545C2.1107 20.8625 2.52856 21.0357 2.96428 21.0357H9.53571"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M5.42857 6.25H13.6429"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M5.42857 10.3571H10.3571"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16.8289 22.6787L11.9004 18.1116C9.14037 15.4173 13.1161 10.193 16.8289 14.3988C20.5419 10.193 24.5176 15.4173 21.7576 18.1116L16.8289 22.6787Z"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1249_918">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default WishListIcon;
