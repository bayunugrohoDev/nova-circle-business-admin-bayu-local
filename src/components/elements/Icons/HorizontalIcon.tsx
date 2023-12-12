import { IconProps } from "@/types/icon";
import React from "react";

const HorizontalIcon = ({ color = "black", className }: IconProps) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.2143 14.4643C21.5752 14.4643 22.6786 13.361 22.6786 12C22.6786 10.639 21.5752 9.53571 20.2143 9.53571C18.8533 9.53571 17.75 10.639 17.75 12C17.75 13.361 18.8533 14.4643 20.2143 14.4643Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 14.4643C13.361 14.4643 14.4643 13.361 14.4643 12C14.4643 10.639 13.361 9.53571 12 9.53571C10.639 9.53571 9.53571 10.639 9.53571 12C9.53571 13.361 10.639 14.4643 12 14.4643Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.78571 14.4643C5.1467 14.4643 6.25 13.361 6.25 12C6.25 10.639 5.1467 9.53571 3.78571 9.53571C2.42472 9.53571 1.32143 10.639 1.32143 12C1.32143 13.361 2.42472 14.4643 3.78571 14.4643Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default HorizontalIcon;
