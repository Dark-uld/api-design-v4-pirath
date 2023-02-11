import * as user from "../user";

describe("user handler", () => {
  it("should create a new user", async () => {
    const req = { body: { username: "hello", paswword: "hi" } };
    const res = {
      json({ token }) {
        expect(token.tobeTruthy());
      },
    };
    await user.createNewUser(req, res, () => {});
  });
});
