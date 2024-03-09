import { FC, PropsWithChildren, ReactNode } from "react";

type LayoutProps = {
  sidebar: ReactNode;
  secondarysidebar: ReactNode;
};

const Layout: FC<PropsWithChildren<LayoutProps>> = ({
  children,
  sidebar,
  secondarysidebar,
}) => {
  return (
    <div className="grid h-full grid-cols-[200px_auto_150px] divide-x divide-gray-200">
      <aside className="bg-zinc-100 p-4">{sidebar}</aside>
      <section className="p-4">{children}</section>
      <aside className="bg-sky-100 p-4">{secondarysidebar}</aside>
    </div>
  );
};
export default Layout;
