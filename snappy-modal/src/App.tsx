import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useState } from "react";
import { Button, ModalView } from "./atoms";

type ViewState = null | "root" | "image-1" | "image-2" | "image-3";

function renderContent(
  view: ViewState,
  set: (v: ViewState) => void,
): ReactNode {
  switch (view) {
    case "root":
      return (
        <ModalView key="root">
          <div className="flex flex-col gap-16">
            <h1>This is the root view</h1>

            <div className="flex flex-col gap-2">
              <Button onClick={() => set("image-1")}>profile</Button>
              <Button onClick={() => set("image-2")}>configuration</Button>
              <Button onClick={() => set("image-3")}>settings</Button>
              <Button onClick={() => set(null)}>exit</Button>
            </div>
          </div>
        </ModalView>
      );
    case "image-1":
      return (
        <ModalView key="image-1">
          <div className="flex flex-col items-start gap-8">
            <img
              src="https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              width="250"
              height="250"
            />
            <Button onClick={() => set("root")}>back</Button>
          </div>
        </ModalView>
      );
    case "image-2":
      return (
        <ModalView key="image-2">
          <div className="flex flex-col  items-start gap-8">
            <img
              src="https://images.pexels.com/photos/1563256/pexels-photo-1563256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              width="400"
              height="400"
            />
            <Button onClick={() => set("root")}>back</Button>
          </div>
        </ModalView>
      );
    case "image-3":
      return (
        <ModalView key="image-3">
          <div className="flex flex-col items-start gap-8">
            <img
              src="https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              width="400"
              height="300"
            />
            <Button onClick={() => set("root")}>back</Button>
          </div>
        </ModalView>
      );
    default:
      return null;
  }
}

function App() {
  const [view, setView] = useState<ViewState>(null);

  return (
    <>
      <div className="bg-white h-full flex flex-row">
        <aside className="basis-[200px] bg-gray-50 p-4">
          <h3 className="text-xl text-gray-500">Sidebar</h3>
        </aside>

        <main className="grow bg-gray-100 p-4 space-y-8">
          <h1 className="text-2xl">snappy modal</h1>
          <img
            src="https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            width="300"
            height="400"
          />
          <Button
            className="rounded text-white px-4 py-2 bg-sky-300 p-2"
            onClick={() => setView("root")}
          >
            open modal
          </Button>
        </main>
      </div>

      <AnimatePresence>
        {view !== null && (
          <div className="fixed inset-0 flex">
            <motion.div
              key="backdrop"
              className="absolute inset-0 bg-black"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            ></motion.div>

            <motion.div
              className="bg-white m-auto shadow-xl rounded-xl p-4 min-w-[400px] min-h-[400px]"
              layout="size"
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              transition={{
                type: "spring",
                bounce: 0.2,
                duration: 2.6,
              }}
            >
              <AnimatePresence mode="popLayout">
                {renderContent(view, setView)}
              </AnimatePresence>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
