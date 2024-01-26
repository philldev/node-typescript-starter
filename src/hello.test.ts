import { expect, test } from "vitest";
import { hello } from "@/hello";

test("should be 'Hello, world!'", () => {
  expect(hello).toBe("Hello, world!");
});
