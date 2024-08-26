import { ReactNode } from "react";

export type TChildren = {
  children: ReactNode;
};

export type ToastMethod = (
  msg: string,
  options?: { duration?: number }
) => void;
