import { add } from "./foo";

describe("add:", () => {
    test("add(1 + 1) = 2", () => {
        expect(add(1, 1)).toBe(2);
    });
});
