import React from "react";
import renderer from "react-test-renderer";
import CustomTodoInput from "./CustomTodoInput";

describe("CustomTodoInput", () => {
  it("should renders correctly", () => {
    const tree = renderer.create(<CustomTodoInput name="test" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
