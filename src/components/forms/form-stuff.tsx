"use client";

import React, { useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import MyInput from "./MyInput";

enum Language {
  None = "",
  C = "C",
  Python = "Python",
  JavaScript = "JavaScript",
  Java = "Java",
}

interface FormStuff {
  email: string;
  language: Language;
  // phoneNumber: string;
  age: number;
}

const languageOptions = [
  {
    label: "Please select",
    value: Language.None,
  },
  {
    label: "C",
    value: Language.C,
  },
  {
    label: "Python",
    value: Language.Python,
  },
  {
    label: "JavaScript",
    value: Language.JavaScript,
  },
  {
    label: "Java",
    value: Language.Java,
  },
];

const FormStuff = () => {
  const { register, handleSubmit, formState, watch } = useForm<FormStuff>();
  const onSubmit: SubmitHandler<FormStuff> = (data) => console.log(data);
  console.log("watch:", watch("email"));
  console.log("form state error:", formState.errors);

  const myRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <MyInput {...register("email", { required: true })} />
        <br />
        <input {...register("age", { required: true })} />
        <br />
        <select {...register("language")}>
          {languageOptions.map((option) => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <br />
        <button type={"submit"}>Submit</button>
      </form>
    </>
  );
};

export default FormStuff;
