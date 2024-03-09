import { sleep } from "@/utils";

export default async function Page() {
  await sleep(1000);

  return (
    <div className="p-2">
      <h3>parallel/index.tsx</h3>
    </div>
  );
}
