import React from "react";

import dynamic from "next/dynamic";

import { LoadingContainer } from "@/app/common/components";

const DynamicLoginForm = dynamic(
  () => import("./components/login-form/login-form.component"),
  {
    loading: () => <LoadingContainer />,
  },
);

function Login() {
  return <DynamicLoginForm />;
}

export default Login;
