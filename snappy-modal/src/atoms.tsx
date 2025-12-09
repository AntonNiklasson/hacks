import { motion } from "framer-motion";
import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";

export const Button: FC<
  PropsWithChildren & ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="rounded bg-gray-200 text-black text-sm px-2 py-1"
    >
      {children}
    </button>
  );
};

export const ModalView: FC<PropsWithChildren> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};
