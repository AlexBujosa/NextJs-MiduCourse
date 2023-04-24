"use client";
import React, { useState } from "react";
import styles from "./counter.module.css";
export default function Counter() {
  const [counter, setCounter] = useState(0);
  const handleCounter = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <p>{counter}</p>
      <button onClick={handleCounter} className={styles.btnLayoutIncrement}>
        Increment
      </button>
    </div>
  );
}
