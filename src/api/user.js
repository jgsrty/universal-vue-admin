import service from "@/tools/request";

export function login({ username, password }) {
  return service({
    url: "/user/login",
    method: "post",
    data: {
      username,
      password
    }
  });
}