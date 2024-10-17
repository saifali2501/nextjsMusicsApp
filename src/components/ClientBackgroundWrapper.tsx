"use client";

// ClientBackgroundWrapper.tsx (Client Component)
import { BackgroundGradient } from "./ui/background-gradient";

export const ClientBackgroundWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <BackgroundGradient>{children}</BackgroundGradient>;
};
