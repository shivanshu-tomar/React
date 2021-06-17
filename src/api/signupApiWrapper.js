import apiHelper from "./apiHelper";
const signup = (data) => {
  return apiHelper("post", "https://api.taiga.io/api/v1/auth/register", {
    ...data,
  });
};
export default signup;
