import { render } from "@testing-library/react";
import { OrderStatus } from "./order-status";

describe("OrderStatus", () => {
  it("should disaplay the correct color and text based on status pending", () => {
    // Pending
    const wrapper = render(<OrderStatus status="pending" />);

    expect(wrapper.getByText("Pending")).toBeInTheDocument();

    const badgeStatusColorElement = wrapper
      .getByTestId("badge")
      .querySelector("span");

    console.log(badgeStatusColorElement?.outerHTML);

    expect(badgeStatusColorElement).toHaveClass("bg-slate-500");
  });

  it("should disaplay the correct color and text based on status canceled", () => {
    // Canceled
    const wrapper = render(<OrderStatus status="canceled" />);

    expect(wrapper.getByText("Canceled")).toBeInTheDocument();

    const badgeStatusColorElement = wrapper
      .getByTestId("badge")
      .querySelector("span");

    console.log(badgeStatusColorElement?.outerHTML);

    expect(badgeStatusColorElement).toHaveClass("bg-rose-500");
  });

  it("should disaplay the correct color and text based on status processing", () => {
    // Processing
    const wrapper = render(<OrderStatus status="processing" />);

    expect(wrapper.getByText("Processing")).toBeInTheDocument();

    const badgeStatusColorElement = wrapper
      .getByTestId("badge")
      .querySelector("span");

    console.log(badgeStatusColorElement?.outerHTML);

    expect(badgeStatusColorElement).toHaveClass("bg-amber-500");
  });

  it("should disaplay the correct color and text based on status delivering", () => {
    // Delivering
    const wrapper = render(<OrderStatus status="delivering" />);

    expect(wrapper.getByText("Delivering")).toBeInTheDocument();

    const badgeStatusColorElement = wrapper
      .getByTestId("badge")
      .querySelector("span");

    console.log(badgeStatusColorElement?.outerHTML);

    expect(badgeStatusColorElement).toHaveClass("bg-amber-500");
  });

  it("should disaplay the correct color and text based on status delivered", () => {
    // Delivered
    const wrapper = render(<OrderStatus status="delivered" />);

    expect(wrapper.getByText("Delivered")).toBeInTheDocument();

    const badgeStatusColorElement = wrapper
      .getByTestId("badge")
      .querySelector("span");

    console.log(badgeStatusColorElement?.outerHTML);

    expect(badgeStatusColorElement).toHaveClass("bg-emerald-500");
  });
});
