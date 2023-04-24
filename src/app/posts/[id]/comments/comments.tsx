type Comment = {
  postId: number;
  name: string;
  id: number;
  email: string;
  body: string;
};
const fetchCommentsPost = (id: number) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
};
export default async function Comments({
  id,
}: {
  id: number;
}): Promise<JSX.Element> {
  const commentsPost = await fetchCommentsPost(id);
  return (
    <>
      {commentsPost.map((comment: Comment) => (
        <article key={comment.id}>
          <h1>Autor: {comment.email}</h1>
          <p>{comment.body}</p>
          <br />
        </article>
      ))}
    </>
  );
}
