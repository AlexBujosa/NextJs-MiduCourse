import Link from "next/link";
import React from "react";
type Parameters = {
  params: {
    id: number;
  };
};
const fetchSinglePost = (id: number) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
};
const Post = async ({ params }: Parameters) => {
  const { id } = params;
  const singlePost = await fetchSinglePost(id);
  return (
    <>
      <h1>Este es el {id}</h1>
      <h1>{singlePost.title}</h1>
      <p>{singlePost.body}</p>
      <Link href={`/posts/${id}/comments`}>Ver Comentarios</Link>
    </>
  );
};

export default Post;
