import React from "react";

import dynamic from "next/dynamic";

import { LoadingContainer } from "@/app/common/components";

const DynamicSignupForm = dynamic(
  () => import("./components/signup-form/signup-form.component"),
  {
    loading: () => <LoadingContainer />,
  },
);

function Signup() {
  return <DynamicSignupForm />;
}

export default Signup;
