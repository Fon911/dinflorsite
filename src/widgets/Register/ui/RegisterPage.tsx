"use client";

import { Button } from "@/features/auth/Login";
import { Check, Input, Layout } from "@/shared/ui";
import { useState } from "react";

export const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  const isFormValid = email.trim() !== "" && password.trim() !== "";

  return (
    <Layout>
      <div>
        <h1 className="mb-[10px] text-[20px] font-normal text-center lg:text-start">
          Регистрация
        </h1>
        <p className="mb-[20px] text-[15px] font-normal">
          Для регистрации аккаунта заполните поля ниже
        </p>

        <div className="flex flex-col gap-[10px]">
          <Input
            placeholder="Ваше имя"
            type="text"
            value={name}
            onChange={setName}
          />
          <Input
            placeholder="Ваша фамилия"
            type="text"
            value={lastName}
            onChange={setLastName}
          />{" "}
          <Input
            placeholder="Номер телефона"
            type="text"
            value={phone}
            onChange={setPhone}
          />{" "}
          <Input
            placeholder="Ваш email"
            type="email"
            value={email}
            onChange={setEmail}
          />{" "}
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
          <Check
            title="Я прочитал и согласен с условиями Политика в отношении обработки персональных данных"
            fontSize="14px"
          />
        </div>
        <div className="mt-[40px] flex flex-row ">
          <p className="text-[14px] font-medium text-main-200 mr-1">
            Уже есть аккаунт?{" "}
          </p>
          <a href="/Login" className="text-[14px] font-medium text-main-100">
            Войти
          </a>
        </div>
        <div className="mt-[20px]">
          <Button isActive={isFormValid} text="Зарегистрироваться" />
        </div>
      </div>
    </Layout>
  );
};

export default RegisterPage;
