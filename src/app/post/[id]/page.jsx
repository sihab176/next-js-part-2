import React from "react";
// ! handle single Post by id ====>
export const getSinglePost = async (post_id) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${post_id}`
  );
  const data = res.json();
  return data;
};
//! next js meta tag =============>
export async function generateMetadata({ params }) {
  // read route params
  const { id } = await params;
  // fetch data
  const singlePost = await getSinglePost(id);
  return {
    title: singlePost.title,
    description: singlePost.body,
  };
}
// =======================  components ==========================>
const postDetails = async ({ params }) => {
  const id = await params.id;
  const singleData = await getSinglePost(id);
  // console.log(singleData);

  return (
    <div className="text-center w-[500px]">
      details
      <h1 className="text-2xl text-yellow-500">{singleData.title}</h1>
      <p>{singleData.body}</p>
    </div>
  );
};

export default postDetails;
