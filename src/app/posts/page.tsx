import React from "react";
import LikeButton from "../components/likeButton/likeButton";
import Link from "next/link";

const FetchPost = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
};

type Post = {
  id: number;
  title: string;
  body: string;
};

const Posts = async () => {
  const posts = await FetchPost();
  return (
    <section>
      {posts.map((post: Post) => (
        <article key={post.id}>
          <Link href="/posts/[id]" as={`/posts/${post.id}`}>
            <h2 className="text-3xl font-bold">{post.title}</h2>
          </Link>

          <p>{post.body}</p>
          <LikeButton />
        </article>
      ))}
    </section>
  );
};

export default Posts;
