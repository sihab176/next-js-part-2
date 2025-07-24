import React from "react";

export const singlePost = async (post_id) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${post_id}`
  );
  const data = res.json();
  return data;
};

const postDetails = async ({ params }) => {
  const id = await params.id;
  const singleData = await singlePost(id);
  console.log(singleData);

  return (
    <div className="text-center w-[500px]">
      details
      <h1 className="text-2xl text-yellow-500">{singleData.title}</h1>
      <p>{singleData.body}</p>
    </div>
  );
};

export default postDetails;
