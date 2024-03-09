import { Counter } from "@/components/counter";
import { FC, PropsWithChildren } from "react";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="h-full grid grid-cols-[150px_auto]">
      <aside className="bg-red-100 p-4">
        <h3>Sidebar</h3>
      </aside>
      <section className="p-4">{children}</section>
    </div>
  );
};
export default Layout;
