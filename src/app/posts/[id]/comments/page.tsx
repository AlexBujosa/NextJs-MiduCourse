import Comments from "./comments";
import React from "react";
type Parameters = {
  params: {
    id: number;
  };
};
const Comment = ({ params }: Parameters) => {
  const { id } = params;
  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <Comments id={id} />
    </>
  );
};

export default Comment;
