// React imports
import React from "react";
import { motion } from "framer-motion";

// Component imports
import Form from "../../components/Form/Form";

// CSS imports
import "./Auth.css";

function Auth() {
  return (
    <motion.div
      id="auth-page"
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <Form></Form>
    </motion.div>
  );
}

export default Auth;
