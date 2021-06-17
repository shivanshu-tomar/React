import apiHelper from "./apiHelper";
const login = (data) => {
  return apiHelper("post", "https://api.taiga.io/api/v1/auth", {
    ...data,
    type: "normal",
  });
};
export default login;
