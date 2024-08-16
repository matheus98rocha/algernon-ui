import React from "react";
import dynamic from "next/dynamic";
import LoadingContainer from "@/app/common/components/layout/loading/loading.component";
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
