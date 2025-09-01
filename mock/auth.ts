import type { MockMethod } from "vite-plugin-mock";

export default [
  {
    url: "/api/login",
    method: "post",
    response: ({ body }) => {
      const { username, password } = body || {};
      if (username && password) {
        return {
          code: 0,
          data: {
            token: "mock-token-123",
            user: { username },
          },
          message: "ok",
        };
      }
      return { code: 1, message: "用户名或密码错误" };
    },
  },
] as MockMethod[];
