import { Paginator } from "./Paginator";
import { create } from "react-test-renderer";

describe("Paginator components test", () => {
  it("pages count is 26 but should be showed only 25", () => {
    const component = create(
      <Paginator
        totalItemsCount={26}
        pageSize={1}
        currentPage={1}
        onPageChanged={(x) => x}
        portionSize={25}
      />
    );
    const root = component.root;
    let spans = root.findAllByType("span");

    expect(spans).not.toBeNull();
    expect(spans.length).toBe(25);
  });

  it("if pages count is more then 25 button NEXT should be present", () => {
    const component = create(
      <Paginator
        totalItemsCount={26}
        pageSize={1}
        currentPage={1}
        onPageChanged={(x) => x}
        portionSize={25}
      />
    );
    const root = component.root;
    let button = root.findAllByType("button");
    expect(button).not.toBeNull();
    expect(button.length).toBe(1);
  });
});
