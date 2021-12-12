import React from "react";
import { render } from "@testing-library/react";
import { TodoListItem } from "./TodoListItem";

describe("TodoListItem", () => {
  it("render the component correctly", () => {
    const toggle = jest.fn();

    const root = render(
      <TodoListItem
        todo={{ text: "test text", complete: true }}
        toggleComplete={toggle}
      />
    );
    expect(root).toBeTruthy();
  });
});
