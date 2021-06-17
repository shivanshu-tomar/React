import apiHelper from "./apiHelper";
export const getPosts = () => {
  return apiHelper("get", "https://jsonplaceholder.typicode.com/posts", {});
};
export const getPost = ({ id }) => {
  return apiHelper(
    "get",
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {}
  );
};
