import React from "react";
import renderer from "react-test-renderer";
import TextInput from "./TextInput";

describe("TextInput", () => {
  it("should renders correctly", () => {
    const tree = renderer.create(<TextInput name="test" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
