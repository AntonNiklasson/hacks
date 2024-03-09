import { Button } from "@/components/button";
import { Counter } from "@/components/counter";

function sleep() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

export default async function Page() {
  await sleep();

  return (
    <>
      <h1>This is a page</h1>

      <div className="flex flex-col items-start gap-4">
        <Button>Lorem Ipsum</Button>
        <Counter />
      </div>
    </>
  );
}
