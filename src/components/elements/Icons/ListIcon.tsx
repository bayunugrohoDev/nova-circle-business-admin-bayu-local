import { IconProps } from "@/types/icon";

const ListIcon = ({ color = "black", className }: IconProps) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1249_838)">
        <path
          d="M6.25 7.07144H12"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6.25 16.9286H12"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6.25 12H17.75"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M2.96428 1.32144H21.0357C21.0357 1.32144 22.6786 1.32144 22.6786 2.9643V21.0357C22.6786 21.0357 22.6786 22.6786 21.0357 22.6786H2.96428C2.96428 22.6786 1.32143 22.6786 1.32143 21.0357V2.9643C1.32143 2.9643 1.32143 1.32144 2.96428 1.32144Z"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1249_838">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ListIcon;
