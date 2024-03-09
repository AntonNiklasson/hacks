import { useState } from "react";
import { Button } from "./button";

export const Counter = () => {
  const [n, update] = useState(0);

  return (
    <div>
      Counter: {n}
      <Button onClick={() => update((n) => n + 1)}>add one</Button>
    </div>
  );
};
