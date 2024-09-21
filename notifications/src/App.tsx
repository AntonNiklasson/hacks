import { AnimatePresence, LayoutGroup, motion, Variants } from "framer-motion";
import { FC, useCallback, useId, useRef, useState } from "react";

type Notification = {
  id: string;
  title: string;
  body: string;
};

const variants: Variants = {
  coming: () => ({
    x: `0px`,
    y: `100px`,
    z: `0px`,
  }),
  idle: (index: number) => ({
    x: `0px`,
    y: `${index * -15}px`,
    z: `${index * -100}px`,
  }),
  hover: (index: number) => ({
    x: "0px",
    y: `${index * -78}px`,
    z: "0px",
    transition: {
      type: "spring",
      bounce: 0.15,
      duration: 0.5,
    },
  }),
  going: () => ({
    x: "40px",
    opacity: 0,
    filter: "blur(3px)",
  }),
};

const Notifications: FC<{
  notifications: Notification[];
  dismiss: (id: string) => void;
}> = ({ notifications, dismiss }) => {
  const leaveTimer = useRef<number | null>(null);
  const [hover, setHover] = useState(false);

  const onPointerEnter = useCallback(() => {
    if (leaveTimer.current !== null) {
      clearTimeout(leaveTimer.current);
    }

    setHover(true);
  }, []);

  const onPointerLeave = useCallback(() => {
    leaveTimer.current = setTimeout(() => {
      setHover(false);
    }, 500);
  }, []);

  return (
    <motion.div
      key="container"
      className="content-end notification-card-stack fixed bottom-0 right-0 p-8 w-[450px] max-w-full"
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
    >
      <AnimatePresence>
        {notifications.map((notif, index) => {
          return (
            <motion.div
              key={notif.id}
              layout
              layoutId={notif.id}
              onClick={() => dismiss(notif.id)}
              className={`notification-card shadow rounded-lg border p-4 text-sm bg-white h-[70px] overflow-hidden`}
              variants={variants}
              custom={index}
              initial="coming"
              animate={hover ? "hover" : "idle"}
              exit="going"
              transition={{
                type: "spring",
                bounce: 0.2,
                duration: 0.5,
              }}
            >
              <h2 className="font-bold">{notif.title}</h2>
              <h3 className="text-gray-500">{notif.body}</h3>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </motion.div>
  );
};

function App() {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const add = useCallback(() => {
    setNotifications((state) => [
      {
        id: Date.now().toString(),
        title: "Lorem Ipsum",
        body: "Elit minim veniam duis non lorem incididunt",
      },
      ...state,
    ]);
  }, []);

  const dismiss = useCallback((id: string) => {
    setNotifications((notifications) =>
      notifications.filter((n) => n.id !== id),
    );
  }, []);

  return (
    <div className="App">
      <div className="m-auto text-center space-y-4 text-gray-400 font-bold">
        <button
          disabled={notifications.length > 4}
          onClick={add}
          className="py-2 px-4 rounded-xl border-2 border-gray-400 font-bold hover:border-gray-700 transition-all text-zinc-400 hover:text-zinc-800"
        >
          notify
        </button>
        <p className="text-sm">click to dismiss</p>
      </div>

      <Notifications notifications={notifications} dismiss={dismiss} />
    </div>
  );
}

export default App;
