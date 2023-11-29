import React, { ReactNode } from "react";
import LoadingIcon from "../Loading/LoadingIcon";
const typeButton = {
  primary: "bg-primary text-greyLightest hover:bg-primarySunset",
  secondary: "bg-transparent border text-primary border-primary border-[1.5px]",
  tertiary: "bg-transparent text-primary",
  custom: "",
};

const sizeButton = {
  big: "p-4",
  normal: "p-[8px]",
  small: "p-1",
  custom: "",
};

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color: "primary" | "secondary" | "tertiary" | "custom";
  children: any;
  size?: "big" | "normal" | "small" | "custom";
  className?: string;
  isLoading?: boolean;
}

const CustomButton = ({
  children,
  className,
  color,
  size,
  isLoading,
  ...rest
}: CustomButtonProps) => {
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

export default CustomButton;