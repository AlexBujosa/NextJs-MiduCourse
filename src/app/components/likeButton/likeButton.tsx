"use client";
import React, { useState } from "react";

export default function LikeButton() {
  const [like, setLike] = useState(false);
  const handleClick = () => {
    setLike((oldLike) => {
      return !oldLike;
    });
  };
  return <button onClick={handleClick}>{like ? "❤️" : "♡"}</button>;
}
