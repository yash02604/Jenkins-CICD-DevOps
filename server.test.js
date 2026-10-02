const test = require("node:test");
const assert = require("node:assert");

test("application test", () => {
  const message = "Hello from Jenkins CI/CD Demo App!";

  assert.strictEqual(
    message,
    "Hello from Jenkins CI/CD Demo App!"
  );
});