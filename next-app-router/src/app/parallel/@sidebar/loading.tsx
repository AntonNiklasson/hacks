import { LoadingSkeleton } from "@/components/loading-skeleton";
import { sleep } from "@/utils";

export default async function Loading() {
  await sleep(2000);

  return <LoadingSkeleton />;
}
