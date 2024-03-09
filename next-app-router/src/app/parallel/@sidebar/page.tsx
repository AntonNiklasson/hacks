import { sleep } from "@/utils";

export default async function Page() {
  await sleep(6000);

  return (
    <div>
      <h1>@sidebar</h1>
    </div>
  );
}
