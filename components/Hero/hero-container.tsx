'use client';
import { motion } from 'motion/react';
import React from 'react';

import Brandcontainer from '../Brandcontainer/Brandcontainer';
import CounterContainer from '../CounterContainer/CounterContainer';

export default function HeroContainer() {
  return (
    <>
      {/* middle  */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          type: 'spring',
          stiffness: 100,
          delay: 0.6,
        }}
        viewport={{ once: true }}
      >
        <Brandcontainer />
        {/* bottom  */}
        <CounterContainer />
      </motion.div>
    </>
  );
}
