"use client";

import DefaultProgressBar from "@/app/common/components/default-progress-bar/default-progress-bar.component";

type ProvidersProps = {
  children: React.ReactNode;
};

export default function AuthProviders({ children }: ProvidersProps) {
  return (
    <>
      <DefaultProgressBar />
      {children}
    </>
  );
}
