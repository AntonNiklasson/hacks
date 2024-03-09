"use client";

import { FC, PropsWithChildren } from "react";
import { Button } from "./button";
import { User } from "@/app/nested/page";

type UserListComponent = FC<
  PropsWithChildren<{
    initialUsers?: User[];
  }>
>;

export const UserList: UserListComponent = ({ children, initialUsers }) => {
  console.log({ initialUsers });
  return (
    <div className="bg-zinc-300">
      <Button
        onClick={() => {
          console.log("Not implemented yet");
        }}
      >
        new user
      </Button>

      {children}
    </div>
  );
};
