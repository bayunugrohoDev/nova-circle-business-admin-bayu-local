"use client";

import React, { useState } from "react";
import * as yup from "yup";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import Cookies from "js-cookie";

import { ILoginRequest, ILoginResponse } from "@/types/auth";

import crypto from "@/utils/crypto";

import Button from "@/components/elements/Button";
import { Input } from "@/components/elements/Input";

const loginFormSchema = yup.object({
  email: yup
    .string()
    .email("Email tidak valid")
    .required("Email harus diisi")
    .max(50, "Email maksimal 50 karakter"),
  password: yup.string().required("Password harus diisi"),
  // .min(8, "Password minimal 8 karakter")
  // .matches(
  //   /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,
  //   "Password harus mengandung huruf dan angka"
  // ),
});

type FormValues = yup.InferType<typeof loginFormSchema>;

const FormLogin = () => {
  const [isLoading, setIsloading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(loginFormSchema),
    context: {},
    shouldUnregister: true,
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const submitAuthLogin = async (payload: ILoginRequest) => {
    console.log("payload", payload);

    const baseURL = "https://api.integration.novacircle.com";

    const response = await fetch(`${baseURL}/auth/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Platform: "web-admin",
      },
      body: JSON.stringify(payload),
    });

    const responseData: ILoginResponse = await response.json();
    return responseData;
  };

  const onSubmit = async (data: any) => {
    try {
      const payload = {
        email: data.email,
        password: crypto.encode(data.password),
      };

      setIsloading(true);
      const result: ILoginResponse = await submitAuthLogin(payload);
      console.log("result", result);

      if (result.success) {
        localStorage.setItem("user", JSON.stringify(result.data?.user));
        Cookies.set("user", JSON.stringify(result.data?.user));
        Cookies.set(
          "access_token",
          result.data?.access_token ? result.data?.access_token : ""
        );
        Cookies.set(
          "refresh_token",
          result.data?.refresh_token ? result.data?.refresh_token : ""
        );
        router.push("/");
      } else {
        alert(result.errors?.[0].message);
      }
    } catch (err) {
      alert(err);
      // setLoginError(err);
    } finally {
      setIsloading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col mb-5">
        <Input
          label="Email"
          type="email"
          placeholder={"Please insert email"}
          required
          {...register("email")}
          valid={!errors.email && true}
          message={errors?.email?.message}
        />
      </div>
      <div className="flex flex-col">
        <Input
          {...register("password")}
          label="Password"
          type="password"
          placeholder={"Please insert password"}
          required
          valid={!errors.password && true}
          message={errors?.password?.message}
        />
      </div>
      <div className="flex justify-end mt-4">
        <p>
          <Link
            href="/forgetpassword"
            className="capitalize text-greyDarker text-sm"
          >
            Forget Password?
          </Link>
        </p>
      </div>
      <div className="flex w-full mt-14">
        <Button color={"primary"} className="w-full !font-bold" size="big" isLoading={isLoading}>
          Sign In
        </Button>
      </div>
    </form>
  );
};

export default FormLogin;
