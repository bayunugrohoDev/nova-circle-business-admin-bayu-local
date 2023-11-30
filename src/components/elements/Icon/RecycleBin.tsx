import React from "react";
interface RecycleBinProps {
  color?: string;
}
const RecycleBin = ({ color = "black" }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.14285 6.25H21.8571"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.60715 6.25H19.3929V21.0357C19.3929 21.4714 19.2197 21.8893 18.9117 22.1974C18.6036 22.5054 18.1857 22.6786 17.75 22.6786H6.25C5.81429 22.6786 5.39643 22.5054 5.08832 22.1974C4.78024 21.8893 4.60715 21.4714 4.60715 21.0357V6.25Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.89285 6.25001V5.42858C7.89285 4.3393 8.32556 3.29463 9.0958 2.52439C9.86604 1.75416 10.9107 1.32144 12 1.32144C13.0893 1.32144 14.134 1.75416 14.9042 2.52439C15.6744 3.29463 16.1071 4.3393 16.1071 5.42858V6.25001"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.53571 11.181V17.7549"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.4643 11.181V17.7549"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default RecycleBin;
