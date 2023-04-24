import React from "react";
import styles from "./layout.module.css";
import Counter from "../components/counter/counter";
export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1 className={styles.h1PostsLayout}>Este es el layout de los posts</h1>
      <Counter />
      {children}
    </div>
  );
}
