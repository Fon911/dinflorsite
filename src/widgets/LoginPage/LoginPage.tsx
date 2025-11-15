"use client";
import { Button } from "@/features/auth";
import { Check, Input, Layout } from "@/shared/ui";
import { useState } from "react";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isFormValid = email.trim() !== "" && password.trim() !== "";

  return (
    <Layout>
      <div>
        <h1 className="mb-[10px] text-[20px] font-normal">Вход</h1>
        <p className="mb-[20px] text-[15px] font-normal">
          Для входа в аккаунт введите логин и пароль
        </p>

        <div className="flex flex-col gap-[20px]">
          <Input
            placeholder="Email"
            type="email"
            value={email}
            onChange={setEmail}
          />
          <Input
            placeholder="Пароль"
            type="password"
            value={password}
            onChange={setPassword}
          />
        </div>
        <div className="mt-[15px]">
          <a href="" className="text-[11px] font-medium text-main-100">
            Забыли пароль?
          </a>
        </div>
        <div className="mt-[15px]">
          <Check title="Запомнить меня" fontSize="11px" />
        </div>
        <div className="mt-[40px] flex flex-row ">
          <p className="text-[14px] font-medium text-main-200 mr-1">
            Нет аккаунта?{" "}
          </p>
          <a
            href="(auth)/Register"
            className="text-[14px] font-medium text-main-100"
          >
            Зарегистрироваться
          </a>
        </div>
        <div className="mt-[20px]">
          <Button isActive={isFormValid} text="Войти" />
        </div>
      </div>
    </Layout>
  );
};
