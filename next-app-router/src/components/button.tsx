"use client";

import { FC, PropsWithChildren } from "react";

type ButtonComponent = FC<
  PropsWithChildren<{
    onClick?: () => void;
  }>
>;

export const Button: ButtonComponent = ({ children, onClick }) => {
  return (
    <button
      className="rounded-xl bg-blue-300 p-2 hover:bg-blue-600 active:bg-blue-500"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
