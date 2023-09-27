"use client";
import { useAuth } from "@/hooks/useAuth";
import { TLogin } from "@/utils/types/auth";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { useRouter } from "next/navigation";
import React from "react";

const Login = () => {
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = (values: TLogin) => {
    console.log(values);

    login(values)
      .then((data) => {
        if (data?.success) {
          // add your code for post successful login here
          setTimeout(() => {
            router.push("/");
          }, 1000);
        } else console.log(data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="max-w-[100vw] p-5">
      <h3 className="mb-5 text-4xl font-medium">Login</h3>

      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(
          values: TLogin,
          { setSubmitting }: FormikHelpers<TLogin>
        ) => {
          setTimeout(() => {
            handleSubmit(values);
            setSubmitting(false);
          }, 500);
        }}
      >
        <Form className="grid w-96 grid-cols-2 gap-3">
          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="Enter email"
            type="email"
          />

          <label htmlFor="password">Password</label>
          <Field
            id="password"
            name="password"
            type="password"
            placeholder="Enter password"
          />

          <button
            type="submit"
            className="w-fit border border-black/75 px-4 py-1"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
