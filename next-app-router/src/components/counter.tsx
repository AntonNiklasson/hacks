"use client";

import { useState } from "react";
import { Button } from "./button";

export const Counter = () => {
  const [n, update] = useState(0);

  return (
    <div className="flex flex-col gap-2 rounded-xl border-4 p-4">
      <p>
        Counter: <strong>{n}</strong>
      </p>
      <Button onClick={() => update((n) => n + 1)}>add one</Button>
    </div>
  );
};
