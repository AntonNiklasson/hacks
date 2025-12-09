import { AnimatePresence, motion } from "framer-motion";
import houseImg from "./assets/house.jpg";
import oceanImg from "./assets/ocean.jpg";
import roadsImg from "./assets/roads.jpg";
import waterImg from "./assets/water.jpg";

const cardVariants = {
  in: {
    y: -10,
    opacity: 0,
    rotate: 0,
  },
  animate: (index) => ({
    x: 0,
    y: 0,
    rotate: index * 2 * ((index % 2) * 2),
  }),
  out: {
    y: 20,
    opacity: 0,
  },
  hover: (index) => ({
    scale: 1.05,
    y: -30,
  }),
};

function App() {
  const cards = [
    {
      title: "This is a house",
      cover: houseImg,
    },
    {
      title: "The deep blue ocean",
      cover: oceanImg,
    },
    {
      title: "Everyone is in a hurry",
      cover: roadsImg,
    },
    {
      title: "Swimming is nice and cold",
      cover: waterImg,
    },
  ];

  return (
    <div className="h-full bg-sky-100 text-black p-4">
      <div className="h-full relative">
        <AnimatePresence>
          {cards.map((card, index) => (
            <motion.div
              className="absolute top-1/2 left-1/2 w-[300px] h-[400px] rounded-xl bg-white shadow overflow-hidden col-span-full"
              variants={cardVariants}
              initial="in"
              animate="animate"
              exit="out"
              whileHover="hover"
              custom={index}
            >
              <span className="text-red-400 text-xl">{card.title}</span>
              <img
                src={card.cover}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
