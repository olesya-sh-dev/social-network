import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("status from props should be in the state", () => {
    const component = create(<ProfileStatus status="it-kamasutra.com" />);
    const instance = component.getInstance() as unknown as ProfileStatus;
    expect(instance.state.status).toBe("it-kamasutra.com");
  });

  test("after rendering span should be displayed", () => {
    const component = create(<ProfileStatus status="it-kamasutra.com" />);
    const root = component.root;
    const span = root.findByType("span");
    expect(span).not.toBeNull();
  });

  test("after rendering input shouldn't be displayed", () => {
    const component = create(<ProfileStatus status="it-kamasutra.com" />);
    const root = component.root;
    expect(() => {
      const input = root.findByType("input");
    }).toThrow();
  });

  test("after rendering span should contain correct status", () => {
    const component = create(<ProfileStatus status="it-kamasutra.com" />);
    const root = component.root;
    const span = root.findByType("span");
    expect(span.children[0]).toBe("it-kamasutra.com");
  });

//   test("input should be displayed in edit mode instead of span", () => {
//     const component = create(<ProfileStatus status="it-kamasutra.com" />);
//     const root = component.root;
//     const span = root.findByType("span");
//     span.props.onDoubleClick();
//     let input = root.findByType("input");
//     expect(input).toBe("it-kamasutra.com");
//   });
  test("callback should be called", () => {
    const mockCallback = jest.fn();
    const component = create(<ProfileStatus status="it-kamasutra.com" updateStatus={mockCallback} />);
    const instance = component.getInstance() as unknown as ProfileStatus;
    instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
  });
});