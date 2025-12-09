import ghost from "./assets/ghost.png";
import frame from "./assets/frame.png";
import cloud from "./assets/cloud.png";
import snake from "./assets/snake.png";
import { FC, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const FloatingImage: FC<{
  src: string;
  onClick: () => void;
  active: boolean;
}> = ({ src, onClick, active }) => {
  return (
    <motion.img
      src={src}
      onClick={onClick}
      className="w-48"
      variants={{
        hidden: {
          opacity: 0,
          y: 100,
        },
        visible: {
          opacity: 1,
          y: [-5, 7],
          rotate: [2, -1, 1, -3],
          scale: active ? 1.6 : 1,
          transition: {
            y: {
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
            },
            rotate: {
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            },
          },
        },
      }}
      transition={{
        duration: 1,
      }}
    />
  );
};

const characters = {
  ghost,
  frame,
  cloud,
  snake,
};

function App() {
  const [view, setView] = useState<keyof typeof characters>(null);

  return (
    <AnimatePresence>
      <motion.div
        className="bg-black w-full h-full flex justify-center items-center gap-1"
        initial="hidden"
        animate="visible"
        transition={{
          staggerChildren: 0.07,
        }}
      >
        {Object.entries(characters).map(([id, src]) => (
          <FloatingImage
            src={src}
            onClick={() => setView(id)}
            active={view === id}
          />
        ))}
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
