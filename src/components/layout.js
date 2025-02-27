// src/components/Layout.js
import { motion } from 'framer-motion';

const Layout = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3.5 }}
    >
      {children}
    </motion.div>
  );
};

export default Layout;
