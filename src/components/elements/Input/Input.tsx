"use client"

import React, { forwardRef, useState } from "react";
import {
  RiErrorWarningLine,
  RiEyeFill,
  RiEyeOffFill,
} from "react-icons/ri";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  className?: string;
  type: string;
  valid?: boolean;
  disabled?: boolean;
  message?: any;
  required?: boolean;
  placeholder?: string;
}
// HTMLInputElement, React.PropsWithChildren<any>
const Input = forwardRef<HTMLInputElement,InputProps>(
  (
    {
      label,
      className,
      type = "text",
      valid = true,
      disabled,
      message,
      required,
      placeholder,
      ...rest
    }:InputProps,
    ref
  ) => {
    const [showPass, setShowPass] = useState(false);
    return (
      <div className="flex flex-col gap-2">
        <label className=" text-greyDarkest dark:text-white">
          {label} {required && <span className="text-danger">*</span>}
        </label>
        <div className="relative">
          <input
            type={ type === "password" ? (!showPass ? "password" : "text") : type}
            ref={ref}
            color={
              type === "password" ? (!showPass ? "password" : "text") : type
            }
            placeholder={placeholder}
            className={`w-full rounded-lg border-[1.5px] border-grey placeholder:text-grey bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter
                      ${
                        valid
                          ? "focus:border-grey placeholder:text-grey "
                          : "border-danger focus:border-danger placeholder:text-danger"
                      }
                      `}
            {...rest}
          />
          {!valid && (
            <RiErrorWarningLine
              size={16}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-danger"
            />
          )}
          {type === "password" && (
            <>
              {valid && (
                <div className="absolute top-4 right-4">
                  {showPass ? (
                    <button type="button" onClick={() => setShowPass(false)}>
                      <RiEyeOffFill className="w-5 fill-grey" />
                    </button>
                  ) : (
                    <button type="button" onClick={() => setShowPass(true)}>
                      <RiEyeFill className="w-5 fill-grey" />
                    </button>
                  )}
                </div>
              )}
            </>
          )}
        </div>
        <p hidden={valid} className="text-xs text-danger mt-2">
          {message}
        </p>
      </div>
    );
  }
);
Input.displayName = "Input";
export default Input;
