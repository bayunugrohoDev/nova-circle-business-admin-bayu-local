import React, { ReactNode } from "react";
import LoadingIcon from "../Loading/LoadingIcon";
const typeButton = {
  primary: "bg-primary text-greyLightest hover:bg-primarySunset",
  secondary: "bg-transparent border text-primary border-primary border-[1.5px]",
  tertiary: "bg-transparent text-primary",
  danger: "bg-danger text-white",
  dangerOutline: "bg-transparent text-danger border  border-[1.5px] border-danger",
  custom: "",
};

const sizeButton = {
  big: "p-4",
  normal:"py-2 px-4",
  small: "!py-1 text-sm",
  custom: "",
};

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color: "primary" | "secondary" | "tertiary" | "danger" | "dangerOutline" | "custom";
  children: any;
  size?: "big" | "normal" | "small" | "custom";
  className?: string;
  isLoading?: boolean;
}

const Button = ({
  children,
  className,
  color,
  size,
  isLoading,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={`flex  ${typeButton[color]} ${
        sizeButton[size == undefined ? "normal" : size]
      }  ${className} items-center justify-center gap-3.5  rounded-[32px] text-li p-4 hover:bg-opacity-50`}
      {...rest}
      disabled={isLoading == true}
    >
      {isLoading ? (
        <>
          <LoadingIcon /> Loading...
        </>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
