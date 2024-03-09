import { sleep } from "@/utils";

export default async function Page() {
  await sleep(800);

  return (
    <div>
      <h1>@secondary</h1>
    </div>
  );
}
