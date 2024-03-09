"use client";

import { FC, PropsWithChildren } from "react";

type ButtonComponent = FC<
  PropsWithChildren<{
    onClick?: () => void;
  }>
>;

export const Button: ButtonComponent = ({ children, onClick }) => {
  return (
    <button className="bg-blue-300 p-2 rounded-xl" onClick={onClick}>
      {children}
    </button>
  );
};
