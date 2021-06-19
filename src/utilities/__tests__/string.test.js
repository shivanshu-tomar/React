import { capitalize } from "../capitalize";
describe("capitilize tests cases", () => {
  it("must return Test for TEST", () => {
    expect(capitalize("TEST")).toBe("Test");
  });
  it("must return Test@123 for TEST@123", () => {
    expect(capitalize("TEST")).toBe("Test");
  });
  it("must return Shivanshu for shivAnshu", () => {
    expect(capitalize("shivAnshu")).toBe("Shivanshu");
  });
  it("must return 123 for 123", () => {
    expect(capitalize("123")).toBe("123");
  });
  it("must return '' for ''", () => {
    expect(capitalize("")).toBe("");
  });
});
